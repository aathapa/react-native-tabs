import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class TabView extends Component {
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#2980b9'}}>
                <Text style={{color: '#fff',fontSize:20}}>Result</Text>
            </View>
        );
    }
}
export default TabView;