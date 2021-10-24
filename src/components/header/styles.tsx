import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 96px;
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    box-shadow: 1px 1px 1px #eeeeee;
    h3{
        :nth-child(1){
            color:#001122;
            font-family: 'lato';
            font-weight: bold;
            font-size: 16px;
            line-height: 1.75px;
            opacity: 30%;
            padding-bottom: 12px;
        }
        :nth-child(2){
            color:#001122;
            font-family: 'lato';
            font-weight: 600;
            font-size: 22px;
            line-height: 1.275;
            opacity: 80%;
        }
    }
`;