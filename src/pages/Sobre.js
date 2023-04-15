import { StyleSheet, Text, View, Button } from 'react-native';

const Sobre = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Sobre</Text>
        <Text>
              Como já dito meu nome é Renan, na data desde projeto tenho 18 anos, mas, nasci no dia 16/12/2004
              Estudei toda a minha vida na escola SESI-237, da minha cidade, cidade essa Guararapes-Sp
              Cidade essa onde eu nasci e moro até o dia de hoje. Cristão declarado mas quase batizado, estamos no processo
              meu jovem. Inclusive, Deus te ama.
        </Text>
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

  export default Sobre;