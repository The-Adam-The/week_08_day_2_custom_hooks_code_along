import { useState } from 'react';
import CatBreedsContainer from '../containers/CatBreedsContainer';
import DogBreedsContainer from '../containers/DogBreedsContainer';
import '../App.css';

const MainPage = () => {
    const components = {
        'cats': <CatBreedsContainer  />,
        'dogs': <DogBreedsContainer  />,
    };

    const [animal, setAnimal] = useState();

    return (
        <div className='app'>
            <h1>Cats and Dogs!</h1>
            <button onClick={() => setAnimal('cats')}>Show Me The Cats</button>
            <button onClick={() => setAnimal('dogs')}>Show Me The Dogs</button>
            <div className='breeds-container'>
                {animal && components[animal]}
            </div>
            <footer>
                <a href="https://t4.ftcdn.net/jpg/00/26/80/33/360_F_26803377_fFNCrwUbzm7Ye6b3UP15VHwzWqU0Xcs3.jpg">Link to background image</a>
            </footer>
        </div>
    );
}

export default MainPage;
