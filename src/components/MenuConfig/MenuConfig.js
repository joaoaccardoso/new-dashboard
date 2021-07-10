import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
//Icons
import { FaChartBar, FaBook, FaUserAlt, FaCalendarAlt } from "react-icons/fa";


export default function MenuConfig() {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaChartBar />}><Link to="/">Dashboard</Link></MenuItem>
                <MenuItem icon={<FaCalendarAlt />}><Link to="/calendar">Calendar</Link></MenuItem>
                <SubMenu title="Pages" icon={<FaBook />}>
                    <MenuItem ><Link to="/about">About</Link></MenuItem>
                    <MenuItem icon={<FaUserAlt />}><Link to="/users">Users</Link></MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}
