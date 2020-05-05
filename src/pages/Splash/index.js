import React, { Component, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { imgKlinikFatihah } from '../../asset';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2000)
    })

    return (
        <View style={{ flex: 1, backgroundColor: 'darkcyan', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{backgroundColor:'lightblue', height:80, width:80, borderRadius:100, justifyContent:'center', alignItems:'center'}}>
                <Image style={{ height: 50, width: 50 }} source={imgKlinikFatihah} />
            </View>
            <Text style={{ color: 'white', fontSize: 30 }}>Hafidz_Quran</Text>
        </View>
    )

}

export default Splash