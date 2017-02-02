import React, { Component } from 'react';
import { Text,View } from 'react-native';

const TabIcon = ({selected,title}) => {
    const selectStyles = selected? styles.selectedTab:{}
    return(
        <View>
            <Text style={[selectStyles,styles.tabText]}>{title}</Text> 
        </View>
           
    );
}
const styles = {
    selectedTab: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    }
}
export default TabIcon;