// import React from "react"

import { process_params } from "express/lib/router"

// export default function Header() {
//     return (
//         <header>
//             <nav className="nav">
//                 <img src="./react-logo.png" className="nav-logo" />
//                 <ul className="nav-items">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }


// Using props to write a conditional statements

//if props.setup exist display block else display none
// export default function Joke(props) {
//     return (
//         <div>
//             <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
//             <p>Punchline: {props.punchline}</p>
//             <hr />
//         </div>
//     )
// }
//OR
// export default function Joke(props) {
//     return (
//         <div>
//             {props.setup && <h1>Setup: {props.setup}</h1>}
//             <p>Punchline: {props.punchline}</p>
//             <hr />
//         </div>
//     )
// }

// const isGoingOut = true;
// let answer = isGoingOut ? 'Yes' : 'No';

// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)

//     React.useEffect(function() {
//          async function getMemes() {
//     const res = await fetch(`https://swapi.dev/api/people/${count}`)
//     const data = await res.json()
//     setStarWarsData(data)
// }
// getMemes()
// }, [])
//   

//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }
// import React from "react"

// export default function WindowTracker() {

//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

//     React.useEffect(() => {
//         function watchWidth() {
//             console.log("Setting up...")
//             setWindowWidth(window.innerWidth)
//         }

//         window.addEventListener("resize", watchWidth)

//         return function() {
//             console.log("Cleaning up...")
//             window.removeEventListener("resize", watchWidth)
//         }
//     }, [])

//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// }