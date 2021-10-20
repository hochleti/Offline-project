import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Animated, Component, Button, TextInput, FlatList, } from 'react-native';
import Firebase from "./firebase";

export function LeaderBoard() {
    const [items, setItems] = useState([]);

    Firebase.database().ref('users').orderByChild("time").limitToLast(5).once('value').then(function (snapshot) {
        snapshot.forEach(function (child) {
            if (items.length < 6) {

                setItems([...items, {
                    name: child.key,
                    time: child.val().time
                }])
            }
        });
    });

    const styles = StyleSheet.create({
        text: {
            fontFamily: "Charter",
            fontSize: 20,
            color: "white",
            textAlign: "center",
            paddingRight: 100,
            paddingBottom: 15,
        },
        title: {
            paddingTop: 15,
            textAlign: "center",
            fontSize: 25,
            color: "white",
            fontFamily: "Charter",
            paddingBottom: 30,
        },
        subtitle:{
            fontFamily: "Charter",
            fontSize: 20,
            color: "white",
            textAlign: "center",
            paddingBottom: 15,
        },
    });
    return (
        <View style={{ flex: 1, paddingTop: 100, backgroundColor: '#89C7D6' }}>
            <Text style={styles.title}>Leaderboard</Text>
            <View flexDirection="col">
                <Text style={styles.subtitle}>Team   Time Completed (Minutes)</Text>
                {items.map(item => (
                    <View flexDirection="row" style={{ marginLeft: "auto",  marginRight: "auto" }}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.time}</Text>
                    </View>
                ))}
            </View>
        </View>
    );

};