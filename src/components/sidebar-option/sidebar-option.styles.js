import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   color: grey;
   height: 40px;
   cursor: pointer;
   transition: color 0.2s ease-in;

   &:hover {
      color: white;
   }

   .icon {
      padding: 0 10px;
   }
`;

export const Title = styled.h4`
   ${(props) =>
      props.noIcon &&
      css`
         margin-top: 10px;
         margin-left: 20px;
         font-size: 14px;
      `}
`;
