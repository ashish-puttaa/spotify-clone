import React from 'react';

import Sidebar from '../sidebar/sidebar.component';
import Body from '../body/body.component';
import Footer from '../footer/footer.component';

import { Wrapper, Main } from './player.styles';

const Player = ({ spotify }) => {
   return (
      <Wrapper>
         <Main>
            <Sidebar />
            <Body />
         </Main>
         <Footer></Footer>
      </Wrapper>
   );
};

export default Player;
