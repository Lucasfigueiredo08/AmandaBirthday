import React, { Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import './styles.css';

import { Container } from './styles';


function Galeria () {
  return (
      <Fragment>
          <Container>
                <AwesomeSlider
                    media={[
                    {
                        source: '/images/1.jpg'
                    },
                    {
                        source: '/images/2.jpg'
                    },
                    {
                        source: '/images/3.jpg'
                    },
                    {
                        source: '/images/4.jpg'
                    },
                    {
                        source: '/images/5.jpg'
                    },
                    {
                        source: '/images/7.jpg'
                    },
                    {
                        source: '/images/8.jpg'
                    },
                    {
                        source: '/images/9.jpg'
                    },
                    {
                        source: '/images/10.jpg'
                    },
                    {
                        source: '/images/11.jpg'
                    },
                    {
                        source: '/images/12.jpg'
                    },
                    {
                        source: '/images/13.jpeg'
                    },
                    {
                        source: '/images/14.jpg'
                    },
                    {
                        source: '/images/15.jpg'
                    },
                    {
                        source: '/images/17.jpg'
                    },
                    {
                        source: '/images/18.jpg'
                    },
                    {
                        source: '/images/19.jpg'
                    },
                    {
                        source: '/images/20.jpg'
                    },
                    {
                        source: '/images/21.jpg'
                    },
                    {
                        source: '/images/22.jpg'
                    },
                    {
                        source: '/images/23.jpg'
                    },
                    {
                        source: '/images/24.jpg'
                    },
                    {
                        source: '/images/25.jpg'
                    },
                    {
                        source: '/images/26.jpg'
                    },
                    {
                        source: '/images/27.jpg'
                    },
                    {
                        source: '/images/28.jpg'
                    },
                    {
                        source: '/images/29.jpg'
                    },
                    {
                        source: '/images/30.jpg'
                    },
                    {
                        source: '/images/31.jpg'
                    }
                    ]}
                />
            </Container>
        </Fragment>
  );
}

export default Galeria;