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
        this.state = { num1: '10', num2: '25', operacao: 'soma' };

        //preservando o contexto da função calcular
        this.calcular = this.calcular.bind(this);
        //preservando o contexto da função atualizarValor
        this.atualizaValor = this.atualizaValor.bind(this);
        //preservando o contexto da função atualizaOperacao
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        let resultado = 0;
        switch (this.state.operacao) {
            case 'soma':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;

            case 'subtracao':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;

            default:
                resultado = 0;
        }
        console.log(resultado);
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {};
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    atualizaOperacao(operacao) {
        this.setState({ operacao: operacao });
    }

    render() {
        return (
            <View>
                <Entrada
                    num1={this.state.num1}
                    num2={this.state.num2}
                    atulizarValor={this.atualizarValor} />
                <Operacao
                    operacao={this.state.operacao}
                    atualizaOperacao={this.atualizaOperacao} />
                <Comando acao={this.calcular} />
            </View>
        );
    }
}


//parecido como Painel: Painel
export { Painel };