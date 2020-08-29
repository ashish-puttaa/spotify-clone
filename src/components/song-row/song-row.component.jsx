import React from 'react';

import { Wrapper, AlbumArt, Info, Name, Artists } from './song-row.styles';

function SongRow({ track }) {
   return (
      <Wrapper>
         <AlbumArt src={track.album.images[0].url} alt="" />
         <Info>
            <Name>{track.name}</Name>
            <Artists>
               {track.artists.map((artist) => artist.name).join(', ')} - {track.album.name}
            </Artists>
         </Info>
      </Wrapper>
   );
}

export default SongRow;
