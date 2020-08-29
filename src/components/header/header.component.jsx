import React from 'react';
import { Avatar } from '@material-ui/core';

import { useProviderState } from '../../context/state-provider';

import SearchIcon from '@material-ui/icons/Search';

import { Wrapper, Left, Right } from './header.styles';
import { SearchInput, UserName } from './header.styles';

function Header({ spotify }) {
   const [{ user }, dispatch] = useProviderState();

   return (
      <Wrapper>
         <Left>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search for Artists, Songs, or Albums" />
         </Left>

         <Right>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            <UserName>{user?.display_name}</UserName>
         </Right>
      </Wrapper>
   );
}

export default Header;
