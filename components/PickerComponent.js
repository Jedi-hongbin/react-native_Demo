import React from 'react';
import { View, Picker } from 'react-native';
// import Picker from '@react-native-community/picker'

export default function PickerComponent (props) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
      <Picker
        mode='dropdown'
        style={{ width: 110 }}
        selectedValue={props.value}
        onValueChange={value => props.selectValue(value)}>
        {props.data.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}
