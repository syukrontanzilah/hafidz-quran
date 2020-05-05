import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { imgRekamSuara,
    imgRekamVideo,
    imgTerapiFatihah,
    imgKiblat,
    imgDoa,
    imgKlinikFatihah,
    imgPasar,
    imgLainnya,} from '../../asset/index'


const imgBanner1 = require('../../asset/icon/mosque.jpg')


class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '' }}>
                <ScrollView style={{ flex: 1 }}>
                    {/* HEADER */}
                    <View style={{ justifyContent: 'space-between', backgroundColor: 'darkcyan', height: 55, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                        {/* <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 50 }}>
                            <Image style={{ height: 40, width: 40 }} source={require('../../asset/icon/logohafidz.jpeg')} />
                        </View> */}
                        <Text style={{ color: 'white', fontSize: 20 }}>Hafidz_Quran</Text>
                        <TouchableOpacity
                        onPress = {()=> this.props.navigation.navigate('Login')}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: 30, width: 30, borderRadius: 100, backgroundColor: '' }}>
                                <Image style={{ height: 25, width: 25, borderRadius: 0 }} source={require('../../asset/icon/enter.png')} />
                            </View>
                        </TouchableOpacity>

                    </View>

                    {/* BANNER */}
                    <View style={{ height: 220, backgroundColor: 'wheat' }}>
                        <Image style={{ height: undefined, width: undefined, resizeMode: 'stretch', flex: 1 }} source={require('../../asset/icon/mosque.jpg')} />

                        {/* kota */}

                        <View style={{ position: 'absolute', flexDirection: 'row', top: 20, left: 20, opacity: 0.7 }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 20, width: 20, }} source={require('../../asset/icon/pinputih.png')} />
                                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 8, marginRight: 10 }}>Kota Bogor</Text>
                                <Image style={{ height: 10, width: 10, top: 8 }} source={require('../../asset/icon/pickerputih.png')} />
                            </TouchableOpacity>
                        </View>

                        {/* sunyikan dan lihat semua */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 20, left: 20 }}>
                            <View style={{ flexDirection: 'row', opacity: 0.7 }}>
                                <Image style={{ height: 15, width: 15, }} source={require('../../asset/icon/soundon.png')} />
                                <Text style={{ color: 'white', fontSize: 15, left: 8 }}>Sunyikan</Text>
                            </View>
                        </View>

                        {/* Lihat semua */}
                        <View style={{ position: 'absolute', bottom: 20, right: 20, opacity: 0.7 }}>
                            <Text style={{ color: 'white', fontSize: 15, }}>Lihat Semua</Text>
                        </View>

                        {/* waktu sholat */}
                        <View style={{ position: 'absolute', right: 20, top: 50, opacity: 0.7 }}>
                            <Text style={{ color: 'white', fontSize: 32 }}>Ashar, 15:12</Text>
                        </View>

                        {/* jam */}
                        <View style={{ position: 'absolute', right: 20, top: 90, opacity: 0.7 }}>
                            <Text style={{ color: 'white', fontSize: 18 }}>00.01.56</Text>
                        </View>

                    </View>

                    {/* MENU FEATURE */}
                    <View style={{ backgroundColor: 'white', marginTop: 10, paddingHorizontal: 10, paddingVertical: 10 }}>

                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>

                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgRekamSuara} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Rekam Suara</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgRekamVideo} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Rekam Video</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgTerapiFatihah} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Terapi Bacaan</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgKiblat} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Arah Kiblat</Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>

                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgDoa} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Berbagi Doa</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgKlinikFatihah} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Klinik Bacaan</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgPasar} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Pasar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Lainnya')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgLainnya} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Lainnya</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    {/* INFO TERKINI */}
                    <View style={{ marginTop: 15, backgroundColor: 'white', paddingHorizontal: 15, justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Info Terkini</Text>
                        <Text style={{ fontSize: 15, color: 'orange' }}>Lihat semua</Text>
                    </View>

                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ backgroundColor: 'white', paddingHorizontal: 15, paddingBottom: 15 }}>

                        <View style={{ height: 170, width: 280, marginRight: 10, borderRadius: 10 }}>
                            <Image style={{ height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} source={require('../../asset/icon/mosque.jpg')} />

                            <View style={{ position: 'absolute', bottom: 8, left: 10, right: 10 }}>
                                <Text style={{ color: 'white', opacity: 0.85, fontSize: 15 }}>Banjir melanda kota yang tak pernah terungkapkan sebelumnya</Text>
                                <Text style={{ fontSize: 12, color: 'white', opacity: 0.6 }}>02/04/2020, 05:58:18</Text>
                            </View>
                        </View>

                        <View style={{ height: 170, width: 280, marginRight: 10, borderRadius: 10 }}>
                            <Image style={{ height: undefined, width: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} source={require('../../asset/icon/mosque.jpg')} />

                            <View style={{ position: 'absolute', bottom: 8, left: 10, right: 10 }}>
                                <Text style={{ color: 'white', opacity: 0.85, fontSize: 15 }}>Banjir melanda kota yang tak pernah terungkapkan sebelumnya</Text>
                                <Text style={{ fontSize: 12, color: 'white', opacity: 0.6 }}>02/04/2020, 05:58:18</Text>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10 }} />
                    </ScrollView>





                </ScrollView>






         

            </View>
        )
    }
}

export default Home;

const Styles = StyleSheet.create({
    imgMenuWrap: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    imgWrap: {
        height: 45, width: 45, backgroundColor: '#e6f2ff', justifyContent: 'center', alignItems: 'center', borderRadius: 100, alignSelf: 'center'
    },
    imgMenu: {
        height: 28, width: 28
    },
    TextMenu: {
        color: '#474747', fontSize: 12, marginTop: 5, textAlign: 'center'
    },

})