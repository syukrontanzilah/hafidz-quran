import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'


export default class Login extends Component {

    componentDidMount = () => {
        AsyncStorage.getItem('username').then((value) => this.setState({ 'username': 'admin' }))
        AsyncStorage.getItem('password').then((value) => this.setState({ 'password': '123' }))
    }

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            inputUsername: '',
            inputPassword: '',
        }
    }

    submitLogin = () => {
        const { inputUsername, inputPassword } = this.state;
        const myUsername = this.state.username;
        const myPassword = this.state.password;
        if (inputUsername == '' && inputPassword == '') {
            alert('Username dan Password tidak boleh kosong')
        } else if (inputUsername != myUsername && inputPassword != myPassword) {
            alert('Akun tidak terdaftar')
        } else if (inputUsername == myUsername && inputPassword != myPassword) {
            alert('Password anda salah')
        } else if (inputUsername != myUsername && inputPassword == myPassword) {
            alert('Username anda salah')
        } else if (inputUsername == myUsername && inputPassword == '') {
            alert('Lengkapi Password anda ')
        } else if (inputUsername == '' && inputPassword == myPassword) {
            alert('Lengkapi Username anda')
        } else if (inputUsername == myUsername && inputPassword == myPassword) {
            this.props.navigation.navigate('Home')
        } else {
            alert('Format yang anda masukkan salah')
        }
    }


    render() {
        return (
            <View
                style={styles.Container}>

                {/* top logo */}
                <View style={styles.logoView}>
                    <View>
                        <Image style={styles.logo}
                            source={require('../../asset/icon/arabic2.png')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.tekslogo1}>Hafidz</Text>
                        <Text style={styles.tekslogo2}>_Quran</Text>
                    </View>
                </View>


                {/* EMAIL */}

                <View style={styles.ViewInput}>
                    <TextInput
                        onChangeText={inputUsername => this.setState({ inputUsername })}
                        style={styles.textInput}
                        placeholder={'Alamat email'}
                        placeholderTextColor={'#474747'}
                    />
                </View>
                <View style={{ marginVertical: 10 }} />

                {/* PASSWORD */}
                <View style={styles.ViewInput}>
                    <TextInput
                        onChangeText={inputPassword => this.setState({ inputPassword })}
                        style={styles.textInput}
                        placeholder={'Password'}
                        placeholderTextColor={'#474747'}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('LupaPassword')}
                    style={{ marginHorizontal: 35, marginTop: 5 }}>
                    <Text style={styles.lupaPassword}>Lupa Password?</Text>
                </TouchableOpacity>

                {/* LOGIN */}
                <TouchableOpacity
                    onPress={() => this.submitLogin()}
                    style={{ width: '100%', marginTop: 30, }}>
                    <View
                        style={styles.loginButton} >
                        <Text style={styles.textButton}>Masuk</Text>
                    </View>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', opacity: 0.7, justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={{ color: '#474747' }}>Belum punya akun?  </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}> Daftar Sekarang</Text>
                    </TouchableOpacity>
                </View>





            </View>
        )
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.9,
        justifyContent:'center'
    },
    logoView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    logo: {
        height: 50,
        width: 50
    },
    tekslogo1: {
        color: 'orange',
        fontSize: 25,
    },
    tekslogo2: {
        color: 'darkcyan',
        fontSize: 25,
        fontWeight: 'bold'
    },
    ViewInput: {
        width: '100%',
        paddingHorizontal: 30
    },
    textInput: {
        height: 50,
        fontSize: 18,
        paddingHorizontal: 30,
        color: '#474747',
        borderWidth: 0.8,
        borderColor: '#474747',
        opacity: 0.5,
        borderRadius: 25,
    },
    lupaPassword: {
        color: '#474747',
        textAlign: 'right',
        fontSize: 14,
        opacity: 0.5
    },
    loginButton: {
        height: 50,
        fontSize: 18,
        marginHorizontal: 30,
        backgroundColor: 'darkcyan',
        borderRadius: 25,
        justifyContent: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },


})