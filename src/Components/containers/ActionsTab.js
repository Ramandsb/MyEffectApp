
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

import CircularImage from '../common/CircularImage';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors/index'

class ActionsTab extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            timePassed: false,
            data:[],
           
        };
    }

    componentWillMount() {



    }
    componentDidMount() {

    }
    renderItem(rowData) {
        const { width: SCREEN_WIDTH } = Dimensions.get('screen')
        let percentage = (rowData.users/50)*100;
       
        
        

        {
            return (
                <TouchableWithoutFeedback
                onPress={() => Actions.map({ rowData: rowData })}
                >
                    <View style={[styles.rowContainer, { width: SCREEN_WIDTH }]}>
                        <View style={{width:70,height:100,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>

                            <CircularImage
                                size={60}
                                fill={percentage}
                                image={{uri: rowData.image}}
                        />
                        
                            <View style={{ opacity: 1, position: 'absolute', right: 0, bottom: 0,justifyContent:'center',alignItems:'center',marginBottom:5  }}>

                            <Icon
                                name="users"
                                color={colors.primaryBlue}
                                size={13}
                                style={{ opacity: 1}}
                                />
                                <Text style={{fontSize:8,color:colors.primaryBlue}}>{rowData.users}/50</Text>
                                </View>
                        </View>
                        
                        
                        <View style={styles.main}>
                            <Text style={styles.nameStyle}>{rowData.name}</Text>
                            <Text style={styles.dateStyle}>{rowData.date}</Text>

                        </View>



                        <View style={styles.coins}>
                            <Text style={{fontSize:15,color:'green',fontWeight:'500'}}>{rowData.coins}</Text>
                        </View>



                        <View style={styles.smallIcons}>
                            <Image
                                style={{ width: 15, height: 15,margin:10 }}
                                source={require('../../img/greenicon.png')} />
                            <Image
                                style={{ width: 15, height: 15,margin:10  }}
                                source={require('../../img/greeneye.png')} />
                            <Image
                                style={{ width: 15, height: 15, margin: 10 }}
                                source={require('../../img/greentree.png')} />
                        </View>
                        
                        
                    </View>
                </TouchableWithoutFeedback>
            );
        }
    }


    render() {
        var customData = require('../../data/data.json');
        // this.setState({data: customData});
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
                <FlatList
                    data={customData}
                    renderItem={({ item: rowData }) => this.renderItem(rowData)}
                    keyExtractor={(item, index) => index}
                    style={{ borderBottomWidth: 0.3, borderBottomColor: colors.lightGray, paddingBottom: 5,marginTop:130 }}
                />

                <TouchableOpacity style={styles.roundButton}>

                    <Icon
                        name="compass"
                        color={colors.white}
                        size={25}
                        style={{ opacity: 1 }}
                    />
                </TouchableOpacity>

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
        marginTop:-80
        
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
    rowContainer: {
        alignSelf: 'stretch',
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomWidth:1,
        borderBottomColor:colors.lightGrayLable
       
    },
    smallIcons:{
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        bottom:0,
        right:0,
        zIndex:25,
        flexDirection:'row'
    },
    coins:{
        width: 20,
        height: 20,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        position: 'absolute',
        top: 0,
        right: 0,
        margin:10,
        zIndex:25
    },
    main: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 10,
        width: '60%'
    },
    nameStyle:{
        fontSize:14,
        fontWeight:'500',
        color:colors.darkBlue

    },
    dateStyle:{
        fontSize: 12,
        fontWeight: '700',
        color: '#A9A9A9',
        marginTop:10
    },
    roundButton:{
        width:58,
        height:58,
        borderRadius:29,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex:25,
        backgroundColor:colors.primaryBlue,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    marginRight:20
    }

});


export default ActionsTab;