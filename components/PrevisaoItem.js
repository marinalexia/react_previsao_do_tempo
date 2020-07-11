import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import Cartao from './Cartao';



const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                <Image  
                    style={estilos.imagem}
                    source={{uri: 'https://openweathermap.org/img/wn/' + props.previsao.item.weather[0].icon + '.png'}}
                />
                <View>
                  <View style={estilos.primeiraLinha}>
                    <Text>{new Date(props.previsao.item.dt * 1000).
                    toLocaleTimeString()} - {props.previsao.item.
                    weather[0].description}</Text>
                </View>
                <View style={estilos.SegundaLinha}> 
                    <Text style={estilos.valor}>{props.previsao.item.main.temp_min}</Text>
                    <Text style={estilos.valor}>{props.previsao.item.main.temp_max}</Text>
                    <Text style={estilos.valor}>{props.previsao.item.main.humidity}</Text>
                </View>
            </View>
        </View>
        </Cartao>
    );
}
const estilos = Stylesheet.create({
    cartao: {
        marginBottom: 8
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        wifth: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopColor: '#DDD',
        borderTopWidth: 1
    },
    valor: {
        marginHorizontal: 2
    }
});
export default PrevisaoItem;