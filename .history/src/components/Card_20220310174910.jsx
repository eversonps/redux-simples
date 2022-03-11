import "./Card.css"
import React from "react"

function getColor(props){
    if(props.red) return "Red"
}

export default props => (
    <div className="Card">
        <div className="Header">
            <span className="Title">{props.title}</span>
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div>
)