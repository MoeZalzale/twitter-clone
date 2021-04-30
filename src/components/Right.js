import React from 'react'
import './Right.css'
import RightComponent from './RightComponent'
function Right() {
    return (
        <div className='right'>
            <div className="searchBar">
                <input type='text' placeholder="search"></input>
            </div>
            <div className="whatsNew">
                    <h2>Whats happening</h2>
                    <RightComponent/>
                    <RightComponent/>
                    <RightComponent/>
                    <RightComponent/>
                    <RightComponent/>
                    <RightComponent/>
                    <RightComponent/>
            </div>
        </div>
    )
}

export default Right
