import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ImageBackground,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';

import denuncia from '../../assets/denuncia.png';
import locacao from '../../assets/locacao1.png';

import noticia from '../../assets/noticia.png';
import parque from '../../assets/parque.png';
import disk from '../../assets/disk.png';
import arvore from '../../assets/arvore1.png';

import slider1 from '../../assets/1.png';
import slider2 from '../../assets/2.jpg';
import slider3 from '../../assets/3.png';
import slider4 from '../../assets/4.jpg';




import { AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

import ImagedCarouselCard from "react-native-imaged-carousel-card";


export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');


    async function listarDados() {

        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`bdtcc/BD/dashboard/listar-cards.php?user=${user}`);
            setDados(res.data);

        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);

        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };


    return (

        <View style={{ flex: 1 }}>
            <View style={styles.header}>

                <TouchableOpacity

                    style={styles.menu}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >

                    <MaterialIcons name="menu" size={35} color="black" />
                </TouchableOpacity>



            </View>

            {/*<ImageBackground style={styles.fundo2} source={arvore}>*/}

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}

                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >


                <TouchableOpacity onPress={() => navigation.navigate("Usuario")}>

                    <Text style={styles.t2}> Seus processos </Text>

                </TouchableOpacity>

                <View style={styles.containerBox}>

                </View>
                <View style={styles.container2}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={denuncia}
                            style={styles.fundo} />


                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={noticia}
                            style={styles.fundo} />


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={parque}
                            style={styles.fundo} />

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={disk}
                            style={styles.fundo} />

                    </TouchableOpacity>

                </View>

                <View style={styles.container3}>
                    <Text style={styles.botaotexto}>Denúncias</Text>
                    <Text style={styles.botaotexto}>Notícias</Text>
                    <Text style={styles.botaotexto}>Parques</Text>
                    <Text style={styles.botaotexto2}>Contato</Text>
                </View>


                <Text style={styles.t3}>Notícias</Text>


                <ScrollView
                    horizontal={true}
                >
                    <View style={styles.container4}>



                        <TouchableOpacity
                            onPress={() => navigation.navigate("noticia1")}>
                            <ImagedCarouselCard
                                style={styles.carousel}
                                width={300}
                                height={170}
                                shadowColor="#051934"
                                source={slider1}
                                text="Nova lei de Licenciamento Ambiental"

                            >
                            </ImagedCarouselCard>
                        </TouchableOpacity>



                        <TouchableOpacity
                            onPress={() => navigation.navigate("noticia2")}>
                            <ImagedCarouselCard
                                style={styles.carousel}
                                width={300}
                                height={170}
                                shadowColor="#051934"
                                source={slider2}
                                text="Crescimento no Número de licenciaturas para Construção civil"
                            >
                            </ImagedCarouselCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("noticia3")}>
                            <ImagedCarouselCard
                                style={styles.carousel}
                                width={300}
                                height={170}
                                shadowColor="#051934"
                                source={slider3}
                                text="Licenciamento na Foz do Amazonas"
                            >
                            </ImagedCarouselCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("noticia4")}>
                            <ImagedCarouselCard
                                style={styles.carousel}
                                width={300}
                                height={170}
                                shadowColor="#051934"
                                source={slider4}
                                text="Programas de Meio Físico do Licenciamento Ambiental Federal"
                            >
                            </ImagedCarouselCard>
                        </TouchableOpacity>


                    </View>
                </ScrollView>


                <Text style={styles.t3}>Parques</Text>
                <View style={styles.container2}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={locacao}
                            style={styles.localizacao} />


                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={locacao}
                            style={styles.localizacao} />


                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Usuario")}>
                        <Image source={locacao}
                            style={styles.localizacao} />

                    </TouchableOpacity>



                </View>

             
            </ScrollView>

            {/* </ImageBackground> */}


        </View>




    )
}