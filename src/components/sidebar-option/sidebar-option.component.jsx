import React from 'react';

import { Wrapper, Title } from './sidebar-option.styles';

function SidebarOption({ title, Icon }) {
   return (
      <Wrapper>
         {Icon && <Icon className="icon" />}
         {Icon ? (
            <Title>{title}</Title>
         ) : (
            <Title as="p" noIcon>
               {title}
            </Title>
         )}
      </Wrapper>
   );
}

export default SidebarOption;
