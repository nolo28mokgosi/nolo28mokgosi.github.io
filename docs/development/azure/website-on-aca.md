---
slug: websiteOnAzureContainerisedApps
sidebar_label: 'Containerised website in Azure'
sidebar_position: 3
---
# Containerised website in Azure
## Context
There are multiple ways of containerising applications in Azure. This article focuses on deploying an application to Azure Container Apps (ACA). Focus is on following:
1. Creating .NET website (MVC)
2. Bulding and testing the image
3. Pushing container to registry
4. Deploying container to ACA
5. Binding website to custom domain


## Prerequisites
1. Install [Docker](https://docs.docker.com/desktop/install/mac-install/). Should you struggle to run docker, follow this [post installation](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) steps.
2. Install VSCode
3. Install [docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) in VS Code
4. Create Azure Account

## Create .NET Web app project
1. Create a project folder in your development space
2. Execute this command in your project folder  
`dotnet new mvc –name MVCWebApplication`
3. Open your project folder in VS Code

### Add Docker files

1. On Mac, open command palette (Shift + Commmand + P) and execute **"Docker: Add Docker Files to Workspace"** command.
This will add Dockerfile and .dockerignore file 
2. On VS Code terminal, execute `dotnet build` command to build the application. Ensure you have 0 Errors, 0 Warnings.
3. Execute `dotnet publish` command to make sure that there won't be issues when building the image.
4. Ensure your docker file has `ENV ASPNETCORE_URLS=http://*:5000:` line  
![dockerfile](/img/docs/dockerfile.png)

## Build & Test Image
1. Open command palette (Shift + Commmand + P) and execute **"Docker Images: Build Image..."** command
2. Open docker explorer and make sure the image is available  
![docker explorer](/img/docs/dockerext.png)

3. Right click image you want to test and select "Run". In my case it's latest under ayobaclientweb
4. The green play button should appear in containers section which allow you to test  
![docker explorer](/img/docs/dockerext-running.png)
5. Right click the green icon and select "Open in Browser".

## Push image to Azure Container Registries
1. On  portal.azure.com, search for container registry and create one  
![containerregirsty](/img/docs/containerregistry.png)
2. On VS Code, registries section, select "Connect Registry" icon and follow steps to connect to Azure. Once connected, under azure icon you should be able to see registry you created in number 1.  
![registries](/img/docs/vscoderegistries.png)
3. On images section, right click the and select "push". Follow steps to push to the connected azure registry
![docker explorer](/img/docs/dockerext.png)

## Deploy to Azure Container Apps (ACA)
1. On  portal.azure.com, search for "Container Apps" & create new. Provide required details and click next
![containeraaps](/img/docs/aca/aca-1.png)
2. Unselect "Use quick image" checkbox and select the image you pushed to azure registry
![containeraaps](/img/docs/aca/aca-2.png)
3. On the same page, enable ingress and make sure below settings are followed. Click review + create
![containeraaps](/img/docs/aca/aca-3.png)
4. Once container app is created, select "Application URL" on overview section to test the web app

### Custom Domain

#### Buy or create certificate
To add a custom domain you will need a certificate. You can either buy the certificate or create a free one via [Let's Encrypt](https://dev.to/shibayan/how-to-quickly-setup-a-lets-encrypt-certificate-in-azure-container-apps-3nd7).
I chose to buy cert from Go Daddy for $40 for a year. Azure supports managed certificate on app services but not on container apps yet.

GoDaddy provides 5 files (including the private key you download before creating the certificate)


If your certificate does not have private key, you'll get below error when you try to upload PEM file from GoDaddy.
**“Failed to add new private key certificate: [cert name]. Certificate must contain one private key.”**

To combine private key and cert, you have to
1. Convert your private key text to key using below command  
`openssl rsa -in key.txt -outform pem -out cert.key`
2. Should you get UTF-8 error when executing above-mentioned command, Open the key file in Notepad++ and verify the encoding. If it says UTF-8-BOM then change it to UTF-8. Save the file and try again.
Alternatively you can use vs code to change the encoding using the bottom toolbar!
Once converted, execute above-mentioned command again
3. Combine cert and key using below command  
`openssl pkcs12 -inkey cert.key -in cert.pem -export -out output.pem`  
If you like .pfx file, use below command  
`openssl pkcs12 -inkey cert.key -in cert.crt -export -out output.pfx`  

#### Setup Custom Domain
1. Go to your container app
2. Select "Custom Domain" on the left menu
3. Select "Add Custom Domain"
4. Enter domain details, copy CNAME and TXT values and add them to your domain settings with your provider
5. Validate and bind the certificate

![containeraaps](/img/docs/aca/customdomain.png)


## Reference
- [Manage secrets in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets?tabs=arm-template)
- [Custom domain names and certificates in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-certificates)
- [How to override local User Secrets and appsettings.json with Azure Container App's Secrets?](https://stackoverflow.com/questions/74070712/how-to-override-local-user-secrets-and-appsettings-json-with-azure-container-app)
- [Deploy Azure Container Apps with Bicep](https://github.com/ThorstenHans/azure-container-apps-bicep)
- [How to deploy Azure Container Apps with Bicep](https://www.thorsten-hans.com/how-to-deploy-azure-container-apps-with-bicep/)
