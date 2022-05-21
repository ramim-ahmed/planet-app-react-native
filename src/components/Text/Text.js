import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { presets } from './Text.preset';

const Text = ({children, preset='default', style}) => {
    const textStyles = StyleSheet.compose(presets[preset], style)
  return (
   <RNText  style={textStyles} >{children}</RNText>
  );
}

export default Text;