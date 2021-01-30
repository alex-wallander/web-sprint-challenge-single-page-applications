import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Home() {

    const history = useHistory();

    const routeToForm = () => {
        console.log(history);
        history.push('/pizza');
    };

    return (
        <div className='home-page'>
            <img
            className='home-image'
            src='https://media4.s-nbcnews.com/i/newscms/2020_09/3246761/plain_pizza_f431dcc55520ce41f835a97a5383f171.jpg'
            alt='pizza on home page'
            />
            <button onClick={routeToForm} className='form-button'>Pizza?</button>
        </div>
    )
}