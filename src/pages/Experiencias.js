import { StyleSheet, Text, View, Button } from 'react-native';

const Experiencias = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Experiencias</Text>
        <View>
        <Text>Trabalhos</Text>
            <Text>Auxiliar de Entrada de Nf - Estágio - Supermercado RedePas Jordão</Text>
            <Text>Auxiliar de escritório - Jovem Aprendiz - De Heus</Text>
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

  export default Experiencias;