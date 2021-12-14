import styled from "styled-components";

export const Wrapper = styled.div`

   border: 1px solid #ccc;
   border-radius: 15px;
   background-color: #fff;
   width:33%;
   heigth:15%;
   position: relative;
   padding:20px;
   margin:15px;
   
   &:hover{
    border: 1px solid #0091dc; 
   }
`;

export const WrapperTitle = styled.h2`
   font-size: 18px;
   font-weight: bold;
   margin: 4px 0;
`;

export const WrapperFullName = styled.h4`
   font-size: 14px;
   font-weight: bold;
   margin: 8px 0;
   color: #555;
`;

export const WrapperLink = styled.a`
   color: blue;
   font-weight: bold;
   cont-size: 18px;
`;
