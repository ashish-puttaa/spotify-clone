import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import { Wrapper, Logo, Title, Divider } from './sidebar.styles';
import SidebarOption from '../sidebar-option/sidebar-option.component';
import { useProviderState } from '../../context/state-provider';

function Sidebar() {
   const [{ playlists }, dispatch] = useProviderState();

   return (
      <Wrapper>
         <Logo
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
         />
         <SidebarOption title="Home" Icon={HomeIcon} />
         <SidebarOption title="Search" Icon={SearchIcon} />
         <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
         <br />
         <Title>Playlists</Title>
         <Divider />

         <SidebarOption title="Hip hop" />
         <SidebarOption title="Rock" />
         <SidebarOption title="RnB" />

         {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
         ))}
      </Wrapper>
   );
}

export default Sidebar;
