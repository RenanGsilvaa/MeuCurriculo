import { StyleSheet, Text, View, Button } from 'react-native';

const Formacao = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Formação</Text>
        <View>
            <Text>Ensino médio Completo - SESI-237</Text>
            <Text>Cursando Desenvolvimento de Sistemas - ETEC, Guararapes</Text>
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

  export default Formacao;