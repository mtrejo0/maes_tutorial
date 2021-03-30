import React from 'react'

import {NavLink} from 'react-router-dom'

import '../styles/nav_bar.css'

class NavigationBar extends React.Component {


    render() {
        var active = {
            fontWeight: 'bold',
            color: '#6b000e'
        }

        return (
            <div>
                <ul>
                    <li><NavLink to="/home" activeStyle={active}>Home</NavLink></li>
                    <li><NavLink to="/resume" activeStyle={active}>Resume</NavLink></li>
                    <li><NavLink to="/projects" activeStyle={active}>Projects</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;