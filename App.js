import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Animated, Component } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function App() {
  const [date, setDate] = useState(new Date(0, 0));
  const [show, setShow] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setHour(currentDate.getHours());
    setMinute(currentDate.getMinutes());
  };
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };
  const renderTime = (dimension, time) => {
    return (
      <View>
        <Animated.Text>{time}</Animated.Text>
        <Animated.Text>{dimension}</Animated.Text>
      </View>
    );

  };
   const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
   const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const startTime = date.getTime() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;



  return (

    <View style={{ flex: 1, justifyContent: "center" }}>
      <DateTimePicker
        value={date}
        mode={"countdown"}
        is24Hour={true}
        onChange={onChange}
      />
      <View>
        <Button title="Start/Stop" />
      </View>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime  ))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </View>
  );
}


