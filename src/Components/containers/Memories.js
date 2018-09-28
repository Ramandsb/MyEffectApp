
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


class Memories extends Component {


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
                <View style={[styles.row,{marginTop:50}]}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../img/office.png')} />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../img/extralarge.jpg')} />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../img/people.png')} />
                </View>

                <View style={styles.row}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../img/ct-chance-the-rapper-chicago-schools-plan-met-20170306.jpg')} />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../img/cover_robeson.png')} />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../img/download.jpg')} />
                </View>
                
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
       

    },
    row: {
        width: '100%',
        height: 80,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft:20,
        paddingRight: 20
        
    },
    imageStyle:{
        width:90,
        height:90,
        borderRadius:10,
       
    }
    


});


export default Memories;