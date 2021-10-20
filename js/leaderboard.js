import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Animated, Component, Button, TextInput } from 'react-native';
import Firebase from "./firebase";

export function LeaderBoard() {
    
    var myList = new Array();
    function getList() {
        return myList;
    }
    Firebase.database().ref('users').orderByChild("time").limitToLast(5).once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            
            const test = child.key;
            const test2 = child.val().time;
            //console.log(test + " " + test2) // NOW THE CHILDREN PRINT IN ORDER
            const data = [child.key, child.val().time];
            console.log(data)
            myList.push(data);
        });
        const testList = getList();
        console.log("new list " + getList());
      });
    console.log("NEW LIST " + getList);
    return (
        /*Start writing here*/
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Leaderboard</Text>
        </View>
    );

}