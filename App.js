import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Paginas
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Formacao from './src/pages/Formacao';
import Experiencias from './src/pages/Experiencias';
import PontosFortes from './src/pages/PontosFortes';
import PontosFracos from './src/pages/PontosFracos';
import Gostos from './src/pages/Gostos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
        <Stack.Screen name="Formacao" component={Formacao}/>
        <Stack.Screen name="Experiencias" component={Experiencias}/>
        <Stack.Screen name="PontosFortes" component={PontosFortes}/>
        <Stack.Screen name="PontosFracos" component={PontosFracos}/>
        <Stack.Screen name="Gostos" component={Gostos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
