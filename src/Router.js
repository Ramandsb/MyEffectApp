import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomePage from './Components/HomePage';
import MapScreen from './Components/MapScreen';
import ScreenThree from './Components/ScreenThree';

import colors from './styles/colors';


const RouterComponent = () => {
    return (
        <Router >
        
            <Scene key='root' tintColor={colors.primaryBlue}  >

                <Scene key='home' initial  component={HomePage} hideNavBar />
                <Scene key='map' tintColor={colors.primaryBlue} component={MapScreen} navTransparent />
                <Scene key='sthree'  tintColor={colors.primaryBlue} component={ScreenThree} navTransparent />
                
            </Scene>              
        </Router>
    );
};

// navigationBarStyle
// navTransparent makes transparent
// navigationBarStyle = {{ backgroundColor: '#fff' }}

export default RouterComponent;

