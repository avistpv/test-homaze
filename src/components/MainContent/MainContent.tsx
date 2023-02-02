import * as React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardList from "../CardList/CardList";
import {MainContentStyles} from "./MainContentStyles";

export default function MainContent() {
    return (
        <MainContentStyles>
            <SearchBar/>
            <CardList/>
         </MainContentStyles>
    );
}
