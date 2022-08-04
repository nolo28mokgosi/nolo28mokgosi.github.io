---
slug: expodeployment
sidebar_label: 'Expo Deployment'
sidebar_position: 3
---
# Expo Deployment
## Context
I've been playing around with React Native for quite sometime but I have never deployed anything on iStore. Part of the learning I decided to take on the challenge.

## Solution
To deploy to Apple Store, you need to join [Apple Developer Program](https://developer.apple.com/programs/) where you pay $99 per year.

Once registered, you need to go through below steps as documented [here](https://docs.expo.dev/build/setup/) (Provided you built your app using expo)
1. Install the latest EAS CLI
2. Configure the project
3. Run a build. Can be for ios or android platform
4. Deploy the build

## Notes
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




## Reference
- #1:https://levelup.gitconnected.com/react-native-how-to-publish-an-expo-app-to-testflight-debug-common-errors-90e427b4b5ea
- #2: https://docs.expo.dev/build/setup/
- #3: https://docs.expo.dev/submit/ios/
- #4: https://stackoverflow.com/questions/71411920/react-native-expo-build-number-does-not-increase
- #5: https://gabrielleearnshaw.medium.com/versioning-mobile-app-releases-like-a-pro-25137766150a
