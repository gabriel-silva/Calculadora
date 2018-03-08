import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {

    constructor(props) {
        super(props);
        this.state = { num1: '10', num2: '25' };

        //preservando o contexto da função calcular
        this.calcular = this.calcular.bind(this);
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        console.log(resultado);
    }

    render() {
        return (
            <View>
                <Entrada num1={this.state.num1} num2={this.state.num2} />
                <Operacao />
                <Comando acao={this.calcular} />
            </View>
        );
    }
}


//parecido como Painel: Painel
export { Painel };