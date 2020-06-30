import React, { Component } from 'react';

import { Container, ImageBirthDay, Text } from './styles';

import image from './../assets/happybirthday.png';

import Galeria from '../Components/Galeria';

import ReactAudioPlayer from 'react-audio-player';

import song from './parabens.ogg';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <ReactAudioPlayer
                    src={song}
                    autoPlay
                    controls
                    loop
                />
                <ImageBirthDay src={image}/>
                <Text>Baby, te desejo muitas alegrias, felicidades, saúde, que você possa alcançar tudo o que você deseja e que seja sempre alegre. Te gosto muito!
                     <strong> S2  </strong></Text>
                
                <Galeria />
                
            </Container>
        );
    }
}