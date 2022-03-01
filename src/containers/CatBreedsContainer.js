import { useState, useEffect } from 'react';
import Breed from "../components/Breed";

const CatBreedsContainer = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = () => {
        fetch("https://api.thecatapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) => setError(err));
    }

    useEffect(() => {
        handleFetch();
    }, []);

    if (error) {
        console.log("error:", error)
    }

    if (!data) {
        return "Loading"
    }

    const catBreeds = data.map(cat => { 
        return <Breed name={cat.name} temp={cat.temperament} key={`cat-${cat.id}`} />
    })

    return (
        <>
            <h2>Cat Breeds</h2>
            <ul>
                { catBreeds }
            </ul>
        </>
    )
}

export default CatBreedsContainer;
