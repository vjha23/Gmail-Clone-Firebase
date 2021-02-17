import React from 'react'
import '../css/sidebaroption.css'

function SidebarOption({ Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && 'sidebar-active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
