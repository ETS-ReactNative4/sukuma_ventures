/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/Card';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const openSnackBar = () => {
  console.log("Hello")
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    color: isDarkMode ? Colors.white : Colors.black
  };

  /**
   * A simplified for each goal item
   * @param {goal} props 
   * @returns 
   */
  const GoalItem = (props) => {

    return (
      <View style={{ overflow: 'scroll', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.flexGrow, styles.py2]}>
          <Text style={styles.textBlack}>{props.goal.title}</Text>
          <Text style={{ color: 'gray' }}>{props.goal.amount}</Text>
        </View>
        <View style={[{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }]}>
          <Text style={{ color: 'black', backgroundColor: '#80e972', padding: 8, borderRadius: 8, marginHorizontal: 8 }}>Finish Goal</Text>

          <View style={[{ borderLeftColor: 'gray', borderLeftWidth: 1, height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "center" }]}>
            <Text style={[styles.pl1,styles.textBlack]}> {`>`} </Text>
          </View>
        </View>
      </View>)
  }


  return (
    <SafeAreaView style={[backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, { height: Dimensions.get("screen").height, backgroundColor: '#4a5d80' }]}
      >
        {/* <Header /> */}
        <View style={[{ minHeight: Dimensions.get("window").height * 0.25, display: "flex", backgroundColor: '#4a5d80', justifyContent: "center", paddingHorizontal: 24 }]}>
          <Text style={[styles.textSize6]}>Afternoon Jo</Text>
          <Text style={[styles.textSize2]}>Here is the latest</Text>
          <Text style={[styles.textSize4, styles.textGreen]}>KES 42,000</Text>
          <Text style={[styles.textSize3]}>Total funds</Text>
        </View>
        <View
          style={[styles.roundedTop, {
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.white,
            minHeight: Dimensions.get("window").height * 0.75
          }]}>

          <View style={[{ flexGrow: 1 }]}>
            <Card body={
              <GoalItem goal={{title: 'Goal 1', amount: 'KES 12,000'}}/>
            } />

            <Card body={
              <GoalItem goal={{title: 'Goal 2', amount: 'KES 11,000'}}/>
            } />

          </View>

     

          <View style={[styles.p2, styles.pb4]}>
            {/* <Button
              onPress={() => console.log("Hello")}
              title="Show Snackbar"
              color="#80e972"
              accessibilityLabel="Show snackbar"
            /> */}
                 <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Hello")}
        >
          <Text style={styles.textBlack}>Press Here</Text>
        </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  p2: {
    paddingHorizontal: 16,
  },
  py2: {
    paddingVertical: 16,
  },
  px1:{
    paddingHorizontal: 4
  },
  pl1:{
    paddingLeft: 4
  },
  pb4: {
    paddingBottom: 32,
  },
  m2: {
    marginHorizontal: 16,
  },
  m3: {
    marginBottom: 24,
  },
  roundedTop: {
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  flexGrow: {
    flexGrow: 1
  },
  textBlack:{
    color:'black'
  },
  textSize6:{
    fontSize: 36
  },
  textSize2:{
    fontSize: 12
  },
  textSize4:{    
    fontSize: 24
  },
  textSize3:{
    fontSize: 18
  },
  textGreen:{
    color: '#80e972',
  },
  button:{
    width: '100%',
    backgroundColor: '#80e972',
    padding: 16,
    borderRadius: 24
  }
});

export default App;
