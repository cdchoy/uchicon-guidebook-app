import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {
  SocialIcon,
  Button,
} from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/backdrop.png')} style={{width: '100%', height: '100%'}}>
        <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/uchicon2020logo.png')}
            style={styles.welcomeImage}
          />
          {/* <Text style={styles.dateText}>Saturday January 25</Text>
          <Text style={styles.dateText}>10am - 6pm</Text> */}
        </View>

        <View style={styles.socialMediaIcons}>
          <SocialIcon 
            type='facebook'
            onPress={handleFacebookPress}
          />
          <SocialIcon 
            type='instagram'
            onPress={handleInstagramPress}
          />
          <SocialIcon
            type='twitter'
            onPress={handleTwitterPress}
          />
        </View>

        <View style={styles.homeMenu}>
          <Button
            title="Rules"
            raised
            onPress={handleRulesPress}
            type="outline"
          />
          <Button
            title="Sponsors"
            raised
            onPress={handleSponsorsPress}
            type="outline"
          />
        </View>

        <View>
          <Image 
            source={require('../assets/images/ucjasBirb.png')}
            style={styles.homeBirbImg}
          />
        </View>
      </ScrollView>
      </ImageBackground>
      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleFacebookPress() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com/uchicagocon/'
  );
}

function handleInstagramPress() {
  WebBrowser.openBrowserAsync(
  'https://www.instagram.com/ucjas.official/'
  )
}

function handleTwitterPress() {
  WebBrowser.openBrowserAsync(
    'https://twitter.com/ucjas_official'
  )
}

function handleRulesPress() {
  WebBrowser.openBrowserAsync(
    'https://www.uchi-con.com/rules'
  )
}

function handleSponsorsPress() {
  WebBrowser.openBrowserAsync(
    'https://www.uchi-con.com/sponsors'
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 5,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  dateText: {
    fontSize: 20,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeMenu: {
    marginTop: 15,
    width: '70%',
    alignSelf: 'center'
  },
  homeBirbImg: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 5,
  },
});
