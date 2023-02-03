import React, {ReactNode} from 'react';
import {LayoutStyles} from "./LayoutStyles";

interface PageProps {
    children: ReactNode;
}

export default function Layout({children}: PageProps) {
    return (
        <>
            <LayoutStyles>
                {children}
            </LayoutStyles>
        </>
    );
}
