
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


import colors from '../../styles/colors/index';
import CircularImage from './CircularImage';
import Icon from 'react-native-vector-icons/';


class Topbar extends Component {


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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.white,
        flexDirection:'row'
    },
    logo: {
        width: 200,
        height: 50,

    },


});


export default Topbar;