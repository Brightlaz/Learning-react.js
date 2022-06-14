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