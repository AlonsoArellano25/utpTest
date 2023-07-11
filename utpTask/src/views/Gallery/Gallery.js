import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

const Gallery = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('ItemGallery')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.banner}
              source={require('../assets/img/bg.jpg')}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ItemGallery')}>
            <View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/mejores1.jpg')}
                />
              </View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/mejores2.jpg')}
                />
              </View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/mejores3.jpg')}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('ItemGallery')}>
            <View style={styles.listado}>
              <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/hospedaje1.jpg')}
                />
              </View>
              <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/hospedaje2.jpg')}
                />
              </View>
              <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/hospedaje3.jpg')}
                />
              </View>
              <View style={styles.listadoItem}>
                <Image
                  style={styles.mejores}
                  source={require('../assets/img/hospedaje4.jpg')}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
  contenedor: {
    marginHorizontal: 10,
  },

  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
  },
});

export default Gallery;
