import React from 'react'
import './Sidebar.css'
import ExploreIcon from '@material-ui/icons/Explore';
import SidebarOption from './SidebarOption';
import TwitterIcon from "@material-ui/icons/Twitter";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import ReorderIcon from '@material-ui/icons/Reorder';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />
            <SidebarOption Icon = {HomeIcon} text="Home" />
            <SidebarOption text="Explore" Icon={ExploreIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsIcon} />
            <SidebarOption Icon ={EmailIcon}text="Messages" />
            <SidebarOption Icon ={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon ={ReorderIcon} text="Lists" />
            <SidebarOption Icon ={PersonIcon} text="Profile" />
            <SidebarOption text="More" Icon ={MoreHorizIcon} />
            <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>

        </div>
    )
}

export default Sidebar
