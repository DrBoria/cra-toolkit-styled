import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button';
import { Highlighted } from 'components/Typography';

import { dark } from 'styles/themes';

import { TitleSection, Column, IntroSection } from './Intro.styles';

const Intro: FC<any> = ({ submit }) => (
  <ThemeProvider theme={{ colors: dark }}>
    <IntroSection>
      <Column>
        <TitleSection>
          We <Highlighted>design</Highlighted> & <Highlighted>develop</Highlighted> robust solutions for your products
        </TitleSection>
        <Button onClick={submit}>MAKE DEMO QUERY</Button>
      </Column>

      {/* Position relative is fix for absolute positioning of image */}
      <Column style={{ position: 'relative' }}>
        <img src='https://images.pexels.com/photos/4406335/pexels-photo-4406335.jpeg' width='400' height='400' alt='' />
      </Column>
    </IntroSection>
  </ThemeProvider>
);

export default Intro;
