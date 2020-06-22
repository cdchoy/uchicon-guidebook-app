# uchicon-guidebook-app

Source code for the University of Chicago Japanese Animation ([UCJAS](http://jas.uchicago.edu/)) 
[UChi-con](https://www.uchi-con.com/) Guidebook Application. This application is built with 
[React Native](https://reactnative.dev/) so that it can be deployed on both iOS and Android platforms.
The production form of the app is distributed on both the Apple App Store and Google Play Store under 
the title **UChi-Con Guidebook**.

#### Purpose 

The guidebook for UCJAS' UChi-con is typically an eight-page paper booklet spread across two sheets folded 
"hamburger style" by a small army of volunteers some evening in Spring quarter. In that small space, it manages 
to include panel schedules, event lists, building maps, room screenings, sponsors, and more. However, it has become 
increasingly harder to generate as both the number of con attendees and, consequently, number of guidebooks 
required goes up annually. In 2019, we created 1200 guidebooks for 1500+ attendees. 

As both a free convention and student-organization, printing this sheer volume becomes a financial and 
logistical strain as personal, dorm, and campus printers are all leveraged to meet the demand. As a supplement,
PDFs that could be downloaded from a bit.ly link were used, but ultimately not that popular. Briefly, we also 
looked into solutions like the Guidebook application in popular use by major anime conventions such as ACen and 
Otakon. However, it proved to be much too expensive for our use case.

The solution here is, of course, obvious to you who is reading a README for a Github repository called 
**uchicon-guidebook-app**...

#### Design Choices

**React Native** was chosen to build the app for several reasons. First and foremost, the fact that we could build 
an app bundle with it that could be deployed on both iOS and Android with ease; we would not need to write two 
different apps. Second, it's a popular language that's easy to pick up and has a lot of support online for. The 
tradeoff however when compared to using Apple's XCode and Spark or Google's Android Studio is that we lose a 
few size optimizations, and it's not as seamless in deployment. Our app is already reasonably small at around 
50mb so that's not a big deal. The issues with deployment are also not an immediate concern as we can get around 
certain software security recommendations that Apple sets forth without effort. As those recommendations become 
stricter rules, I expect more effort to be required in vetting the package dependencies that we use. However, I 
do NOT expect it to become *impossible* to deploy React Native built apps to either store. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for 
development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node.js](https://nodejs.org/en/) - for installing and managing our dependencies with **npm**.
- [Expo CLI](https://expo.io/) - for compiling code into app bundles

Once installed and with the project pulled, run `npm install` from the project root to install all 
the project dependencies onto your machine.

### Running Locally

From the repository root, run:
```
$ npm start
```

This will use Expo to build and host the app on your local machine. It should also bring up a QR code 
along with instructions on how to view the app either on your smartphone or in a simulator on your 
desktop machine.

## Deployment

This section details bundling, distribution, and management of the application in production.
Currently, we host the app on both the iOS App Store and the Google Play Store. 

### Bundling

The app bundle is the signed, size-optimized, and finalized version of the code that you want to push to 
production. Thanks to Expo, building it is quite easy. The `app.json` file is where you can edit the app's
metadata. Note that the app version here should match the release version of the new app update. Once that 
looks good, refer to the below methods for platform-specific steps: 

#### Android Expo.io

Aside from the Play Store, Android apps can also be downloaded and run on mobile devices with the Expo 
app. Running the following command will generate a link which will host a QR code for android devices to scan 
with the Expo app.

```
$ expo publish
```

Note that you may need to have an expo account and login via command line as part of this command. It will 
take some time to complete building the app bundle, but once its finished it will produce your desired hyperlink.
It should look something like: `https://exp.host/@cchoy96/uchi-con-guidebook` 

#### Android Play Store

App distribution is done through the [Google Play Console](https://developer.android.com/distribute/console). 
Currently, the app is hosted under an account for `chrischoythehuman@gmail.com`.

You can build the app bundle with the following command. Note that it may take a while.
```$xslt
$ expo build:android
```

Once the build has finished, use the link provided to download the **.apk** file it generated.

Next, go to the [Play Console](https://developer.android.com/distribute/console) and sign in. Under 
"All Applications" click on the UChi-con Guidebook app to open its dashboard. Navigate to *Release Management > 
App Releases > Production Track*. Click on "Edit Release" and follow the steps to upload a new version of 
the application. Note that we use Google to manage our signing keys. This is for the best as manual 
management of those keys opens us up to potentially losing them and with them the ability to create any 
more releases of the application...

#### iOS App Store

App distribution is done through the [Apple Developer website](https://developer.apple.com/). Currently, the 
app is hosted under a developer account for `contact@chrischoy.net`. 

You can build the app bundle with the following command. Note that it may take a while.
```$xslt
$ expo build:ios
```

Once the build has finished, use the link provided to download the **.ipa** file it generated.

TODO: detail steps to take in developer.apple.com for deployment

## Built With

- React Native
- Expo CLI
- Node.js

## Code Structure

The source code for the application has been organized into the following directories and spending some time 
browsing through them will give a better understanding:

- `assets/` - stores non-javascript information like jsons, images, fonts tff's, etc.
- `components/` - code for specific components (ie building blocks) of a screen
- `constants/` - variables that should be available across several app screens/components
- `navigation/` - code for navigating between screens/windows of the application
- `screens/` - main screen components of the application window

Other files of note:

- `README.md` - this file. should provide a good introduction to this project and how to work on it.
- `.gitignore` - specifies certain, typically auto-generated, files and directories that shouldn't be pushed 
between devices.
- `App.js` - our effective "main()" function. This is what's specifically rendered as the application and 
everything else is nested beneath it.
- `app.json` - metadata for publishing the application using **Expo**
- `package.json` - related to **npm**. Allows you to manually set versions and macros (eg. npm start).
- `package-lock.json` - lists out all of our npm dependencies. Mostly edited by npm itself when you use commands 
like "npm install ...". You shouldn't need to touch this.
- `babel.config.js` and `__tests__/` - no idea. please don't ask. I did not create or touch these...


## Authors
- [Chris Choy](https://github.com/cchoy96) - *Initial work, README*

## Future Work

There is plenty of work to do in making the UChi-con Guidebook a better application. For those 
looking to aid in doing so, please take a look at [Todo.md](Todo.md).