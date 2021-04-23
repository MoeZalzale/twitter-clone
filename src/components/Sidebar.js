import React from 'react'
import SidebarOption from './SidebarOption'
import {Home,Notifications, Email, Person, Bookmark, Reorder, MoreHoriz} from '@material-ui/core'

function Sidebar() {
    return (
        <div>
            <SidebarOption text="home" />
            <SidebarOption text="Explore" />
            <SidebarOption text="Messages" />
            <SidebarOption text="Bookmarks" />
            <SidebarOption text="Lists" />
            <SidebarOption text="Profile" />
            <SidebarOption text="More" />

        </div>
    )
}

export default Sidebar
