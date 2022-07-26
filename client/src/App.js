import React, { useEffect, useState } from 'react';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';

const App = () => {
    const [state, setState] = useState(undefined);

    useEffect(() => {
        const delay = setInterval(() => {
            fetchData();
        }, 10000)
        return () => {
            clearInterval(delay)
        }
    }, []);

    const fetchData = async () => {
        try {
            await fetch("http://localhost:8080")
                .then((response) => response.json())
                .then((data) => {
                    setState(data)
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
        catch (error) { console.log(error); }
    }

    if (state === undefined) {
        return <div className='App loading'><Spinner className="App" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></div>
    } else {
        return (
            <div className='App'>
                <div><h1 className='judul'>Temperature and Humidity Monitor </h1></div>
                <h2 className='kata '>Temperature<br></br> {state.data.data.suhu} C</h2>
                <h2 className='kata '>Humidity<br></br>{state.data.data.kelembaban} %</h2>
                {/* <ProgressBar now={state.data.data.kelembaban} label={`${state.data.data.kelembaban}%`} /> */}
            </div>);
    }
}

export default App;