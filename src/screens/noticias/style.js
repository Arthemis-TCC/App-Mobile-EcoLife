

import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
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
    titulo:{
        fontSize: 30,
        marginTop:25,
        justifyContent:"center", 
        color:'#0D552A',
        alignSelf: "center",
        marginBottom: 5
    },
   img1:{
        width: 350,
        height: 200,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 15, 
        borderRadius: 10
        
    },
    textonoticia:{
        maxWidth: 360,
        alignSelf: "center",
        textAlign: "justify", 
        marginBottom: 25
    }

    }
    )