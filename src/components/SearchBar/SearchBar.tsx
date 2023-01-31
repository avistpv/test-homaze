import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
export default function SearchBar() {
    const dispatch: Dispatch<any> = useDispatch()
    const cards: readonly ICard[] = useSelector(
        (state: CardState) => state.cards,
        shallowEqual
    )
    console.log(cards)
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
    );
}
