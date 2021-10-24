import { Dispatch, SetStateAction } from "react"

export type ApiTypes = {
    createdAt: string;
    description: string;
    name: string;
    userCount: number;
}

export type ContainerCardTypes={
    hover: boolean
    openModal?:boolean
    
}

export type ModalTypes = {
    createdAt:string;
    description: string;
    name: string;
    userCount:number;
    handleCount: number;
    handleModal: Dispatch<SetStateAction<boolean>>
}