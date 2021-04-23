import React from 'react'
import SidebarOption from './SidebarOption';
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkBorderIcon from "@material-ui/core/icons/BookmarkBorder";
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import ReorderIcon from '@material-ui/icons/Reorder';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Sidebar() {
    return (
        <div>
            <SidebarOption icon = {HomeIcon} text="home" />
            <SidebarOption text="Explore" />
            <SidebarOption text="Notifications" icon={NotificationsIcon} />
            <SidebarOption icon ={EmailIcon}text="Messages" />
            <SidebarOption icon ={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption icon ={ReorderIcon} text="Lists" />
            <SidebarOption icon ={PersonIcon} text="Profile" />
            <SidebarOption text="More" icon ={MoreHorizIcon} />

        </div>
    )
}

export default Sidebar
