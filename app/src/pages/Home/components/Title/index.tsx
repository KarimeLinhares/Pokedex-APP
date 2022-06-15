import React from 'react';
import {Image, View} from 'react-native'


import Text from '../../../../components/Text';
import { Container } from './styles';
const Title = () => {
  return (
    <Container>
      <View>
        <Image style={{width:280, height: 100, marginLeft: 40}} source={ require('../../../../../assets/pkdex.png')} />
      </View>
      <Text>Encontre seu pokemon favorito!</Text>
      <Text style={{fontSize: 10}}>Developed by KarimeLinhares</Text>
    </Container>
    
  );
};

export default Title;
