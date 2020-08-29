import React from 'react';

import { Wrapper, Image, Info } from './playlist-banner.styles';
import { Title, Subtitle, Description } from './playlist-banner.styles';

function PlaylistBanner({ playlist }) {
   return (
      <Wrapper>
         <Image src={playlist?.images[0].url} alt="" />
         <Info>
            <Title>Playlist</Title>
            <Subtitle>Discover Weekly</Subtitle>
            <Description>{playlist?.description}</Description>
         </Info>
      </Wrapper>
   );
}

export default PlaylistBanner;
