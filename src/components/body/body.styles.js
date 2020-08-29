import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100vh;
   flex: 0.8;
   background: linear-gradient(transparent, rgba(0, 0, 0, 1)), rgb(91, 87, 115);
   color: #fff;
   padding: 30px;
   overflow-y: overlay;

   &::-webkit-scrollbar {
      display: none;
   }
`;

export const Songs = styled.div`
   margin: 20px -30px;
`;

export const Icons = styled.div`
   display: flex;
   align-items: center;

   .MuiSvgIcon-root {
      margin-right: 20px;
   }

   .shuffle {
      font-size: 80px;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 50px;
      transition: transform 0.1s ease-in;

      &:hover {
         transform: scale(1.08);
      }
   }
`;
