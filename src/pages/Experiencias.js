import { StyleSheet, Text, View, Button } from 'react-native';
import Botao from '../components/Botao';

const Experiencias = ({navigation}) => {
    return (
      <View style={styles.container}>        
        <Text>Experiencias</Text>
        <View>
            <Text>Trabalhos</Text>
              <Text>Auxiliar de Entrada de Nf - Estágio - Supermercado RedePas Jordão</Text>
              <Text>Auxiliar de escritório - Jovem Aprendiz - De Heus</Text>
              <Botao titulo={"Eu sou um botão, se clicar em mim vai para sobre"} acao={() => navigation.navigate("Sobre")}/>
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

    foto: {
      borderRadius: '5px',
    },
  });

  export default Experiencias;