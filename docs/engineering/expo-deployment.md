---
slug: expodeployment
sidebar_label: 'Expo Deployment'
sidebar_position: 3
---
# Expo Deployment
## Context
Expo is a framework to build React Native apps. This document explains how to deploy react native app to iStore and Google Play.

## Deploy to iStore
To deploy to Apple Store, you need to join [Apple Developer Program](https://developer.apple.com/programs/) where you pay $99 per year.

Once registered, you need to go through below steps as documented [here](https://docs.expo.dev/build/setup/) (Provided you built your app using expo)

All platforms `eas build --platform all`
1. Install the latest EAS CLI `npm install -g eas-cli`
2. Log into your expo account `eas login`
3. Ensure the build number is the correct one on app.config
4. Prebuild the app by running `npx expo prebuild`
5. Ensure that the build number is updated on Info.plist inside the iOS folder
6. Build the app by running `eas build -p ios`
7. Submit the app to applestore by running `eas submit -p ios`

On build and submit, follow the prompts to log into apple store

Should you choose to upload manually, step 7 will be replaced by following:
7. Download transporter
8. Download latest build from eas
9. Upload the build using transporter

## Deploy to Android
1. Install the latest EAS CLI `npm install -g eas-cli`
2. Log into your expo account `eas login`
3. Ensure the build number is the correct one on app.config
4. Prebuild the app by running `npx expo prebuild`
5. Ensure that the build number is updated on Info.plist inside the iOS folder
6. Build the app by running `eas build -p android`
7. Submit the app to Google Play by running `eas submit -p android`

Should you choose to upload manually, step 7 will be replaced by following:
7. Download latest build from eas
8. Upload in the test section of Google Play Console.

## Notes
### Build Issues
Should you experience build issues that takes longer to fix, follow below steps:
1. Deleted the iOS and android folders
2. Ran eas prebuild to recreate the folders
3. Note: eas run:ios still complained about pods crap
4. Ran eas build:ios to build and it worked
5. Ran eas submit -p iOS to push to IOS and it worked.

### Project config
In the project config, setup the following:
- Build number
- Version
- Icon: Setup a 1024 by 1024 icon and replace icon in static files
- Splash Screen: Create a 1284 by 2778 splash screen and replace the default in static files.

### Increasing Version Number
Version number has 3 components. On 1.2.3, 
- 3 is patch for minor changes or bug fixed
- 2 is minor for new functionality
- 1 is major changes, like rewrite of a project or major feature

### Testing

You can create internal and external list on apple. 
Internal list can test almost immediately, for external, might need approval.

### IOS Submission
Preview Picture
- 6.5 Picture should be 1284 X 2778 or 2778 X 1242
- 5.5 pictures should be 1242 X 2208 or 2208 X 1242

Submitting to store is not straight forward. You have specify what user information you are collecting and purpose like tracking or advertising.  

Once submission is successful, you will get a note like "Your binary has been successfully uploaded to App Store Connect!".You will receive an e-mail when the processing finishes.It usually takes about 5-10 minutes depending on how busy Apple servers are.

### In case of build failure
It is not easy to debug eas build compared to legacy expo build:ios. In eas, it's difficult to differentiate between errors and warning.
You log into expo portal and navigate to Fastlane and try figure out which package is breaking your build. 
In my case it was the firebase package, couldn’t see error clearly on the portal so I ran expo build:ios and got the error highlighted in red on the terminal. 


Same error was there on Fastlane output but was part of the warnings.
Solution marked as correct on [stackoverflow](https://stackoverflow.com/questions/72179070/react-native-bundling-failure-error-message-while-trying-to-resolve-module-i) fixed by build.



### Build number and version not increasing issue
Increasing build number on app.config might not increase build number for ios.
- Go to to iOS…Plist and increase the version
- Run “expo prebuild”

Ensure you run expo rebuild command according to [stackoverflow](https://stackoverflow.com/questions/71411920/react-native-expo-build-number-does-not-increase)

## Conclusion
Visit [expo](https://expo.dev) for latest deployment information.




## Reference
- #1:https://levelup.gitconnected.com/react-native-how-to-publish-an-expo-app-to-testflight-debug-common-errors-90e427b4b5ea
- #2: https://docs.expo.dev/build/setup/
- #3: https://docs.expo.dev/submit/ios/
- #4: https://stackoverflow.com/questions/71411920/react-native-expo-build-number-does-not-increase
- #5: https://gabrielleearnshaw.medium.com/versioning-mobile-app-releases-like-a-pro-25137766150a
