import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {CardState, ICard} from "../../type";
import {Dispatch} from "redux";
import {useState} from "react";
import {FILTER_CARDS} from "../../store/actionTypes";
import {SearchBarStyles} from "./SeacrhBarStyles";

export default function SearchBar() {
    const [value, setValue] = useState('');

    const dispatch: Dispatch<any> = useDispatch()
    const cards: readonly ICard[] = useSelector(
        (state: CardState) => state.cards,
        shallowEqual
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        dispatch({
            type: FILTER_CARDS,
            payload: value,
        })
    };

    return (
            <SearchBarStyles
                id="outlined-search"
                value={value}
                placeholder="Search Customer"
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <SearchIcon/>
                    ),
                }}
            />
    );
}


