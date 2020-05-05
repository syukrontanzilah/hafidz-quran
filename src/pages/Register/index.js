import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, StyleSheet, ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper'


export default class Register extends Component {
    state = {
        checked: 'first'
    }

    render() {
        const { checked } = this.state
        return (
            <View
                style={styles.Container}>

                <ScrollView style={{ flex: 1 }}>

                    <Text style={styles.teksInfo}>Personal Info</Text>



                    {/* NAMA LENGKAP */}
                    <Text style={styles.textData}>Nama Lengkap*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <View style={{ marginVertical: 10 }} />

                    {/* JENIS KELAMIN */}
                    <Text style={styles.textData}>Jenis Kelamin*</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <RadioButton
                            value='first'
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'first' }); }} />
                        <Text style={{ color: '#474747', marginRight: 40 }}>Pria</Text>

                        <RadioButton
                            value='second'
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'second' }); }} />
                        <Text style={{ color: '#474747', marginRight: 40 }}>Wanita</Text>
                    </View>


                    {/* TEMPAT LAHIR */}
                    <Text style={styles.textData}>Tempat Lahir*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <View style={{ marginVertical: 10 }} />

                    {/* TANGGAL LAHIR */}
                    <Text style={styles.textData}>Tanggal Lahir*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <View style={{ marginVertical: 10 }} />

                    {/* NOMOR PONSEL */}
                    <Text style={styles.textData}>Nomor Ponsel*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'ex: 085xxx'}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <Text style={{ color: 'blue', opacity: 0.6, fontStyle: 'italic', paddingHorizontal: 15, fontSize: 13 }}>Nomor Ponsel ini akan anda gunakan untuk Login aplikasi</Text>
                    <View style={{ marginVertical: 10 }} />

                    {/* ALAMAT EMAIL */}
                    <Text style={styles.textData}>Alamat Email*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <View style={{ marginVertical: 10 }} />

                    {/* PASSWORD */}
                    <Text style={styles.textData}>Password*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'}
                            secureTextEntry={true} />
                    </View>
                    <View style={{ marginVertical: 10 }} />

                    {/* NIK KTP/SIM */}
                    <Text style={styles.textData}>NIK KTP/SIM*</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <View style={{ marginVertical: 10 }} />

                    {/* ALAMAT */}
                    <Text style={styles.textData}>Alamat</Text>
                    <View style={styles.ViewInput}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={''}
                            placeholderTextColor={'#474747'} />
                    </View>
                    <View style={{ marginVertical: 10 }} />


                </ScrollView>
                {/* button selanjutnya */}
                <TouchableOpacity
                    style={{ width: '100%', marginTop: 0, }}>
                    <View
                        style={styles.loginButton} >
                        <Text style={styles.textButton}>Selanjutnya</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.9,
    },
    teksInfo: {
        color: 'darkcyan',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    textData: {
        color: '#474747', fontSize: 14, paddingHorizontal: 15, marginBottom: 5
    },
    ViewInput: {
        width: '100%',
        paddingHorizontal: 15
    },
    textInput: {
        height: 45,
        fontSize: 18,
        paddingHorizontal: 20,
        color: '#474747',
        borderWidth: 0.8,
        borderColor: '#474747',
        opacity: 0.6,
        borderRadius: 2,
    },
    loginButton: {
        height: 50,
        fontSize: 18,
        marginHorizontal: 0,
        backgroundColor: 'darkcyan',
        borderRadius: 0,
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },


})