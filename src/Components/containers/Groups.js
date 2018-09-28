
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



class Groups extends Component {


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
                <View style={styles.topBar}>
                    <CircularImage
                        size={40}
                        fill={100}
                        image={require('../../img/shot.png')}
                    />
                    <Image
                        style={{ width: 70, height: 80, marginTop: 10 }}
                        source={require('../../img/myeffectlogo.png')} />
                    <Icon
                        name="bell"
                        color={colors.primaryBlue}
                        size={30}
                        style={{ opacity: 1 }}
                    />
                </View>
                <Text>Hello From Groups</Text>

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
        marginTop: -80

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


export default Groups;