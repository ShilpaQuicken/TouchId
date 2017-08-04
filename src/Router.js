import React from 'react';
import {Scene, Router, Reducer, Actions} from 'react-native-router-flux';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import QuickenData from './QuickenData';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        if(action.type !== null && action.type === 'Navigation/BACK') {
            QuickenData.getInstance().array.pop();
            QuickenData.getInstance().title = QuickenData.getInstance().array[QuickenData.getInstance().array.length - 1];
        }
        return defaultReducer(state, action);
    };
};

const RouterComponent = () => {
    return (
        <Router createReducer={reducerCreate} sceneStyle={{paddingTop: 65}}>
            <Scene key="root">
                <Scene
                    key="firstScreen"
                    component={FirstScreen}
                    title="First Screen"
                />

                <Scene
                    key="secondScreen"
                    component={SecondScreen}
                    title="Second Screen"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;