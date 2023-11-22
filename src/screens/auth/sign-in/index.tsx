
import { View, TextInput, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import rncStyles from 'rncstyles'

export default function Login() {
    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <ScrollView>
                    <View
                        style={rncStyles.py5}>
                        <View
                            style={rncStyles.flexCenter}
                        >
                            <Image
                                resizeMode='contain'
                                style={[
                                    rncStyles.roundedPill,
                                    { width: 140, height: 140 }
                                ]}
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU'
                                }}
                            />
                        </View>
                        <View
                            style={rncStyles.flexCenter}
                        >
                            <Text
                                style={[
                                    rncStyles.fs1,
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.mb1
                                ]}
                            >Muhammad Zaid</Text>
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textSecondary,
                                ]}
                            >@Muhammad_zaid</Text>
                        </View>
                    </View>

                    <View>
                        <View
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Full Name</Text>
                            <TextInput
                                style={[
                                    rncStyles.input,
                                    rncStyles.bgWhite,
                                    rncStyles.rounded,
                                    rncStyles.border1,
                                    rncStyles.borderPrimary
                                ]}
                                placeholder='eg. Muhammad Zaid'
                            />
                        </View>

                        <View
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Contact</Text>
                            <TextInput
                                keyboardType='number-pad'
                                style={[
                                    rncStyles.input,
                                    rncStyles.bgWhite,
                                    rncStyles.rounded,
                                    rncStyles.border1,
                                    rncStyles.borderPrimary
                                ]}
                                placeholder='Enter Password atleast 6 characters'
                            />
                        </View>
                        <View
                            style={rncStyles.py2}
                        >
                            <TouchableOpacity
                                style={[
                                    rncStyles.btnPrimary,
                                    rncStyles.rounded
                                ]}
                            >
                                <Text
                                    style={[
                                        rncStyles.fs5,
                                        rncStyles.textWhite,
                                        rncStyles.textCenter
                                    ]}
                                >Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    </>
}

