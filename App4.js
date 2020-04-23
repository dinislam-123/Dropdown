
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';


export default class App4 extends Component {

  render(){

    const dataTest = [{"value": "Banana"},
                     {"value": "Mango"},
                     {"value": "Pear"}];

    return (
      <View style={styles.container}>
          <Text>Dropdown Heading</Text>
          <View style={{width: 100, height: 50, backgroundColor:'powderblue'}} >
            <Dropdown label='Favorite Fruit' data={dataTest[0]} />
          </View>
    </View>
  )};
}

const styles = StyleSheet.create({

  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
