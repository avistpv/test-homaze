import {GET_CARDS} from "./actionTypes";
import {DispatchType, ICard} from "../type";

export function addCards(cards: ICard[]){
    return {
        type: GET_CARDS,
        cards
    }
}

export function simulateHttpRequest(action: CardAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}
