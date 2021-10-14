import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Animated, Component } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountDown from 'react-native-countdown-component';

export default function App() {
  const [date, setDate] = useState(new Date(0, 0));
  const [show, setShow] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setHour(currentDate.getHours());
    setMinute(currentDate.getMinutes());
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View >
      {shouldShow ? (
      <CountDown
        size={30}
        until={date.getHours()*3600 + date.getMinutes()*60}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{h: 'Hours', m: 'Minutes', s: 'Seconds'}}
        showSeparator
      />
      ) : null}
      </View>
      <View>
      
      <DateTimePicker
        value={date}
        mode={"countdown"}
        is24Hour={true}
        onChange={onChange}
      />
      </View>
      <View>
        <Button title="Start/Stop" onPress={() => setShouldShow(!shouldShow)} />
      </View>
    </View>
  );
}


