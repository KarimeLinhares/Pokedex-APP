import React from 'react';
import pokeball from '../../../../../assets/pokeball-transparent.jpg';
import { IconBall, Container } from './styles';

const Header = () => {
  return (
    <Container>
      <IconBall source={pokeball} resizeMode="cover" />
    </Container>
  );
};

export default Header;
