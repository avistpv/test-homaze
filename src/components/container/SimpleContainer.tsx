import CssBaseline from '@mui/material/CssBaseline';
import React, {ReactNode} from 'react';
import {ContainerStyles} from "./parts";
import SearchBar from "../SearchBar/SearchBar";
import SearchApi from "../utils/SearchApi";

interface SimpleContainerProps {
    children: ReactNode;
}
export default function SimpleContainer({children}:SimpleContainerProps) {
    return (
        <>
            <SearchBar />
            <SearchApi />
            <CssBaseline />
            <ContainerStyles>
                {children}
            </ContainerStyles>
        </>
    );
}
