import {GET_CARDS} from "./actionTypes";

export function getCards() {
    const action: CardAction = {
        type: GET_CARDS,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CardAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}
