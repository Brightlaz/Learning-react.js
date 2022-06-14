// import Card from "./components/Card"

// export default function App() {
//             // <Hero />
//     return (
//         <div>
//             <Navbar />
//             <Card 
//                 img="katie-zaferes.png"
//                 rating="5.0"
//                 reviewCount={6}
//                 country="USA"
//                 title="Life Lessons with Katie Zaferes"
//                 price={136}
//             />
//         </div>
//     )

import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return <Joke setup = { joke.setup }
        punchline = { joke.punchline }
        />
    })
    return ( <
        div > { jokeElements } <
        /div>
    )
}