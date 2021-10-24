import React, { useState } from 'react';
import * as Styles from './styles';
import Users from '../../assets/Users.svg';
import Timezone from '../../assets/Timezone.svg';
import Views from '../../assets/Views.svg';
import Edit from '../../assets/Edit.svg';
import {ApiTypes} from '../../types/apiTypes'
import {Modal} from '../modal'

export function Card({
    createdAt,
    description,
    name, 
    userCount, 
    }: ApiTypes) {
    const[isHover, setIsHover] = useState(false);
    const[handleCount, setHandleCount] = useState(0);
    const[isModal, setIsModal] = useState(false)
    const createdDate = new Date(createdAt);
        const hourFormated = createdDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',hour12: true });
        const gmtFormatted = createdDate.getTimezoneOffset()/60;
        const fullHourFormatted = gmtFormatted > 0 ? `${hourFormated} (GMT+${gmtFormatted})`: `${hourFormated} (GMT${gmtFormatted})`
    return (
            isModal ? (
                <Modal 
                    handleCount={handleCount}
                    handleModal={setIsModal}
                    createdAt={fullHourFormatted} 
                    description={description} 
                    name={name} 
                    userCount={userCount} 
                />
                ) : (
                <Styles.CardContainer 
                    hover={isHover} 
                    onMouseEnter={()=>{setIsHover(true)}} 
                    onMouseLeave={()=>{setIsHover(false)}}
                    onClick ={()=>{setHandleCount(handleCount+1);
                        setIsModal(true)}} 
                >
                <Styles.CardWrapper>
                    <Styles.TitleContainer>                
                        <Styles.Title>{name}</Styles.Title>
                        <Styles.HoverIcon hover={isHover} openModal={isModal}> 
                            <img src={Edit} alt="" />
                        </Styles.HoverIcon>
                    </Styles.TitleContainer>
                    
                    <Styles.Icon>
                        <img src={Users} alt="" />
                        <h3>{`${userCount} Users`}</h3>
                    </Styles.Icon>
                    <Styles.Icon>
                        <img src={Timezone} alt="" />
                        <h3>{fullHourFormatted}</h3>
                    </Styles.Icon>
                    <Styles.Icon>
                        <img src={Views} alt="" />
                        <h3>{ handleCount && handleCount < 2 ? `${handleCount} View`: `${handleCount} Views` }</h3>
                    </Styles.Icon>
                </Styles.CardWrapper>
            </Styles.CardContainer>
            )        
    );
}