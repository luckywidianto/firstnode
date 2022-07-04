import React, { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const App = () => {
    const [state, setState] = useState(undefined);

    useEffect(() => {
        fetchData();
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
        return <p>Loading....</p>
    } else {
        return (
            <div className='App'>
                <div><h1 className='judul'>Progres monitoring</h1></div>
                <h2 className='kata'>Suhu : {state.data.temperature} C</h2>
                <h2 className='kata'>Kelembaban :{state.data.humidity} %</h2>
                <ProgressBar now={state.data.temperature} label={`${state.data.temperature} C`} />
            </div>);
    }
}

export default App;