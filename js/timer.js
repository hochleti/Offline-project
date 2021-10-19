import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Animated, Component, Button, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountDown from 'react-native-countdown-component';
import Firebase from "./firebase";


export function Timer() {

    function writeUserData(username, timeSpent) {
        if (username != "") {
            Firebase.database().ref('users/' + username).set({
                time: timeSpent
            });
            alert('Finished')
        }
    }
    const [date, setDate] = useState(new Date(0, 0));
    const [show, setShow] = useState(true);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [shouldShow, setShouldShow] = useState(false);
    const [user, setUser] = useState("");


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setHour(currentDate.getHours());
        setMinute(currentDate.getMinutes());
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 50,
            backgroundColor: '#89C7D6',
        },
        textInput: {
            fontSize: 14,
            padding: 10,
            borderWidth: 1,
            borderRadius: 5,
            color: "white",
            borderColor: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 10,
            width: 200,
        },
        title:{
            textAlign:"center",
            fontSize: 25,
            color: "white",
            fontFamily: "Charter",
            paddingBottom: 50,
        },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Start Your Mission</Text>
            <View style={{ flexDirection: "row", paddingBottom: 50 }}>
                <Text style={{ paddingTop: 10, fontSize: 16, marginLeft: "auto", color: "white" }}>Your Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name"
                    autoCapitalize="none"
                    keyboardType="default"
                    fontSize={16}
                    value={user}
                    color="white"
                    onChangeText={(text) => setUser(text)}
                />
            </View>
            <View>
                {shouldShow && (
                    <CountDown
                        size={30}
                        until={date.getHours() * 3600 + date.getMinutes() * 60}
                        onFinish={() => writeUserData(user, date.getMinutes() + date.getHours() * 60)}
                        digitStyle={{ backgroundColor: '#0290B2', borderWidth: 2, borderColor: 'white' }}
                        digitTxtStyle={{ color: 'white' }}
                        timeLabelStyle={{ color: 'white', fontWeight: 'bold', fontFamily: 'Charter' }}
                        separatorStyle={{ color: 'white' }}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{ h: 'Hours', m: 'Minutes', s: 'Seconds' }}
                        showSeparator
                    />
                )}
            </View>
            <View>
                {show && (
                    <DateTimePicker
                        textColor="white"
                        value={date}
                        mode={"countdown"}
                        is24Hour={true}
                        onChange={onChange}
                    />)}
            </View>
            <View style={{ marginTop: 20 }}>
                <Button color="white" title="Start/Stop" onPress={() => setShouldShow(!shouldShow) +
                    setShow(!show)} />
            </View>
        </View>
    );
}