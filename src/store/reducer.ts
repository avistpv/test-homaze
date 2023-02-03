import {FILTER_CARDS, GET_CARDS} from "./actionTypes";
import {CardAction, CardState} from "../type";
import {sortByData} from "../utils/sortByData";

const initialState: CardState = {
    cards: [],
    initCard: []
}

const reducer = (
    state: CardState = initialState,
    action: CardAction
): CardState => {
    switch (action.type) {
        case GET_CARDS:
            return {
                ...state,
                initCard: sortByData([...state.cards, ...action.cards]),
                cards: sortByData([...state.cards, ...action.cards]),
            }
        case FILTER_CARDS:
            return {
                ...state,
                cards: (action.payload || '').length < 2
                    ? state.initCard
                    : state.initCard.filter((card ) => {
                   const filteredName = card.customerName.toLowerCase().includes((action.payload || '').toLowerCase());
                   const filteredAddress = card.address.toLowerCase().includes((action.payload || '').toLowerCase());
                   return filteredName || filteredAddress
                }),
            };
    }
    return state
}
export default reducer
