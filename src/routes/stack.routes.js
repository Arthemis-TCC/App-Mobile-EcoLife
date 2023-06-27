import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
//import { Splash } from '../lotties/Splash';
import AuthRoutes from './tab.routes';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import Noticia1 from '../screens/noticias/noticia1';
import Noticia2 from '../screens/noticias/noticia2';
import Noticia3 from '../screens/noticias/noticia3';
import Noticia4 from '../screens/noticias/noticia4';

//import mapa1 from '../screens/Home/mapa';
//import mapa2 from '../screens/Home/mapa2';
//import mapa3 from '../screens/Home/mapa3';


const Stack = createNativeStackNavigator();


function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        }>


            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="Usuario" component={Usuario} />
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} />
            <Stack.Screen name="noticia1" component={Noticia1} />
            <Stack.Screen name="noticia2" component={Noticia2} />
            <Stack.Screen name="noticia3" component={Noticia3} />
            <Stack.Screen name="noticia4" component={Noticia4} />
            { /* <Stack.Screen name="mapa1" component={mapa1} />      */}
            { /*  <Stack.Screen name="mapa2" component={mapa2} />    */}
            { /*  <Stack.Screen name="mapa3" component={mapa3} />    */}
            <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
    )
}

function AppRoutes() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;