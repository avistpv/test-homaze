interface ICard {
    id: number
    customerName: string
    address:string
    body: string
    rooms: IRoom[]
    updated_timestmp: number
    totalProject: number
    projectState: string
}

interface IRoom {
    id: number
    name: string
}

type CardState = {
    cards: ICard[]
}

type CardAction = {
    type: string
}

type DispatchType = (args: CardAction) => CardAction
