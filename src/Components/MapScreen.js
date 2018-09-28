import React, { Component } from "react";
import { AppRegistry, StyleSheet, Image,Dimensions, View, Container, Text,TouchableOpacity} from "react-native";

// import MapView from 'react-native-maps';

import CircularImage from './common/CircularImage';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors/index';
import BuyNowButton from './common/BuyNowButton'
import { Actions } from "react-native-router-flux";
import * as Animatable from 'react-native-animatable';

class MapScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("wokeeey");
                console.log(position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }


    render() {
        let rowData = this.props.rowData;
        return (
            <View style={styles.container}>

            
                {/* <Text> {this.state.latitude} </Text>
                <Text> {this.state.longitude} </Text>
                <Text> {this.state.error} </Text> */}
                {/* <MapView style={styles.map} initialRegion={{
                    latitude: -6.270565,
                    longitude: 106.759550,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }}>

                    {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                        coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
                        title={"Your Location"}
                    />}

                </MapView> */}

                
                    <View style={styles.topBar}>
                    <View style={{ opacity: 0 }}>
                        <CircularImage
                            size={40}
                            fill={100}
                        image={require('../img/shot.png')}
                       
                        />
                        </View>
                        <Image
                            style={{ width: 70, height: 80, marginTop: 10 }}
                            source={require('../img/myeffectlogo.png')} />
                        <Icon
                            name="bell"
                            color={colors.primaryBlue}
                            size={30}
                            style={{ opacity: 1 }}
                        />
                    </View>
               
                <Animatable.View animation="zoomIn"  style={{
                    width: '90%', height: '60%', justifyContent: 'center',
                    alignItems: 'center'}}>
                    
                    <View style={styles.card}>
                        <View style={{ opacity: 1, position: 'absolute', left: "22%", top: '7%', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>

                            <Icon
                                name="users"
                                color={colors.primaryBlue}
                                size={16}
                                style={{ opacity: 1 }}
                            />
                            <Text style={{ fontSize: 13, color: colors.primaryBlue }}>{rowData.users}/50</Text>
                        </View>
                        <View style={styles.coins}>
                            <Text style={{ fontSize: 15, color: 'green', fontWeight: '500' }}>{rowData.coins}</Text>
                        </View>
                        <View style={styles.main}>
                        <Text style={styles.nameStyle}>{rowData.name}</Text>
                       </View>
                        <View style={styles.smallIcons}>
                            <Image
                                style={{ width: 18, height: 18, margin: 10 }}
                                source={require('../img/greenicon.png')} />
                            <Image
                                style={{ width: 20, height: 18, margin: 10 }}
                                source={require('../img/greeneye.png')} />
                            <Image
                                style={{ width: 18, height: 18, margin: 10 }}
                                source={require('../img/greentree.png')} />
                        </View>
                        <View style={{position: 'absolute',top:'40%',flexDirection:'row',alignSelf:'center',width:'40%'}}>
                            <Icon
                                name="calendar"
                                color={colors.darkBlue}
                                size={16}
                                style={{ opacity: 1 ,marginRight:10}}
                            />
                            <Text style={styles.nameStyle}>{rowData.date}</Text>
                           
                        </View>
                        <View style={styles.description}>
                            <Text style={{ alignContent: 'center', textAlign: 'center', fontSize: 14 }}>{rowData.description}
                            </Text>
                        </View>
                        <View style={[styles.description,{top:'65%',marginTop:10}]}>
                            <Text style={{ alignContent: 'center', textAlign: 'center', fontSize: 14, color: colors.darkGray }}>{rowData.address}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection:'row',
                        position:'absolute',
                        bottom:0,
                        width:'100%',
                        backgroundColor:'white',
                        height:60}}>
                        

                    {/* <View style={{position:'absolute',left:0,bottom:0,marginLeft:20}}> */}
                        <TouchableOpacity>
                        <Icon
                            name="bookmark"
                            color={colors.darkBlue}
                            size={16}
                            style={{ opacity: 1, marginRight: 10 }}
                        />
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.roundButtonT} onPress={() => Actions.sthree()}>
                            <Text style={{ color: colors.darkBlue }}>Take Action</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon
                            name="share-alt"
                            color={colors.darkBlue}
                            size={16}
                            style={{ opacity: 1, marginRight: 10 }}
                        />
                            </TouchableOpacity>
                    
                    </View>

                    

                    <View style={{ position: 'absolute', top: 0 }}>
                        <CircularImage
                            size={100}
                            fill={20}
                            image={{ uri: rowData.image }}
                        />
                    </View>

                
                   
               
                </Animatable.View >
                

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    card:{
        width:'100%',
        height:'100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:90
        
    },
    coins: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        position: 'absolute',
        top: "7%",
        right: '22%',
        zIndex: 25
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '60%',
        position: 'absolute',
        top: '20%',
        alignSelf: 'center',
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.darkBlue,
        alignSelf: 'center',
        textAlign:'center'
        
        
        

    },
    dateStyle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#A9A9A9',
        marginTop: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    roundButton: {
        width: 58,
        height: 58,
        borderRadius: 29,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 25,
        backgroundColor: colors.primaryBlue,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        marginRight: 20
    },
    smallIcons: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf:'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '30%',
       
    }, 
    description:{
        alignSelf:'center',
        width:'90%',
        position: 'absolute',
        top: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundButtonT:{
        width:150,
        height:40,
        borderRadius:20,
        backgroundColor:colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    topBar: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        position: 'absolute',
        top: 0,
        marginTop: 7,
        flexDirection: 'row',
        padding: 15,
        zIndex: 25,

    },
});


export default MapScreen;