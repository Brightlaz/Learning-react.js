import React from 'react'

function Body(props) {
    console.log(props)
    return ( <
        div >
        <
        div className = "flex" >
        <
        div className = "img" >
        <
        img src = { props.item.imageUrl }
        alt = 'image' / >
        <
        /div> <
        div >
        <
        h1 > { props.item.title } < /h1> <
        p > < b > { `${props.item.startDate} - ${props.item.endDate}` } < /b></p >
        <
        p > { props.item.description } < /p> <
        p > < img src = ".././images/location.png"
        alt = "location"
        id = "icon" / > < span > { props.item.location } < /span><a href = {props.item.googleMapsUrl} target = "_blank">{props.item.view}</a > < /p> < /
        div > <
        /div> <
        hr / >
        <
        /div>

    )
}
export default Body