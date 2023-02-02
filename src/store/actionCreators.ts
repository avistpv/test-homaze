import {GET_CARDS} from "./actionTypes";
import {DispatchType, ICard} from "../type";

export function addCards(cards: ICard[]){
    return {
        type: GET_CARDS,
        cards
    }
}

export function getCards(){
    return async (dispatch: DispatchType) => {
        fetch("https://mocki.io/v1/2a320d60-2cfe-48b9-ba87-d7cd34c5cd64")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    dispatch(addCards(result as ICard[]))
                },
                (error) => {
                    console.log(error)
                }
            )
    }
}
