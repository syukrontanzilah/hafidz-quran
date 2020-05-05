import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
    imgRekamSuara,
    imgRekamVideo,
    imgTerapiFatihah,
    imgKiblat,
    imgDoa,
    imgKlinikFatihah,
    imgPasar,
    imgDonasi,
    imgMasjid,
    imgPayment,
} from '../../asset/index';

class Lainnya extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '' }}>
                <ScrollView style={{ flex: 1 }}>
                    {/* HEADER */}
                    <View style={{ justifyContent: 'space-between', backgroundColor: 'darkcyan', height: 55, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontSize: 20 }}>Feature</Text>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: 30, width: 30, borderRadius: 100, backgroundColor: '' }}>
                                <Image style={{ height: 25, width: 25, borderRadius: 0 }} source={require('../../asset/icon/enter.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>



                    {/* MENU FEATURE */}
                    <View style={{ backgroundColor: 'white', marginTop: 10, paddingHorizontal: 10, paddingVertical: 10 }}>

                        {/* feature row 1 */}
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
                                    <Text style={Styles.TextMenu}>Terapi Alfatihah</Text>
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

                        {/* feature row 2 */}
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
                                    <Text style={Styles.TextMenu}>Klinik Alfatihah</Text>
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
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgDonasi} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Donasi</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* feature row 3 */}
                        <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgMasjid} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Masjid</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Transaksi')}>
                                    <View style={Styles.imgWrap}>
                                        <Image style={Styles.imgMenu} source={imgPayment} />
                                    </View>
                                    <Text style={Styles.TextMenu}>Payment</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity>
                                    <View style={{}}>
                                        <Image style={Styles.imgMenu} />
                                    </View>
                                    <Text style={Styles.TextMenu}></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.imgMenuWrap}>
                                <TouchableOpacity>
                                    <View style={{}}>
                                        <Image style={Styles.imgMenu} />
                                    </View>
                                    <Text style={Styles.TextMenu}></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        )
    }
}

export default Lainnya;

const Styles = StyleSheet.create({
    imgMenuWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgWrap: {
        height: 45,
        width: 45,
        backgroundColor: '#e6f2ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        alignSelf: 'center'
    },
    imgMenu: {
        height: 28,
        width: 28
    },
    TextMenu: {
        color: '#474747',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center'
    },




})