import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Live extends Component {
    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#3498db'}}>
                <Text style={{color: '#fff',fontSize:20}}>Live</Text>
            </View>
        );
    }
}
export default Live;