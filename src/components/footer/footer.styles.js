import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   bottom: 0;
   height: 65px;
   width: 97%;
   background-color: #282828;
   padding: 20px;
`;

export const Left = styled.div`
   flex: 0.3;
   display: flex;
   align-items: center;
   color: white;
   width: 300px;
`;

export const Center = styled.div`
   flex: 0.4;
   padding: 0 100px;
   color: white;
   display: flex;
   align-items: center;
   justify-content: space-between;
   max-width: 300px;

   .icon {
      cursor: pointer;

      &:hover {
         transition: transform 0.2s ease-in-out;
         transform: scale(1.2);
      }

      &--green {
         color: #1ed15e;
      }
   }
`;

export const Right = styled.div`
   flex: 0.3;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: white;

   .MuiSlider-root {
      color: green;
   }
`;

// LEFT

export const AlbumCover = styled.img`
   height: 60px;
   width: 60px;
   object-fit: contain;
   margin-right: 20px;
`;

export const SongInfo = styled.div``;

export const SongTitle = styled.h4`
   margin-bottom: 5px;
`;

export const SongArtist = styled.p`
   font-size: 12px;
`;
