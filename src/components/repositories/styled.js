import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;   
    margin: auto;
    width: 80%;
`;

export const WrapperTabList= styled(TabList)`
    list-style-type: none;
    justify-content: center;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab= styled(Tab)`
    text-align:center;
    width:30%;
    margin:15px;
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: #fff;
    

    &:focus {
        outline: none;
    }

    &.is-selected{
        color: #fff;
        background-color: #0091dc;
        box-shadow: 23px 23px 36px -7px rgba(0,0,0,0.3);
    }
`;

WrapperTabs.tabsRole = 'Tab';

export const WrapperTabPanel= styled(TabPanel)`
    display: none;
    min-heigth: 40vh;
    padding: 16px;
    margin-top: 5px;
    box-shadow: 0 0 0.3em rgba( 0, 0, 0, 0.3);
    margin-top:-5px;
    
    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';


export const WrapperList = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;

`;

