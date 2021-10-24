
import * as Styles from './styles';
import Users from '../../assets/Users.svg';
import Timezone from '../../assets/Timezone.svg';
import Views from '../../assets/Views.svg';
import Close from '../../assets/Close.svg';
import {ModalTypes} from '../../types/apiTypes'

export function Modal({
    userCount,
    name,
    handleCount, 
    handleModal, 
    description, 
    createdAt}: ModalTypes){
       
    return(
        <Styles.ModalContainer>
            <Styles.ModalContent>
                <Styles.ModalTitle>
                    <h3>{name}</h3>
                    <img src={Close} 
                        alt=""  
                        onClick={()=> handleModal(false)}
                    />
                </Styles.ModalTitle>
                <Styles.ModalInfos>
                    <Styles.Icon>
                        <img src={Users} alt="" />
                        <h3>{`${userCount} Users`}</h3>
                    </Styles.Icon>
                    <Styles.Icon>
                        <img src={Timezone} alt="" />
                        <h3>{createdAt}</h3>
                    </Styles.Icon>
                    <Styles.Icon>
                        <img src={Views} alt="" />
                        <h3>
                            { handleCount && handleCount < 2 ? 
                            `${handleCount} View`: 
                            `${handleCount} Views` }
                            </h3>
                    </Styles.Icon>
                </Styles.ModalInfos>
                <Styles.ModalDescription>
                    <h3>Description</h3>
                    <p>{description}</p>
                </Styles.ModalDescription>
                <Styles.ModalButton 
                    onClick={()=> handleModal(false)}>
                    <h3>Done</h3>
                </Styles.ModalButton>
            </Styles.ModalContent>
        </Styles.ModalContainer>
    )



}