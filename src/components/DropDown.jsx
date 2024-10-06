import React from 'react'
import MenuItems from './MenuItems'

const DropDown = ({ submenu, dropdown ,depthLevel }) => {
    depthLevel = depthLevel+1
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {
                submenu?.map((submenu, index) => {
                    return (
                       <MenuItems item={submenu} key={index} depthLevel={depthLevel}/>
                    )
                })
            }
        </ul>
    )
}

export default DropDown