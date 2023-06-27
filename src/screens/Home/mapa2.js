/* import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { styles } from './style';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import config from'../../../config';
import marcador from '../../assets/4.jpg';


export default function mapa2() {
  
  const[origin, setOrigin]=useState(null);
  const[destination, setDestination]=useState(null);
  const mapEl=useRef(null);
  const[distance, setDistance] = useState(null);
  useEffect(() => {
    (async function(){
    let{status} = await Location.requestForegroundPermissionsAsync();

    if(status == 'granted')
    {
      let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
      setOrigin({
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922, 
        longitudeDelta: 0.0421,
      })
    }
    else{
      throw new Error('Localização não encontrada');
    }
  })();
},[]);

return(
  <View style={css.container}>
    <MapView
      style={css.map}
      initialRegion={origin}
      showsUserLocation={true}
      zoomEnabled={true}
      loadingEnabled={true}

      ref={mapEl}
    >

    */
    {/*marcador para origem*/}
    /*
    <Marker
    coordinate={{latitude:-24.495, longitude:-47.8456}}
    title={'Registro'}
    description={'Sâo Paulo, Brasil'}
>
  <View style={css.marcador}>
    <Image
    source={marcador}
    style={css.marcadorImage}
    >
  </Image>

<Text style={{color:'write', fontSize:13}}>Meu local 
  </Text> 

  </View>
    </Marker>
    */
        {/*marcador para destino*/}
        /*
       <Marker
    coordinate={destination}
    title={'Eldorado'}
    description={'São Paulo, Brasil'}
>
  <View style={css.marcador}>
    <Image
    source={marcador}
    style={css.marcadorImage}
    >
  </Image>

<Text style={{color:'write', fontSize:13}}>Meu local 
  </Text> 

  </View>
    </Marker>
     */
     {/* 2parte criação de rotas*/}
     /*
     {destination && 
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={config.googleApi}
        strokeWidth={10}
        strokeColor='#8A2A5D'
        onReady={result =>
        {
      setDistance(result.distance);
      mapEl.current.fitToCoordinates(
      result.coordinates, {
      edgePadding:{
      top: 50,
      bottom:50,
      left: 50,
      rigth: 50
  }
}
);
 }       
     }
     >
    </MapViewDirections>

     }
    </MapView>
    <View
      style={css.search}
    >
      <GooglePlacesAutocomplete 
      
      placeholder='Para onde Vamos?'
      onPress={(data, details = null) => {
        setDestination({
       latitude: details.geometry.location.lat,
       longitude: details.geometry.location.lng,
       latitudeDelta: 0.000922,
       longitudeDelta: 0.00421
        });
      }
      }
      query={{
        key: config.googleApi,
        language: 'pt-br'

      }}
 enablePoweredByContainer={false}
 fetchDetails={true}
 styles={{listView: {height:100}}}

      >

      </GooglePlacesAutocomplete>
    </View>
    {distance &&
    <Text style={css.distancia}> Distância: {distance}</Text>
    }
  </View>
)
};

*/
