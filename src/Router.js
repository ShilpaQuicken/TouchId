import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import QuickenData from './QuickenData';
const RouterComponent = () => {
    const refreshOnBack = () => {
        QuickenData.getInstance().array.pop();
        Actions.pop();
        QuickenData.getInstance().object = QuickenData.getInstance().array[QuickenData.getInstance().array.length - 1];
    }
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
            key="firstScreen"
            component={FirstScreen}
            title="First Screen"
        />

        <Scene
          key="secondScreen"
          component={SecondScreen}
          title="Second Screen"
          onBack={refreshOnBack}
        />
    </Router>
  );
};

export default RouterComponent;
