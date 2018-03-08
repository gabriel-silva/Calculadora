import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (
    // <View>
    //     <Text>Painel</Text>
    // </View>
    <View>
        <Entrada />
        <Operacao />
        <Comando />
    </View>

);


//parecido como Painel: Painel
export { Painel };