import React from 'react';
import { Grid, Slider } from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

import { Wrapper, Left, Center, Right } from './footer.styles';
import { AlbumCover, SongInfo, SongTitle, SongArtist } from './footer.styles';

function Footer() {
   return (
      <Wrapper>
         <Left>
            <AlbumCover src="" alt="" />
            <SongInfo>
               <SongTitle>Yeah!</SongTitle>
               <SongArtist>Usher</SongArtist>
            </SongInfo>
         </Left>
         <Center>
            <ShuffleIcon className="icon icon--green" />
            <SkipPreviousIcon className="icon" />
            <PlayCircleOutlineIcon className="icon" fontSize="large" />
            <SkipNextIcon className="icon" />
            <RepeatIcon className="icon icon--green" />
         </Center>
         <Right>
            <Grid container spacing={2}>
               <Grid item>
                  <PlaylistPlayIcon />
               </Grid>
               <Grid item>
                  <VolumeDownIcon />
               </Grid>
               <Grid item xs>
                  <Slider />
               </Grid>
            </Grid>
         </Right>
      </Wrapper>
   );
}

export default Footer;
