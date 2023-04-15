import { StyleSheet, Text, View, Button } from 'react-native';

const PontosFortes = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Pontos Fortes</Text>
        <View>
            <Text>Tenta ao máximo resolver problemas</Text>
            <Text>Ponta firme</Text>
            <Text>Pontual(Quando dá)</Text>
            <Text>Organizado</Text>
            <Text>Sem vergonha em falar com estranhos</Text>
            <Text>Fácil socialização</Text>
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

  export default PontosFortes;