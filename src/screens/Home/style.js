import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Carousel } from "react-native-snap-carousel";

export const styles = StyleSheet.create({
    container: {


    },

    header: {

        backgroundColor: '#a8d464',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 5 },
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 80,
    },

    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 40,
    },

    logo: {
        width: 160,
        height: 40,
        alignSelf: "center",
        marginTop: 10,
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting: {
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName: {
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText: {
        color: colors.green,
        fontSize: 35,
        fontFamily: fonts.text,
    },

    tasks: {
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground: {
        backgroundColor: '#333333'
    },

    tasksText: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout: {
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox: {
        width: '85%',
        height: 22,
        alignSelf: "center",
        marginTop: -25
    },
    container2: {
        flexDirection: 'row',
    },
    container3: {
        flexDirection: 'row',
    },
    box: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 1 },

    },

    rText: {
        fontSize: 20,
        color: 'gray',
        fontFamily: fonts.text,
    },

    textFooter: {
        borderTopColor: '#ccc',
        paddingTop: 15,
        paddingBottom: 10,
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#871003',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered: {
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    circleProgressView: {
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle: {
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer: {
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer: {
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    },

    t1: {
        fontSize: 20,
        marginTop: 40,
        lineHeight: 10,
    },

    t2: {
        fontSize: 25,
        marginTop: 20,
        marginLeft: 10
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' rgba(131, 178, 78, 0.7)',
        marginLeft: 20,
        marginTop: 20,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginBottom: 15,
    },
    botaotexto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        fontSize: 18,
        marginTop: -10,

    },
    botaotexto2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        fontSize: 18,
        marginTop: -10,
    },
    fundo: {
        width: 48,
        height: 50,


    },
    t3: {
        marginTop: 50,
        fontSize: 25,
        marginLeft: 20
    },
    container4: {
        marginTop: 10,
        flexDirection: 'row',


    },
    carousel: {
        marginLeft: 10,
    },
    fundo2: {
        marginTop: 10,
        width: '100%',
        height: '100%',
        opacity: 30,
        alignItems: "center",
        justifyContent: 'center',

    },
    localizacao:{
        marginLeft: 55,
        marginRight: 10,
        width: 48,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }, 
    map:{
        height: '70%'
    }, 
    search:{
        height: '30%'
    },
    distancia:{
    marginTop:-50

    },
    marcador:{
        width:90,
        height:70,
        backgroundColor:"transparent",
        flexDirection:"column",
        borderRadius:8,
        alignItems:'center'
    },
    marcadorImage:{
        width:50,
        height:50,
        resizeMode:'cover'
    }

})


