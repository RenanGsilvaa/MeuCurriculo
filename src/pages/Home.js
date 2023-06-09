import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Home = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../images/FotoMeuCurriculo.jpg')} style={{ width: 175, height: 175, borderRadius: 100}}/>
        </View>
        <Text>Olá, meu nome é Renan Gabriel da Silva. Esse é o meu primeiro segundo na verdade.</Text>
        <Text>O objetivo desse aplicativo é se comportar como se fosse um currículo, o meu no caso.</Text>
        <Text>Espero que goste.</Text> 
        <Button title="Sobre" onPress={ () => navigation.navigate('Sobre')} />
        <Button title='Formação' onPress={() => navigation.navigate('Formacao')} />
        <Button title='Experiências' onPress={() => navigation.navigate('Experiencias')} />
        <Button title='Pontos Fortes' onPress={() => navigation.navigate('PontosFortes')} />
        <Button title='Pontos Fracos' onPress={() => navigation.navigate('PontosFracos')} />
        <Button title='Gostos' onPress={() => navigation.navigate('Gostos')} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: '',
      padding: 30,
      margin: 25,
    }
  });

export  default Home;