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
    const [show, setShow] = useState(false);
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


    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text>Name</Text>
            <TextInput
                inputStyle={{
                    fontSize: 14,
                }}
                padding={10}
                borderWidth={1}
                borderRadius={5}
                borderColor="grey"
                marginLeft="auto"
                marginRight="auto"
                marginBottom={10}
                width={300}
                placeholder="Enter your name"
                autoCapitalize="none"
                keyboardType="default"
                value={user}
                borderColor="grey"
                onChangeText={(text) => setUser(text)}
            />

            <View >
                {shouldShow ? (
                    <CountDown
                        size={30}
                        until={date.getHours() * 3600 + date.getMinutes() * 60}
                        onFinish={() => writeUserData(user, date.getMinutes() + date.getHours() * 60)}
                        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625' }}
                        digitTxtStyle={{ color: '#1CC625' }}
                        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                        separatorStyle={{ color: '#1CC625' }}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{ h: 'Hours', m: 'Minutes', s: 'Seconds' }}
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