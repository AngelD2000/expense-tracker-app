import React from "react"
import './Button.css'

const Button = ({ name, colorClass, hoverClass, onClick }) => {
    return (
        <button className={`btn ${colorClass} ${hoverClass}`} type="button" onClick={onClick}>{name}</button>
    )
}

export default Button;