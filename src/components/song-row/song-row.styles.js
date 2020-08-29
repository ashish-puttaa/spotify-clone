import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   margin-left: 20px;
   padding: 20px;
   z-index: 100;
   color: #fff;

   &:hover {
      cursor: pointer;
      background-color: black;
      opacity: 0.8;
   }
`;

export const AlbumArt = styled.img`
   height: 40px;
   width: 40px;
`;

export const Info = styled.div`
   margin-left: 20px;
`;

export const Name = styled.h1`
   font-size: 16px;
`;

export const Artists = styled.p`
   font-size: 14px;
   margin-top: 3px;
   color: grey;
`;
