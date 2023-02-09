import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import modules from './data';


export default function Modules({ navigation }) {
const handleModulePress = (item) => {
navigation.navigate('Module', { item });
};
return (
    <View style={styles.container}>
        <FlatList
            style={styles.list}
            data={modules}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleModulePress(item)}>
                <View style={styles.cardContainer}>
              <Image 
              source={{ uri: String(item.thumbnail) }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardInstructor}>{item.description}</Text>
            </View>
              </TouchableOpacity>  
            )}
        />
    </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 20,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    width: '95%',
    height: 200,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    color: '#333',
  },
  cardInstructor: {
    fontSize: 14,
    padding: 8,
    color: '#777',
  
  },
});
