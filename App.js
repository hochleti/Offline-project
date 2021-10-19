import * as React from 'react';
import { StyleSheet, Text, View, Animated, Component, Button, TextInput } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { LearnMorePage } from './js/learn_more_page';
import { Timer } from './js/timer';
import { LeaderBoard } from './js/leaderboard';

function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Homepage</Text>
    </View>
  );
}

function App() {
  const styles = StyleSheet.create({
    text:{
      color: 'white',
      fontFamily: "Charter",
      fontSize: 16
    },
  });
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/learn-more" component={LearnMorePage} />
      <Route path="/timer" component={Timer} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <View style={{
         padding: 20, flexDirection: "row",
        justifyContent: "space-around", backgroundColor: '#0290B2'
      }}>
        {/** replace with Nav */}
        <Link to="/">
          <Text style={styles.text}>Home</Text>
        </Link>
        <Link to="/learn-more">
          <Text style={styles.text}>Learn More</Text>
        </Link>
        <Link to="/timer">
          <Text style={styles.text}>Mission</Text>
        </Link>
        <Link to="/leaderboard">
          <Text style={styles.text}>Leaderboard</Text>
        </Link>
      </View>
    </NativeRouter>
  );
}

export default App;

