import { StyleSheet, Text, View, Button } from 'react-native';

const Gostos = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Formação</Text>
        <View>
            <Text>Amante de música e também do silêncio</Text>
            <Text>Prefere fazer tudo de manhã</Text>
            <Text>Gosta de corridas, Fórmulas, Protótipos, Gt, Nascar....</Text>
            <Text>Gosta de fazer, falar, pensar as coisas em inglês</Text>
            <Text>Gosta de programar, Web nem tanto</Text>
        </View>
        <Button title="Voltar" onPress={ () => navigation.goBack()} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: '',
    },
  });

  export default Gostos;