import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {authorize} from 'react-native-app-auth';

// base config
const config = {
  issuer: '<YOUR_ISSUER_URL>',
  clientId: '<YOUR_CLIENT_ID>',
  redirectUrl: '<YOUR_REDIRECT_URL>',
  scopes: ['<YOUR_SCOPE_ARRAY>'],
};

// use the client to make the auth request and receive the authState
try {
  const result = await authorize(config);
  // result includes accessToken, accessTokenExpirationDate and refreshToken
} catch (error) {
  console.log(error);
}

const Auth = () => {
  return (
    <View>
      <Pressable>
        <Text></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Auth;
