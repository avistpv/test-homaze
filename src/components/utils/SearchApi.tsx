import {useEffect, useState} from "react";
export default function SearchApi() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://mocki.io/v1/2a320d60-2cfe-48b9-ba87-d7cd34c5cd64")// fetching 2 times//
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return(
        <ul>
            {items.map(item => (
                <li key={item["projectId"]}>
                    {item["customerName"]}  {item["address"]}
                </li>
            ))}
        </ul>
    )
}
