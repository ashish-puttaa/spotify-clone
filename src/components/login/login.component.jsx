import React from 'react';

import { loginUrl } from '../../spotify/spotify';

import { Wrapper, Image, LoginButton } from './login.styles';

const Login = () => {
   return (
      <Wrapper>
         <Image
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
         />
         <LoginButton href={loginUrl}>Login with Spofity</LoginButton>
      </Wrapper>
   );
};

export default Login;
