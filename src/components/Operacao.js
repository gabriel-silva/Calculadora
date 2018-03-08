import React, { Component } from 'react';
import {
    Picker,
    StyleSheet
} from 'react-native';

export default class Operacao extends Component {

    constructor(props) {
        super(props);
        this.state = { operacao: '' };
    }

    render() {
        return (
            <Picker
                style={styles.operacao}
                selectedValue={this.state.operacao} //definir o valor que o component assume
                onValueChange={(op) => { //captura o valor selecionado pelo usuário
                    this.setState({ operacao: op });
                }}
            >
                <Picker.Item label='Soma' value='soma' />
                <Picker.Item label='Subtração' value='subtracao' />
            </Picker>
        );
    }
}

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
});