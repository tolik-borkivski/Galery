import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Galery from './src/components/Galery/Galery';
import ImageDetaile from './src/components/Galery/ImageDetail';
import { store } from './src/store';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <>
     <Provider store={store}>
       <NavigationContainer>        
          <Navigator>
            <Screen name="Galery" component={Galery} />
            <Screen name="ImageDetaile" component={ImageDetaile} options={({route}) => ({title: route.params.title})} />
          </Navigator>   
       </NavigationContainer>
     </Provider>
    </>
  );
};



export default App;
