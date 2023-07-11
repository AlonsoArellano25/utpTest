import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gql, useQuery} from '@apollo/client';

const GET_PLACES = gql`
  query getPlaces {
    getPlaces {
      name
      description
      url
    }
  }
`;

export default function ItemGallery() {
  const {data, loading, error} = useQuery(GET_PLACES);
  console.log('loading: ' + loading);
  console.log('error:' + error);
  console.log('places: ' + data?.places);
  return (
    <View style={styles.contenedor}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.banner}
          source={require('../assets/img/item.jpg')}
        />
      </View>
      <Text style={styles.titulo}>Descubre la cultura de Italia</Text>
      <ScrollView horizontal>
        <View>
          <Image
            style={styles.ciudad}
            source={require('../assets/img/actividad1.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('../assets/img/actividad2.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('../assets/img/actividad3.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('../assets/img/actividad4.jpg')}
          />
        </View>
        <View>
          <Image
            style={styles.ciudad}
            source={require('../assets/img/actividad5.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: 'black',
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});
