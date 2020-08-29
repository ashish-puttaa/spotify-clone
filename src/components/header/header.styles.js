import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 30px;
`;

export const Left = styled.div`
   flex: 0.5;
   min-width: 75px;
   background-color: #fff;
   color: grey;
   border-radius: 30px;
   display: flex;
   align-items: center;
   padding: 10px;
`;

export const Right = styled.div`
   display: flex;
   align-items: center;
`;

// LEFT

export const SearchInput = styled.input`
   border: none;
   width: 100%;
   outline: none;
`;

// RIGHT

export const UserName = styled.h4`
   margin-left: 10px;
`;
