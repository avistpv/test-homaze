import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import {Dispatch} from "redux";
import {useState} from "react";
import {FILTER_CARDS} from "../../store/actionTypes";
import {SearchBarStyles} from "./SeacrhBarStyles";

export default function SearchBar() {
    const [value, setValue] = useState('');
    const dispatch: Dispatch<any> = useDispatch()
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


