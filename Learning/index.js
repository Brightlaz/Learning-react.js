function Navbar() {
    return ( <
        h1 > I 'm learning React!</h1>
    )
}

function MainContent() {
    return ( <
        h2 > I 'm learning React!</h2>
    )
}

ReactDOM.render( <
    div >
    <
    Navbar / >
    <
    MainContent / >
    <
    /div>,
    document.getElementById("root")
)


const nav = ( <
    nav >
    <
    h1 > Website < /h1> <
    ul >
    <
    li > Pricing < /li> <
    li > About < /li> <
    li > Contact < /li> < /
    ul > <
    /nav>
)

console.log(nav)

ReactDOM.render(
    nav, document.querySelector('#root')
)