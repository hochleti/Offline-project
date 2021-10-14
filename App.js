import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Animated, Component, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountDown from 'react-native-countdown-component';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, postsRef } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBHsQgEqfF04HPbUQU0C8jQ5mYcFZ7NODk",
  authDomain: "offline-ea045.firebaseapp.com",
  databaseURL: "https://offline-ea045-default-rtdb.firebaseio.com",
  projectId: "offline-ea045",
  storageBucket: "offline-ea045.appspot.com",
  messagingSenderId: "383467579431",
  appId: "1:383467579431:web:ab37fc8dd6776d5d374602",
  measurementId: "G-7YXYN7DE4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

function writeUserData(username, timeSpent) {
  set(ref(database, 'users/' + username), {
    time: timeSpent
  });
  alert('Finished')
}

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
        onFinish={() => writeUserData("test",1)}
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


