import React, {ReactNode} from 'react';
import {ContainerStyles} from "./ContainerStyles";

interface ContainerProps {
    children: ReactNode;
}

export default function Container({children}: ContainerProps) {
    return (
        <>
            <ContainerStyles>
                {children}
            </ContainerStyles>
        </>
    );
}
