import styled from 'styled-components';

export const Wrapper = styled.div`
   display: grid;
   place-items: center;
   height: 100vh;
   background-color: black;
   align-content: space-evenly;
`;

export const Image = styled.img`
   width: 80vw;
   max-width: 600px;
`;

export const LoginButton = styled.a`
   padding: 20px;
   background-color: #1db954;
   border-radius: 100px;
   font-weight: 700;
   color: white;
   text-decoration: none;
   text-transform: uppercase;
   font-size: 14px;
`;
