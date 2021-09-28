import * as React from 'react';
import { Image } from 'react-native';

export default function Logo() {
  return <Image style={{ width: 28, height: 26, resizeMode: 'contain' }} source={require('../../assets/logo.png')} />;
}
