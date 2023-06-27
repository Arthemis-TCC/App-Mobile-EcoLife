import React, { useEffect, useState } from 'react';
import { styles } from './style';


import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
    StatusBar,
    Alert,

} from 'react-native';
import desmatamento3 from '../../assets/3.png';

import { AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function noticia3() {
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


            <ScrollView>
                <Text style={styles.titulo}>Licenciamento na Foz do Amazonas</Text>
                <Image source={desmatamento3} style={styles.img1} />

                <View>
                    <Text style={styles.textonoticia}>O presidente do Ibama, Rodrigo Agostinho, disse que o órgão pode exigir a realização de uma avaliação ambiental estratégica 
                    para subsidiar o licenciamento na Foz do Amazonas, bacia onde a Petrobras tenta iniciar sua próxima campanha de perfuração de poços de petróleo e gás.
                    {'\n'}  {'\n'}
                    “Eu não posso antecipar uma decisão, mas uma Avaliação Ambiental Integrada, [ou] uma Avaliação Ambiental Estratégica, é, sim, uma possibilidade”, disse Agostinho
                     em entrevista à agência Sumaúma.
                    {'\n'}  {'\n'}
                    A Foz do Amazonas é uma região de nova fronteira exploratória, que se estende dos limites marítimos com a Guiana Francesa, pela costa dos estados do Amapá e Pará.
                    {'\n'}  {'\n'}
                   “A gente não está falando apenas de um poço de petróleo, estamos falando de abrir uma região inteira do Brasil para a exploração petrolífera. Obviamente que a
                    Avaliação Ambiental Estratégica é uma possibilidade real e está em análise neste exato momento”, completou
                    {'\n'}  {'\n'}
                    Se de fato a exigência for feita, pode levar à suspensão do licenciamento da Petrobras na região.
                    {'\n'}  {'\n'}
                    Ao contrário do que é feito individualmente pelas empresas, as avaliações integradas são estudos contratados pelo governo federal, para robustecer o conhecimento
                    ambiental de determinadas regiões.
                    {'\n'}  {'\n'}
                    A própria ministra Marina Silva (Rede) já defendeu a realização de uma AAE ou uma AAI, que consistem em avaliações mais amplas do que um Estudo de Impacto Ambiental
                    — pré-requisito a ser apresentado pelas empresas para obter o licenciamento de um projeto, o que já foi feito pela Petrobras.
                    {'\n'}  {'\n'}
                    “[A exploração da Foz do Amazonas] é altamente impactante, e temos instrumentos para lidar com projetos altamente impactantes, que é o instrumento da avaliação 
                    ambiental integrada, da avaliação ambiental estratégica”, disse Marina.
                    {'\n'}  {'\n'}
                    Em 2020, a Petrobras assumiu o bloco FZA-M-59, na Bacia da Foz do Amazonas, que seria operado pela BP, que abandonou o projeto — a estatal fez o mesmo com os 
                    blocos da TotalEnergies. A expectativa era obter os licenciamentos a partir dos estudos de impacto ambiental apresentados, o que foi descartado pela ministra.
                    {'\n'}  {'\n'}
                    “Não pode ser um licenciamento puramente pontual, é preciso fazer uma avaliação ambiental estratégica e trazer para a mesa todos os elementos, as implicações de 
                    um projeto como esse”, disse Marina.
                             </Text>
                   

                </View>

            </ScrollView>


        </View>
    );

}

