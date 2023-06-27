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
import desmatamento2 from '../../assets/2.jpg';

import { AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function noticia2() {
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
                <Text style={styles.titulo}>Crescimento no número de licenciaturas para construção civil </Text>
                <Image source={desmatamento2} style={styles.img1} />

                <View>
                    <Text style={styles.textonoticia}>A Prefeitura de Três Rios, por meio da Secretaria de Obras e Habitação, divulgou nesta terça-feira (21)
                        dados que demonstram um crescimento no número de licenciamentos para construção civil expedidos no município.
                        {'\n'}  {'\n'}
                        O aumento mais expressivo é relacionado ao Alvará de Construção, documento emitido pela prefeitura que autoriza o requerente a executar obras 
                        e serviços. Ele é obrigatório para novas construções e outras intervenções, como ampliação, demolição, reforma, movimentação de terra e muro de
                        arrimo. Em comparação ao ano anterior, em 2022 foi registrado um aumento de 86% na expedição desse documento.
                        {'\n'}  {'\n'}
                        Outro aumento registrado é relacionado ao Habite-se, documento que a prefeitura emite para comprovar que a construção de um imóvel seguiu todas
                         as regras estabelecidas pelo município, tornando-o apto para servir como moradia.
                        {'\n'}  {'\n'}
                        Na prática, o Habite-se é um documento que garante que a construção de uma propriedade foi concluída com êxito, permitindo que, finalmente, o local
                        possa ser ocupado. Ainda numa comparação entre 2021 e 2022, houve um aumento de 56% em moradias licenciadas.
                        {'\n'}  {'\n'}
                        Os dados representam diretamente o ambiente de expansão econômica e de desenvolvimento vivenciado pelo município. Os números registrados em 2022, 
                        tanto relacionados a Alvarás de Construção quanto ao Habite-se, são recordes se comparados aos cinco anos anteriores.
                        {'\n'}  {'\n'}
                        Esse crescimento se deve, dentre outros fatores, a avanços significativos promovidos pela Prefeitura relacionados a adequações na forma de analisar
                        a documentação de projetos. Um exemplo é o Licença 4.0, desenvolvido em parceria com a Firjan, programa inédito no estado do Rio, que tem como objetivo 
                        de simplificar as etapas e a redução dos prazos de tramitação.
                        {'\n'}  {'\n'}
                        O crescimento no número de licenciamentos de construções se reflete ainda na arrecadação do município, já que a emissão desses documentos requer o pagamento
                        de taxas, que retornam à população em forma de serviços. Considerando os valores de alvarás mais o Habite-se, de 2021 para 2022 a arrecadação cresceu cerca 
                        de 80%.
                        {'\n'}  {'\n'}
                        “Devemos considerar ainda que o aumento no número de licenciamentos representa o crescimento de postos de trabalho no município. A construção civil é responsável
                         por grande parte dos empregos gerados no país, e a tendência é que esse cenário se reflita em Três Rios. Nosso desejo é que nossa cidade cresça ainda mais, 
                         em todos os aspectos”, comentou o prefeito Joa. 
                      </Text>


                </View>

            </ScrollView>


        </View>
    );

}

