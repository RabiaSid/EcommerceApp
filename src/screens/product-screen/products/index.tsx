import React from 'react'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions, 
} from 'react-native';
import rncStyles from 'rncstyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default function Product() {
  return (
    <KeyboardAvoidingView>
        <View style={[rncStyles.bgWhite, rncStyles.h100, rncStyles.p1]}>
            <View style={[rncStyles.flexRow]}>

            </View>
          {/* <Icon name="home" size={30} color="black"></Icon> */}
          {/* <Text style={[rncStyles.textPrimary, rncStyles.fs3]}>Email</Text>
          <TextInput
            placeholder="Input"
            placeholderTextColor="black"
            style={[
              rncStyles.rounded,
              rncStyles.px1,
              rncStyles.border1,
              {borderColor: `#9caccb`},
            ]}
          />
          <TouchableOpacity style={[rncStyles.btn, rncStyles.my1]}>
            <Text>Click</Text>
          </TouchableOpacity> */}
        </View>
      </KeyboardAvoidingView>
  )
}
