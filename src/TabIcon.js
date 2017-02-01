import React, { Component } from 'react';
import { Text,View } from 'react-native';

const TabIcon = ({selected,title}) => {
    return(
        <View>
            <Text style={{color: selected ? '#fff' :'#000'}}> {title}</Text> 
        </View>
           
    );
        
}
export default TabIcon;