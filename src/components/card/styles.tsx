import styled from "styled-components";
import {ContainerCardTypes} from '../../types/apiTypes'

export const CardContainer = styled.div<ContainerCardTypes>` 
    height: 139px;
    width: 340px;
    border-radius: 2px;
    border: 1px solid #eeeeee;
    margin: 0 15px 15px 0;
    cursor: pointer;
    :hover{
        background-color: ${props => props.hover ? '#F6F6F6' : null};
        transition: filter 0.2s;
    }
`;

export const CardWrapper = styled.div`
    padding: 15px 25px;
`;

export const TitleContainer = styled.div`
    
    padding-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HoverIcon = styled.div<ContainerCardTypes>`
    display: ${props => props.hover && !props.openModal ? 'flex': 'none'}; 
    background-color: ${props => props.hover && !props.openModal ? 'white': null} ;
    position: ${props => props.hover && !props.openModal ? 'relative': null}; 
    height:${props => props.hover && !props.openModal ? '26px': null}; 
    width: ${props => props.hover && !props.openModal ? '26px': null}; 
    border-radius:${props => props.hover && !props.openModal ? '50%': null};
    display:${props => props.hover && !props.openModal ? 'flex': 'none'};
    align-items: ${props => props.hover && !props.openModal ? 'center': null};
    justify-content: ${props => props.hover && !props.openModal ? 'center': null};
    top:  ${props => props.hover && !props.openModal ? '-6px': null};
    right: ${props => props.hover && !props.openModal ? '-10px': null};
    img{
        opacity: ${props => props.hover && !props.openModal? '0.5': null};
    }
`;

export const Title = styled.h3`
    font-family: 'lato';
    font-weight: bold;
    font-size: 18px;
    color: #001122;
`;

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
