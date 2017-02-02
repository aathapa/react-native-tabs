import React, { Component } from 'react';
import {  } from 'react-native';
import { Actions,Scene,Router } from 'react-native-router-flux';
import Point from './components/Point';
import FirstScreen from './components/FirstScreen';
import Result from './components/Result';
import Live from './components/Live';
import TabIcon from './TabIcon';


export default class AppRouter extends Component {

    render() {
        return(
            <Router>
                <Scene key="root">
                    <Scene
                        key="tabBar"
                        tabBarStyle={styles.tabBarStyle}
                        tabs
                    >
                        <Scene key="homescreen" title="Points" component={Point} hideNavBar icon={TabIcon} />
                        <Scene key="tabView" title="Result" icon={TabIcon}  component={Result} hideNavBar/>
                        <Scene key="live" title="Live" icon={TabIcon}  component={Live} hideNavBar/>
                    </Scene>
                    <Scene key="firstScreen" component={FirstScreen} hideNavBar initial/>
                </Scene>
                
            </Router>
        );
    }
}
const styles = {
    tabBarStyle: {
        top: 0,
        backgroundColor: '#95a5a6'
    }
}