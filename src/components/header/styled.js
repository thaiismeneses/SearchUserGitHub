import styled from "styled-components";

export  const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 4px;
    margin: 20px;

    input{
        display: flex;
        align-items:center;
        border: 1px solid #CCC;
        border-radius: 8px;
        width:600px;
        height: 44px;
        padding: 8px;
        font-weight: 400;
        
        
    }

    button{
        background-color: #0091dc;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-size: 16px;

        &:hover{
            box-shadow: 23px 23px 36px -7px rgba(0,0,0,0.3);
        }

        span{
            font-weight: bold;
            color: white;
        }
    }

    

`;