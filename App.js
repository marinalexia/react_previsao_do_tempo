import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const endpoint = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={minutely,hourly,daily}&appid={abcff91894d83a9f172ef5d711bc45f7}";
 // const apiKey = "abcff91894d83a9f172ef5d711bc45f7";
  
  const [cidade, setCidade] = useState('');
  const capturarCidade = (cidade) => {

  }

  const[previsoes, setPrevisoes] = useState([]);

  const obtemPrevisoes = () => {
    setPrevisoes([]);
    const target = endpoint + cidade +"&appid" ;
    //+ apiKey
    fetch(target).
    then(
    (dados =>dados.json())).then(dados => {
      setPrevisoes (dados['list'])
      Keyboard.dismiss()
    })
  }
  return (
    <View style={styles.container}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="Ok"
          onPress={obtemPrevisoes}/>

        <FlatList
        data={previsoes}
        renderItem={
        previsao => (
          <PrevisaoItem previsao={previsao}></PrevisaoItem>
        )
        }
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center',
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});

//const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
//const apiKey = abcff91894d83a9f172ef5d711bc45f7;

