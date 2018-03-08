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
        //preservando o contexto da função atualizarValor
        this.atualizarValor = this.atualizarValor.bind(this);
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    }

    atualizarValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    render() {
        return (
            <View>
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atulizarValor={this.atualizarValor} />
                <Operacao />
                <Comando acao={this.calcular} />
            </View>
        );
    }
}


//parecido como Painel: Painel
export { Painel };