import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Input, Icon, InputProps} from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';

interface Props extends InputProps {
  text: string;
  icon: string;
  onChangePhoneText?: any;
  isPhoneNumber?: boolean;
  isSecureText?: boolean;
}

const Form = (props: Props) => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
      {props.isPhoneNumber ? (
        <View>
          <PhoneInput
            defaultCode="IN"
            layout="first"
            textContainerStyle={styles.phoneInput}
            textInputStyle={styles.inputText}
            containerStyle={{height: 75}}
            onChangeText={props.onChangePhoneText}
          />
          <View
            style={{
              borderBottomColor: '#8f92a1',
              borderBottomWidth: 1,
              marginLeft: 10,
              width: '95%',
            }}
          />
        </View>
      ) : (
        <Input
          {...props}
          leftIcon={
            <Icon
              name={props.icon}
              type="feather"
              size={22}
              color={'#171717'}
              tvParallaxProperties={undefined}
            />
          }
          inputStyle={styles.inputText}
          secureTextEntry={props.isSecureText}
          autoCompleteType={undefined}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15.62,
    letterSpacing: -0.17,
    color:'#8F92A1',
  },
  inputText: {
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.2,
    color:'#171717',
  },
  phoneInput: {
    backgroundColor: 'transparent',
  },
});

export default Form;
