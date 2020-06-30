import React, { Component } from 'react';

import { Container, ImageBirthDay, Text } from './styles';

import image from './../assets/happybirthday.png';

import Galeria from '../Components/Galeria';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <ImageBirthDay src={image}/>
                <Text>Baby, te desejo muitas alegrias, felicidades, saúde, que você possa alcançar tudo o que você deseja e que seja sempre alegre. Te gosto muito! <strong> S2  </strong></Text>
                
                <Galeria />
            </Container>
        );
    }
}