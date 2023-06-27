
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
import desmatamento4 from '../../assets/4.jpg';

import { AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';

export default function noticia() {
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
                <Text style={styles.titulo}>Ministério Público Estadual promove integração para conceder licenciamento ambiental</Text>
                <Image source={desmatamento4} style={styles.img1} />

                <View>
                    <Text style={styles.textonoticia}>Brasília (15/06/2023) - O Ibama realizará, nos próximos dias 26 e 27 de junho, das 9h às 12h, de forma remota,
                        o Fórum de Programas de Meio Físico do Licenciamento Ambiental Federal (LAF) de 2023. O evento tem como objetivo atestar o sucesso de medidas
                        de mitigação e compensação de impactos executadas em empreendimentos e projetos licenciados pelo Instituto. A Avaliação de Impacto Ambiental
                        (AIA), fase que embasa tecnicamente o licenciamento ambiental, é multidisciplinar, envolvendo o meio socioeconômico, meio biótico (flora e fauna)
                        e meio físico (água, ar, solo, resíduos etc.), sendo o último avaliado por engenheiros, químicos, físicos e outros profissionais. O Fórum desse
                        ano certificará iniciativas ambientais específicas para o meio físico.
                        {'\n'}
                        Comissão Organizadora do Fórum selecionou oito programas, cujos resultados serão compartilhados com o público.
                        {'\n'}  {'\n'}
                        Dia 26/06
                        {'\n'} {'\n'}
                        Linha de Transmissão 230kv Oriximiná-Juruti-Parintins e SEs Associadas, com o Programa de Prevenção, Contenção e Monitoramento de Processos Erosivos (PPCMPE);
                        Usina Hidrelétrica Porto Primavera, com o Programa de Monitoramento Limnológico;
                        Usina Hidrelétrica (UHE) Jirau, com o Programa de Monitoramento Hidrobiogeoquímico;
                        Atividade de Produção e Escoamento de Petróleo e Gás Natural do Polo Pré-Sal da Bacia de Santos - Etapa 2, com o Projeto de Monitoramento da Paisagem Acústica Submarina da Bacia de Santos (PMPAS-BS).
                        {'\n'}  {'\n'}
                        Dia 27/06
                        {'\n'}  {'\n'}
                        Serra Norte – Mina de Ferro Carajás, com a Gestão da Qualidade da água; Complexo Minerador S11D, com o Plano de Gestão Espeleológica;
                        Terminal Marítimo Ponta da Madeira (TMPM), com a Rede Automática de Monitoramento de Emissões Fugitivas de Partículas;
                        Porto Organizado de Santos, com o Programa de Controle e Monitoramento da Qualidade do Ar.
                        A exibição dos trabalhos selecionados será acompanhada de debate. Ainda no dia 27, depois das apresentações dos empreendimentos, a Diretoria de Proteção Ambiental (Dipro) apresentará trabalhos sobre a atuação do Instituto em emergências ambientais.
                    </Text>


                </View>

            </ScrollView>


        </View>
    );

}

