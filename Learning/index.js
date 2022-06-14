// // function Navbar() {
// //   return (
// //       <h1>I'm learning React!</h1>
// //   )
// // }
// // function MainContent() {
// //   return (
// //       <h2>I'm learning React!</h2>
// //   )
// // }

// // ReactDOM.render(
// //   <div>
// //       <Navbar />
// //       <MainContent />
// //   </div>,
// //   document.getElementById("root")
// // )


// // const nav = (
// //   <nav>
// //       <h1>Website</h1>
// //       <ul>
// //           <li>Pricing</li>
// //           <li>About</li>
// //           <li>Contact</li>
// //       </ul>
// //   </nav>
// // )

// // console.log(nav)

// // ReactDOM.render(
// //   nav, document.querySelector('#root')
// // )


// import React from "react"
// import ReactDOM from "react-dom"
// import Header from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

// function App() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"))
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function(num) {
//     return num * num
// })

// console.log(squares)

// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map((name) => {
//     return name[0].toUpperCase() + name.slice(1)
// })

// console.log(capitalized)

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here

// const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

// console.log(paragraphs)