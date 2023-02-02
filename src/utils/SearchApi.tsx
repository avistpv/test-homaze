import {CardState, ICard} from "../type";
import {shallowEqual, useSelector} from "react-redux";

export default function SearchApi() {
    const cards: readonly ICard[] = useSelector(
        (state: CardState) => state.cards,
        shallowEqual
    )
    return (
        <ul>
            {cards.map(({projectId, customerName, address}) => (
                <li key={projectId}>
                    {customerName} {address}
                </li>
            ))}
        </ul>
    )
}
