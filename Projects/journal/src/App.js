import './App.css';
import './Responsive.css'
import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body'
import data from './data'

function App() {
    const jobs = data.map(item => {
        return ( <
            Body key = { item.id }
            item = { item }
            />
        )
    })
    return ( <
        main >
        <
        Navbar / >
        <
        section > { jobs } <
        /section> < /
        main >
    )
}

export default App