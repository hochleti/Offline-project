
import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Linking} from 'react-native';
import exampleImage from '../assets/learning.png';

export function LearnMorePage() {

    // read an article
    function articleClick() {
        Linking.openURL('https://www.sciencedirect.com/science/article/abs/pii/S0747563215303162');
        //window.open("https://www.sciencedirect.com/science/article/abs/pii/S0747563215303162");
    }
    // google results
    function googleClick() {
        Linking.openURL('https://www.google.com/search?q=what+is+smartphone+addiction&oq=what+is+&aqs=chrome.0.69i59j69i57j0i512l2j0i131i433i512j0i433i512j0i512j69i60.2122j0j7&sourceid=chrome&ie=UTF-82');
        //window.open("https://www.google.com/search?q=what+is+smartphone+addiction&oq=what+is+&aqs=chrome.0.69i59j69i57j0i512l2j0i131i433i512j0i433i512j0i512j69i60.2122j0j7&sourceid=chrome&ie=UTF-82");
    }
    // speak to professional
    function professionalClick() {
        Linking.openURL('https://www.qld.gov.au/health/mental-health/help-lines/services#:~:text=Health%20professionals&text=Phone%20the%20mental%20health%20access,to%20public%20mental%20health%20services.');
        //window.open("https://www.qld.gov.au/health/mental-health/help-lines/services#:~:text=Health%20professionals&text=Phone%20the%20mental%20health%20access,to%20public%20mental%20health%20services.");
    }
    // call hotline
    function hotlineClick() {
        Linking.openURL('https://www.beyondblue.org.au/the-facts/suicide-prevention/get-support-now?gclid=EAIaIQobChMI4drkzuTT8wIVwyMrCh0aXArdEAAYASAAEgIa7PD_BwE');
        //window.open("https://www.beyondblue.org.au/the-facts/suicide-prevention/get-support-now?gclid=EAIaIQobChMI4drkzuTT8wIVwyMrCh0aXArdEAAYASAAEgIa7PD_BwE");
    }

    const styles = StyleSheet.create({
        general: {
            margin: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#89C7D6',
            flex: 1, 
        },
        button1: {
          paddingBottom:20,
          paddingTop:20,
          marginBottom:5,
          marginTop:5,
          borderRadius: 10,
          elevation: 3,
          width: 306,
          position: 'relative',
          backgroundColor: '#0290B2',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button2: {
            paddingBottom:20,
            paddingTop:20,
            marginBottom:5,
            marginTop:5,
            borderRadius: 10,
            elevation: 3,
            width: 340,
            backgroundColor: '#0290B2',
            alignItems: 'center',
            justifyContent: 'center',
        },
        
        text: {  
          fontSize: 16,
          lineHeight: 21,
          letterSpacing: 0.25,
          color: 'white',
          fontFamily: 'Charter',
        },
        headings: {
            paddingTop: 20,
            marginBottom: 5,
            position : 'relative', 
            fontSize: 16,
            lineHeight: 21,
            letterSpacing: 1,
            fontWeight: "bold",
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Charter',
        },
        offlineTitle: {
            color: 'white',
            fontSize: 20,
            paddingBottom: 60,
            letterSpacing: 1,
            fontWeight: "bold",
            position : 'relative', 
            top : 20,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Charter',
        },
        placeholder: {
            paddingTop: 20,
            paddingBottom: 40,
            position : 'relative', 
            fontSize: 16,
            lineHeight: 21,
            letterSpacing: 1,
            fontWeight: "bold",
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Charter',
        },
        image: {
            width: 50,
            height: 50,
        },
      });

    return (

    <View style={styles.general}>

        <Text style={styles.offlineTitle}>OFFLINE INC.</Text>

        <Image
          style={styles.image}
          source={exampleImage}
        />
        
        <Text style={styles.headings}>
            What is Smartphone Addiction?
        </Text>

        <Pressable style={styles.button1} onPress={articleClick}>
            <Text style={styles.text}>Read an article</Text>
        </Pressable>

        <Pressable style={styles.button1} onPress={googleClick}>
            <Text style={styles.text}>Top google results</Text>
        </Pressable>

        <Text style={styles.headings}>
            Facing bigger problems?
        </Text>

        <Pressable style={styles.button2} onPress={professionalClick}>
            <Text style={styles.text}>Speak to a professional</Text>
        </Pressable>

        <Pressable style={styles.button2} onPress={hotlineClick}>
            <Text style={styles.text}>Call a hotline</Text>
        </Pressable>
    </View>
    
);

}