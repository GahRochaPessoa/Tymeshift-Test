import styled from "styled-components";

export const Icon = styled.div`
    display: flex;
    width: 268px;
    height: 30px;
    align-items: center;
    img{
        width: 14px;
        height: 14px;
        margin-right: 2px;
    }
    h3{
        font-family: 'lato';
        font-weight: 500;
        font-size: 14px;
        color: #001122;
    }
`;

export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:rgba(0,17, 34, 60%);
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ModalContent = styled.div`
    height: 350px;
    width: 440px;
    background-color: white;
    border-radius: 2px;
`;


export const ModalTitle = styled.div`
    height: 56px;
    width: 100%;
    display: flex;
    padding: 0 25px;
    align-items: center;
    justify-content: space-between;
    h3{
        font-size: 16px;
        font-weight: 600;
        color: #001122;
        opacity: 0.8;
    }
    
    img{
        cursor: pointer;
        opacity: 0.3;
        height: 16px;
        width: 16px;
    }
`;

export const ModalInfos = styled.div`
    padding: 15px 25px 0 25px; 
`; 

export const ModalDescription = styled(ModalInfos)`
    margin-top: 15px;
    h3{
        font-family: 'lato';
        font-weight: 600;
        font-size: 14px;
    }
`;

export const ModalButton = styled.div`
    width: 64px;
    height:32px;
    background-color:#37B24D;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 17%;
    margin-left: 80%;
    h3{
        color: white;
        font-weight: 600;
        font-size: 14px;
        font-family: 'lato';
    }
`;

