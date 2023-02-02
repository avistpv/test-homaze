import {ICard} from "../type";

export const sortByData = (arr: ICard[]) =>
    arr.sort((a,b)=> b.updated_timestmp - a.updated_timestmp);
