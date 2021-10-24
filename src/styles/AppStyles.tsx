import styled from "styled-components";

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const CardsContainer = styled.div`
    padding:25px 60px;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width:768px){
      padding: 25px 0;
    }

`;