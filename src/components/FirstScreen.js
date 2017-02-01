import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    render() {
        return(
            <View style={{ height: 40,flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#ddd'}}>
                <Text style={{color: '#000',fontSize:20}} onPress={Actions.tabBar}>Click to go Tab Section</Text>
            </View>
        );
    }
}
export default Login;