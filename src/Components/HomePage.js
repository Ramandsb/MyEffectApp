/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ActionsTab from './containers/ActionsTab';
import Challenges from './containers/Challenges';
import Groups from './containers/Groups';
import colors from '../styles/colors';





export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'actions',
            actionWidth:3,
            chalWidth:0,
            groupWidth:0

        };
    }



    render() {

        let actionWidth = 3;
        let chalWidth = 0;
        let groupWidth = 0;

        if (this.state.selectedTab === 'actions'){
            actionWidth = 3;
        }else{
            actionWidth = 0;
        }
        if (this.state.selectedTab === 'challenges') {
            chalWidth = 3;
        } else {
            chalWidth = 0;
        }
        if (this.state.selectedTab === 'groups') {
            groupWidth = 3;
        } else {
            groupWidth = 0;
        }
        return (

           
           
            
            <TabNavigator style={styles.container}
                tabBarStyle={{ height: 30, overflow: 'hidden', backgroundColor: 'white', position: 'absolute', top: 0 }}
                sceneStyle={{ paddingBottom: 30,position:'absolute',bottom:0 }}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'actions'}
                    title="Actions"
                    titleStyle={{
                        color: colors.darkBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        elevation: 2, }}
                    selectedTitleStyle={{
                        color: colors.primaryBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        elevation: 2, }}
                    tabStyle={{
                        backgroundColor: colors.white, alignItems: 'center',
                        justifyContent: 'center',borderBottomWidth:3,borderBottomColor:colors.primaryBlue,marginLeft:30,marginRight:20, }}
                    onPress={() => this.setState({ selectedTab: 'actions' })}>
                    <ActionsTab />
                </TabNavigator.Item>
                
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'groups'}
                    title="Groups"
                    titleStyle={{
                        color: colors.darkBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        elevation: 2, }}
                    selectedTitleStyle={{
                        color: colors.primaryBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        elevation: 2,}}
                    tabStyle={{
                        backgroundColor: colors.white, alignItems: 'center',
                        justifyContent: 'center', borderBottomWidth: 0, borderBottomColor: colors.primaryBlue, marginRight: 30
                    }}

                    onPress={() => this.setState({ selectedTab: 'groups' })}>
                    <Groups />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'challenges'}
                    title="Challenges"
                    titleStyle={{
                        color: colors.darkBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        elevation: 2,}}
                    selectedTitleStyle={{
                        color: colors.primaryBlue, fontSize: 16, fontWeight: '500', shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        elevation: 2, }}
                    tabStyle={{
                        backgroundColor: colors.white, alignItems: 'center',
                        justifyContent: 'center', borderBottomWidth: 0, borderBottomColor: colors.primaryBlue, marginRight: 20
                    }}

                    onPress={() => this.setState({ selectedTab: 'challenges' })}>
                    <Challenges />
                </TabNavigator.Item>

                    
            </TabNavigator>
          
            
        );
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.white,
        zIndex:25,
        marginTop:70
    },
    logo: {
        width: 200,
        height: 50,

    },


});
