
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
import { AnimatedCircularProgress } from 'react-native-circular-progress';




class CircularImage extends Component {


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
        const { size, fill, image} = this.props;
        const imageSize = size - 11;
        const imageBorderRadius = imageSize/2;

       
            
        return (
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={size}
                    width={3}
                    fill={fill}
                    tintColor="#00B8F1"
                    backgroundColor={colors.lightGrayLable}>
                    {
                        (fill) => (
                            <Image
                                style={{ width: imageSize, height: imageSize, borderRadius: imageBorderRadius}}
                                source={image} />
                        )
                    }
                </AnimatedCircularProgress>
{/* '../../img/shot.png' */}
            </View>
        );
    }
}

CircularImage.propTypes = {
    size: PropTypes.number,
    fill: PropTypes.number,
    image: PropTypes.string,
};

const styles = StyleSheet.create({
   
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },


});


export default CircularImage;