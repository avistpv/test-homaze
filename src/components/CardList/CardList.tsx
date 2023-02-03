import {useEffect} from "react";
import {CardState, ICard} from "../../type";
import {getCards} from "../../store/actionCreators";
import {shallowEqual, useSelector} from "react-redux";
import Card from "../Card/Card";
import {CardListStyles} from "./CardListStyles";
import {useDispatch} from 'react-redux'
import {Dispatch} from "redux";

export default function CardList() {

    const dispatch: Dispatch<any> = useDispatch()
    const cards: readonly ICard[] = useSelector(
        (state: CardState) => state.cards,
        shallowEqual
    )

    useEffect(() => {
        dispatch(getCards());
    }, [])

    return (
        <CardListStyles>
            {cards?.map(card => (
                <Card
                    {...card}
                    key={card.projectId}
                />
            ))}
        </CardListStyles>
    );
}

