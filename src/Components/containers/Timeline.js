
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import { Actions } from 'react-native-router-flux';


import CircularImage from '../common/CircularImage';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors/index'


class Timeline extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            timePassed: false,

        };
    }

    componentWillMount() {



    }
    componentDidMount() {

    }



    render() {
        return (
            <View style={styles.container}>
                
                <Text>Hello From Timelines</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
       

    },
    logo: {
        width: 200,
        height: 50,

    },
    topBar: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        position: 'absolute',
        top: 0,
        marginTop: 20,
        flexDirection: 'row',
        padding: 15,
        zIndex: 25,

    },



});


export default Timeline;