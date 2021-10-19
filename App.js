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
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/learn-more" component={LearnMorePage} />
      <Route path="/timer" component={Timer} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <View style={{
        borderWidth: 2, padding: 15, flexDirection: "row",
        justifyContent: "space-around", borderTopColor: "lightblue"
      }}>
        {/** replace with Nav */}
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/learn-more">
          <Text>Learn More</Text>
        </Link>
        <Link to="/timer">
          <Text>Timer</Text>
        </Link>
        <Link to="/leaderboard">
          <Text>Leaderboard</Text>
        </Link>
      </View>
    </NativeRouter>
  );
}

export default App;

