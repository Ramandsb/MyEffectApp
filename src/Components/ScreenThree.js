
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

import TabNavigator from 'react-native-tab-navigator';
import Timeline from './containers/Timeline';
import Updates from './containers/Updates';
import Memories from './containers/Memories';

import CircularImage from './common/CircularImage';

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors/index';
import BuyNowButton from './common/BuyNowButton'
import { Actions } from "react-native-router-flux";

class ScreenThreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            timePassed: false,
            selectedTab: 'memories',

        };
    }

    componentWillMount() {



    }
    componentDidMount() {

    }
    renderItem(rowData) {
        const { width: SCREEN_WIDTH } = Dimensions.get('screen')
        let percentage = (rowData.users / 50) * 100;
        {
            return (
                <TouchableWithoutFeedback>
                        <View style={{alignItems:'center',width:80}}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius:25 }}
                                source={{uri: rowData.image}} />
                        <View style={styles.coins}>
                            <Text style={{ fontSize: 15, color: 'green', fontWeight: '500' }}>{rowData.coins}</Text>
                        </View>
                            <Text style={{textAlign:'center',fontSize:10}}>{rowData.name}</Text>
                        </View>
                </TouchableWithoutFeedback>
            );
        }
    }


    render() {
        var customData = require('../data/data.json');
        return (
            <View style={styles.container}>
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

                <View style={{backgroundColor:colors.white,width:'100%',height:100,marginTop:70,flexDirection:'row',alignItems:'center',paddingLeft:15,justifyContent:'space-around'}}>

                    <CircularImage
                        size={80}
                        fill={80}
                        image={require('../img/download.jpg')}

                    />
                    
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <Image
                            style={{ width: 40, height: 20 }}
                            source={require('../img/vol.png')} />
                        <Text style={{ color: colors.primaryBlue,fontSize:9 }} >Volunteering</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            style={{ width: 24, height: 20 }}
                            source={require('../img/yellowcity.png')} />
                        <Text style={{ color: colors.yellow, fontSize: 9 }}>Sustainable cities</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon
                            name="users"
                            color={colors.primaryBlue}
                            size={20}
                            style={{ opacity: 1 }}
                        />
                        <Text style={{ color: colors.primaryBlue, fontSize: 9 }} >110K</Text>
                    </View>
                    <Icon
                        name="ellipsis-v"
                        color={colors.darkBlue}
                        size={20}
                        style={{ opacity: 1 }}
                    />

                </View>
                <View style={{
                    backgroundColor: colors.white, width: '100%', paddingLeft: 25, paddingBottom:10, borderBottomWidth: 1,
                    borderBottomColor: colors.lightGrayLable}}>

                <Text style={{ color: colors.darkBlue, fontSize: 13,fontWeight:'500' }}>Let youth be youth challenge</Text>
                <Text style={{ color: colors.textGray, fontSize: 11, fontWeight: '500' }}>Chance the Rapper</Text>
                <Text style={{ color: colors.textGray, fontSize: 11, fontWeight: '500',marginTop:10 }}>"Coordinate and inner city arts project with you friends that builds a safe, creative space." -Chance the Rapper</Text>

                </View>
                <View style={{
                    backgroundColor: colors.white, width: '100%', paddingLeft: 25, borderBottomWidth: 1,
                    borderBottomColor: colors.lightGrayLable, paddingTop: 10, shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 1,
                }}>
                <View style={{justifyContent: 'space-between',flexDirection:'row'}}>
                <TouchableOpacity>
                <Text style={{ color: colors.darkBlue, fontSize: 13, fontWeight: '700' }}>Challenge Actions</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{ color: colors.darkBlue, fontSize: 13, fontWeight: '700',marginRight:20 }}>See more</Text>
                </TouchableOpacity>
                </View>
                    <FlatList
                        horizontal
                        data={customData}
                        renderItem={({ item: rowData }) => this.renderItem(rowData)}
                        keyExtractor={(item, index) => index}
                        style={{ borderBottomWidth: 0.3, borderBottomColor: colors.lightGray, marginTop: 10,marginBottom:10 }}
                        showsHorizontalScrollIndicator={false}/>
                </View>
                
                <View style={{width:'100%',height:500,backgroundColor:colors.black,marginTop:10}}>
                    <TabNavigator
                        tabBarStyle={{ height: 30, overflow: 'hidden', backgroundColor: 'white', position: 'absolute', top: 0 }}
                        sceneStyle={{ paddingBottom: 30 }}>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'actions'}
                            title="Timeline"
                            titleStyle={{
                                color: colors.darkBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                elevation: 2,
                            }}
                            selectedTitleStyle={{
                                color: colors.primaryBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                elevation: 2,
                            }}
                            tabStyle={{
                                backgroundColor: colors.white, alignItems: 'center',
                                justifyContent: 'center', borderBottomWidth: 0, borderBottomColor: colors.primaryBlue, marginLeft: 30, marginRight: 20,
                            }}
                            onPress={() => this.setState({ selectedTab: 'actions' })}>
                            <Timeline />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'Updates'}
                            title="Updates"
                            titleStyle={{
                                color: colors.darkBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                elevation: 2,
                            }}
                            selectedTitleStyle={{
                                color: colors.primaryBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                elevation: 2,
                            }}
                            tabStyle={{
                                backgroundColor: colors.white, alignItems: 'center',
                                justifyContent: 'center', borderBottomWidth: 0, borderBottomColor: colors.primaryBlue, marginRight: 30
                            }}

                            onPress={() => this.setState({ selectedTab: 'Updates' })}>
                            <Updates />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'memories'}
                            title="Memories"
                            titleStyle={{
                                color: colors.darkBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                elevation: 2,
                            }}
                            selectedTitleStyle={{
                                color: colors.primaryBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                elevation: 2,
                            }}
                            tabStyle={{
                                backgroundColor: colors.white, alignItems: 'center',
                                justifyContent: 'center', borderBottomWidth: 3, borderBottomColor: colors.primaryBlue, marginRight: 30
                            }}

                            onPress={() => this.setState({ selectedTab: 'memories' })}>
                            <Memories />
                        </TabNavigator.Item>
                        </TabNavigator>
                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:colors.white
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
        marginTop: 7,
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 8,
        borderBottomColor: colors.lightGrayLable,
    },
    coins: {
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        position: 'absolute',
        bottom: 30,
        right: 0,
        margin: 10,
        zIndex: 25
    },


});


export default ScreenThreen;