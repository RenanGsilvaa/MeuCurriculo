import { StyleSheet, Text, View, Button } from 'react-native';

const PontosFracos = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Pontos Fracos</Text>
        <View>
            <Text>Ansioso</Text>
            <Text>Indeciso</Text>
            <Text>Ou pensa muito ou pensa pouco antes de fazer algo</Text>
            <Text>Pensa no que os outros estão pensando sobre mim</Text>
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

  export default PontosFracos;