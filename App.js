import React from 'react';
import { AppRegistry } from 'react-native'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem, Image  } from 'react-native-elements'
import BootStrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootStrapStyleSheet();
const {s, c} = bootstrapStyleSheet;

const DATA = [
  {
    id: '1',
    name: 'Pupusas',
    description: 'La pupusa es una tortilla gruesa a base de masa de maíz o de arroz rellena con uno o más ingredientes, como queso, chicharrón, ayote, frijoles refritos, loroco, etc.',
    image:'https://static.wixstatic.com/media/31cc0a_6d2b78bdd69a43c9b0a55b39ec6c1f5d~mv2.jpg/v1/fill/w_710,h_473,al_c,lg_1,q_90/31cc0a_6d2b78bdd69a43c9b0a55b39ec6c1f5d~mv2.webp'
  },
  {
    id: '2',
    name: "Yuca",
    description: 'Se puede preparar frita o sancochada, de cualquiera de estas dos maneras de preparación y puede ir acompañada de una infinidad de ingredientes, los cuales pueden ser: Chicharrones, pepescas (pequeños pescaditos secos), salsa de tomate, curtido, tomate, pepino, etc',
    image:'https://www.elsalvadoresturismo.site/wp-content/uploads/2020/09/Yuca-Frita-de-El-Salvador-2-e1599929015862.jpg'
  },
  {
    id: '3',
    name: 'Nuegados',
    description: 'Existen diferentes tipos. Los de yuca, son preparados con yuca, queso y huevo. Por su parte, los de maíz (conocidos también como de masa) están hechos de con harina de maíz -la misma ocupada para tortillas- polvo para hornear, mantequilla y/o margarina. Mientras que, para los de huevo se utilizan claras y yemas de huevo, polvo para hornear, bicarbonato y harina de pan. Todos los nuégados pasan por aceite para poder degustar con su sabor crocante. Y se acompañan con miel',
    image:'https://www.recetassalvadorenas.com/wp-content/uploads/2014/04/nuegados-de-huevo-e1444742405974.jpg'
  }
];

const Item = ({ name, description, image }) => (
  <Card>
    <ListItem>
      <Image style={{ width: 300, height: 200 }} source={{uri: image}} />
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
          <Card.Divider />
          <Text>{description}</Text>
        </ListItem.Content>
    </ListItem>
  </Card>
    
)

export default function App() {
  const renderItem = ({ item }) => (
    <Item name={item.name} description={item.description} image={item.image} />
  );
  
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />       
    </SafeAreaView>     
  );
}

const styles = StyleSheet.create({
  image: {
    width: '40%',
    height: 'auto',
  },
})

AppRegistry.registerComponent("cars", () => App)
