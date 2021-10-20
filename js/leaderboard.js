import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Animated, Component, Button, TextInput } from 'react-native';
import Firebase from "./firebase";

export function LeaderBoard() {
    Firebase.database().ref('users').orderByChild("time").limitToLast(5).once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            console.log(child.key + " " + child.val().time) // NOW THE CHILDREN PRINT IN ORDER
        });
      });
    return (
        /*Start writing here*/
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Leaderboard</Text>
        </View>
    );

}