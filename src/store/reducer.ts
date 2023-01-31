import {GET_CARDS} from "./actionTypes";

const initialState: CardState = {
    cards: []
}

const reducer = (
    state: CardState = initialState,
    action: CardAction
): CardState => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                cards: state.cards,
            }
    }
    return state
}
export default reducer
