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
import desmatamento from '../../assets/1.png';

import { AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default function noticia1() {
    return (

        <View style={{ flex: 1 }}>
            <View style={styles.header}>

                <TouchableOpacity

                    style={styles.menu}
                    onPress={() =>  navigation.dispatch(DrawerActions.closeDrawer())}

                >

                    <MaterialIcons name="menu" size={35} color="black" />
                </TouchableOpacity>



            </View>


            <ScrollView>
                <Text style={styles.titulo}>Nova lei de licenciamento ambiental</Text>
                <Image source={desmatamento} style={styles.img1} />

                <View>
                    <Text style={styles.textonoticia}>Após aprovar o texto-base, a Câmara dos Deputados finalizou a votação do projeto de lei
                        sobre licenciamento ambiental nesta quinta-feira 13/5 sem mudanças. Agora, a proposta segue para análise do Senado.
                        Apesar de deputados da base governista e da Bancada Ruralista afirmarem que a intenção é "racionalizar" e não "flexibilizar" as
                        regras, especialistas alertam para o risco de a nova lei aumentar os casos de conflitos levados ao Judiciário, a exemplo de
                        múltipla interpretação no caso da emissão ou não do licenciamento.De acordo com Letícia Marques, co-head da área de direito
                        ambiental do KLA Advogados, a judicialização é preocupante porque vários pontos do texto dão brecha a um questionamento pelo
                        Ministério Público.
                        {'\n'}  {'\n'}
                        “Um empreendedor que tenha uma licença ambiental emitida nos moldes propostos poderá ter essa licença questionada pelo Ministério Público.
                        É uma licença ambiental que pode vir com uma ação civil pública de ‘brinde’. Nesse caso, a promessa de desburocratização pode acabar em  longas,
                        complexas e onerosas ações judiciais”, diz.
                        {'\n'}  {'\n'}
                        A orientação atual, segundo Letícia, é que o licenciamento ambiental tenha resposta em até 120 dias, mas geralmente isso não é cumprido, por falta de pessoal.
                        Neste sentido, a proposta do texto é reduzir os pedidos de licenciamento e, ao diminuir a carga nos órgãos ambientais, os servidores possam focar em
                        empreendimentos que causem impactos maiores.
                        {'\n'}  {'\n'}
                        “Na minha leitura é uma iniciativa muito louvável, mas o mecanismo que escolheram para chegar a essa finalidade é preocupante, porque já existe precedente no
                        Supremo [Tribunal Federal] contra medidas de simplificação do licenciamento”, ressalta ao citar o Licenciamento por Adesão e Compromisso (LAC).
                        {'\n'}  {'\n'}
                        Letícia explica que não ficou suficientemente justificado que a LAC vá resultar em diminuição da proteção ambiental. “Se, de fato, houver o questionamento no
                        Supremo, considerando o precedente, pode ser que haja o questionamento para esses novos tipos de licença que são muito mais flexíveis. A LAC pode ser emitida pela
                        internet’, observa a advogada.
                        {'\n'}  {'\n'}
                        Ela ainda lembra que o licenciamento, assim como os estudos que o acompanham - a exemplo do Estudo de Impactos Ambientais - prevêem a prevenção de riscos
                        ambientais. “Se esse empreendedor que tiver a LAC cometer algum dano ambiental, alguma irregularidade, depois ele vai ser punido. No direito ambiental essa
                        lógica é invertida, pois o que a lei busca é prevenir o dano”, ressalta.
                        {'\n'}  {'\n'}
                        Marina Silva, ex-ministra do Meio Ambiente, postou em sua conta no Twitter que a aprovação do texto do deputado federal Neri Geller (PP-MT) causa insegurança
                        jurídica e ameaça investimentos no País pelo risco da judicialização. "O que vai acontecer é uma série de judicialização e é isso que não podemos permitir",
                        disse ela.
                        {'\n'}  {'\n'}
                        O licenciamento ambiental é uma importante ferramenta da Política Nacional do Meio Ambiente, conforme lembra Suely Araújo, analista sênior de políticas públicas do Observatório do Clima. No entanto, ela considera que o atual texto é um “cheque em branco para o liberou geral”. “Judicialização e insegurança jurídica é o que os ruralistas terão como resposta”, diz.
                        {'\n'}  {'\n'}
                        Malu Ribeiro, diretora de Políticas Públicas da Fundação SOS Mata Atlântica, se atenta à falta de estudos prévios que o licenciamento deveria exigir. “O texto não considera a Avaliação Ambiental Estratégica, o Zoneamento Econômico Ecológico e a análise integrada de impactos e riscos, além de excluir o controle social dos princípios do licenciamento ambiental. Dessa forma, afeta diretamente as políticas públicas de recursos hídricos e unidades de conservação.”
                    </Text>


                </View>

            </ScrollView>


        </View>
    );

}



