import React from 'react';

import { useProviderState } from '../../context/state-provider';

import Header from '../header/header.component';
import PlaylistBanner from '../playlist-banner/playlist-banner.component';
import SongRow from '../song-row/song-row.component';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Wrapper, Songs, Icons } from './body.styles';

function Body({ spotify }) {
   const [{ discover_weekly }, dispatch] = useProviderState();

   return (
      <Wrapper>
         <Header spotify={spotify} />
         <PlaylistBanner playlist={discover_weekly} />

         <Songs>
            <Icons>
               <PlayCircleFilledIcon className="shuffle" />
               <FavoriteIcon fontSize="large" />
               <MoreHorizIcon />
            </Icons>

            {discover_weekly?.tracks.items.map((item) => (
               <SongRow key={item.track.id} track={item.track} />
            ))}
         </Songs>
      </Wrapper>
   );
}

export default Body;
