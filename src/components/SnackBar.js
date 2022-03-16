/**
 * Custom snackbar component
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class SnackBar extends Component {
    constructor() {
        super();

        this.animatedValue = new Animated.Value(50);
        this.opacityValue = new Animated.Value(0);
        this.translateXValue = new Animated.Value(Dimensions.get('screen').width);
        this.ShowSnackBar = false;
        this.HideSnackBar = true;
        this.state = {
            SnackBarInsideMsgHolder: ''
        };
    }

    ShowSnackBarFunction(SnackBarInsideMsgHolder = "This is a SnackBar...", duration = 3000) {
        if (this.ShowSnackBar === false) {
            this.setState({ SnackBarInsideMsgHolder: SnackBarInsideMsgHolder });

            this.ShowSnackBar = true;
            Animated.parallel([

                Animated.timing
                    (
                        this.translateXValue,
                        {
                            toValue: 0,
                            duration: 400,
                            useNativeDriver: false
                        }
                    ),

                Animated.timing
                    (
                        this.animatedValue,
                        {
                            toValue: 50,
                            duration: 600,
                            useNativeDriver: false
                        }
                    ),
                Animated.timing
                    (
                        this.opacityValue,
                        {
                            toValue: 1,
                            duration: 400,
                            useNativeDriver: false
                        }
                    )
            ]).start(this.hide(duration));
        }
    }

    hide = (duration) => {
        this.timerID = setTimeout(() => {
            if (this.HideSnackBar === true) {
                this.HideSnackBar = false;
                Animated.parallel([

                    Animated.timing
                        (
                            this.translateXValue,
                            {
                                toValue: Dimensions.get('screen').width,
                                duration: 400,
                                useNativeDriver: false
                            }
                        ),

                    Animated.timing
                        (
                            this.animatedValue,
                            {
                                toValue: 0,
                                duration: 400,
                                useNativeDriver: false
                            }
                        ),
                    Animated.timing
                        (
                            this.opacityValue,
                            {
                                toValue: 0,
                                duration: 400,
                                useNativeDriver: false
                            }
                        )
                ]).start(() => {
                    this.HideSnackBar = true;
                    this.ShowSnackBar = false;
                    clearTimeout(this.timerID);
                })
            }
        }, 10000);
    }

    handleUserClick = () => {
        console.log("Click")
        this.setState({ SnackBarInsideMsgHolder: "User clicked snackbar" });
    }

    SnackBarCloseFunction = () => {
        if (this.HideSnackBar === true) {
            this.HideSnackBar = false;
            clearTimeout(this.timerID);

            Animated.parallel([

                Animated.timing
                    (
                        this.translateXValue,
                        {
                            toValue: Dimensions.get('screen').width,
                            duration: 400,
                            useNativeDriver: false
                        }
                    ),

                Animated.timing
                    (
                        this.animatedValue,
                        {
                            toValue: 0,
                            duration: 400,
                            useNativeDriver: false
                        }
                    ),
                Animated.timing
                    (
                        this.opacityValue,
                        {
                            toValue: 0,
                            duration: 400,
                            useNativeDriver: false
                        }
                    )
            ]).start(() => {
                this.ShowSnackBar = false;
                this.HideSnackBar = true;
            });
        }
    }

    render() {
        return (

            <Animated.View useNativeDriver={true} style={[{ transform: [{ translateY: this.animatedValue }, { translateX: this.translateXValue }] }, { opacity: this.opacityValue }, styles.SnackBarContainter]}>

                <View style={[{
                    marginHorizontal: 8, backgroundColor: '#e91780', width: '100%', padding: 16, borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>

                    <Text style={styles.SnackBarMessage} onPress={this.handleUserClick}>{this.state.SnackBarInsideMsgHolder}</Text>
                    <Text style={styles.SnackBarUndoText} onPress={this.SnackBarCloseFunction} > <Icon name="close" size={30} color="#fff" /> </Text>
                    

                </View>

            </Animated.View>

        );
    }
}

export default SnackBar;


const styles = StyleSheet.create({

    SnackBarContainter:
    {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        top: 0,
        right: 0,
        minHeight: 50,
        paddingHorizontal: 16
    },

    SnackBarMessage:
    {
        color: '#fff',
        fontSize: 18,
        flexGrow: 1,
        width: 50
    },

    SnackBarUndoText: {
        color: '#FFEB3B',
        fontSize: 18,
        padding: 5
    }
});