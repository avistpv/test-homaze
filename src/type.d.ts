import {Action} from "redux";
import {ThunkAction} from "redux-thunk";

interface ICard {
    id: number;
    projectId: string;
    customerName: string;
    address:string;
    rooms: IRoom[];
    updated_timestmp: number;
    totalProject: number;
    projectState: string;
}

interface IRoom {
    id: number;
    name: string;
}

type CardState = {
    cards: ICard[];
    initCard: ICard[];
}

type CardAction = {
    type: string;
    cards: ICard[];
    payload?: string;
}

type DispatchType = (args: CardAction) => CardAction
