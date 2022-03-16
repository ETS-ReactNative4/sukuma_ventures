/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
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
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/Card';
import SnackBar from './src/components/SnackBar';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Snackbar from 'react-native-snackbar';

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


const openSnackBar = (snackBar) => {
  // Snackbar.show({
  //   text: 'Hello world',
  //   duration: Snackbar.LENGTH_INDEFINITE,
  //   action: {
  //     text: 'UNDO',
  //     textColor: 'green',
  //     onPress: () => { /* Do something. */ },
  //   },
  // });
  console.log("hello", snackBar);
  snackBar.current.ShowSnackBarFunction("This is a snackbar to show to the user when they perform an action. Clicking it should change the text");


};


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const snackBar = useRef(null);


  /**
   * set background style to factor in dark mode
   */
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
        <View style={[styles.goalCard]}>
          <Text style={[styles.finishBtn]}>Finish Goal</Text>

          <View style={[styles.goalCardMore]}>
            <Text style={[styles.pl1, styles.textBlack]}>  <Icon name="chevron-right" size={16} color="#000" />  </Text>
          </View>
        </View>
      </View>)
  }


  /**
   * Render the ui element
   */
  return (
    <SafeAreaView style={[backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle, { height: Dimensions.get("screen").height, backgroundColor: '#4a5d80' }]}
      >
        {/* <Header /> */}
        <View style={[styles.header]}>
          <Text style={[styles.textWhite, styles.textSize6]}>Afternoon Jo</Text>
          <Text style={[styles.textWhite, styles.textSize2, styles.my1]}>Here is the latest</Text>
          <Text style={[styles.textSize4, styles.textGreen, styles.bold]}>KES 42,000</Text>
          <Text style={[styles.textWhite, styles.textSize3]}>Total funds</Text>
        </View>
        <View
          style={[styles.roundedTop, {
            display: "flex",
            flexDirection: "column",
            backgroundColor: Colors.white,
            minHeight: Dimensions.get("window").height * 0.75
          }]}>

          <View style={[{ flexGrow: 1 }]}>
            <Text style={[styles.textBlack, styles.bold, styles.p2]}>Your Goals</Text>

            <Card body={
              <GoalItem goal={{ title: 'Goal 1', amount: 'KES 12,000' }} />
            } />

            <Card body={
              <GoalItem goal={{ title: 'Goal 2', amount: 'KES 11,000' }} />
            } />

          </View>



          <View style={[styles.py3, styles.pb4]}>
            {/* <Button
              onPress={() => console.log("Hello")}
              title="Show Snackbar"
              color="#80e972"
              accessibilityLabel="Show snackbar"
            /> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => openSnackBar(snackBar)}
            >
              <Text style={[styles.textWhite, { textAlign: 'center' }]}>Show Snackbar</Text>
            </TouchableOpacity>


          </View>

        </View>
        <SnackBar ref={snackBar} />

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
    padding: 16,
  },
  p3: {
    padding: 24,
  },
  py3: {
    paddingHorizontal: 24,
  },
  py2: {
    paddingVertical: 16,
  },
  px1: {
    paddingHorizontal: 4
  },
  pl1: {
    paddingLeft: 4
  },
  pb4: {
    paddingBottom: 32,
  },
  my1: {
    marginVertical: 8,
  },
  m2: {
    marginHorizontal: 16,
  },
  m3: {
    marginBottom: 24,
  },
  bold: {
    fontWeight: 'bold'
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
  textBlack: {
    color: 'black'
  },
  textSize6: {
    fontSize: 36
  },
  textSize2: {
    fontSize: 12
  },
  textSize4: {
    fontSize: 24
  },
  textSize3: {
    fontSize: 18
  },
  textGreen: {
    color: '#80e972',
  },
  textWhite: {
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#80e972',
    padding: 16,
    borderRadius: 24
  },
  goalCard: { 
    height: '100%',
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: "center" 
  },
  goalCardMore: { 
    borderLeftColor: '#D5D5D5', 
    borderLeftWidth: 1, 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: "center" 
  },
  header: { 
    minHeight: Dimensions.get("window").height * 0.25, 
    display: "flex", 
    backgroundColor: '#4a5d80', 
    justifyContent: "center", 
    paddingHorizontal: 24 
  },
  finishBtn: { 
    color: 'black', 
    backgroundColor: '#80e972', 
    padding: 8, 
    borderRadius: 8, 
    marginHorizontal: 8 
  }
});

export default App;
