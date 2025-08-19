import React from 'react'
import './NavBar.css'
import { IoHome, IoHomeSharp, IoMap, IoMapOutline } from 'react-icons/io5'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { RiMapPinFill, RiMapPinLine } from 'react-icons/ri'
import { IoMdAddCircle, IoMdAddCircleOutline } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

function NavBar() {

    const { pathname } = useLocation();

    const headerMenu = [
        {
            id: 1,
            title: 'Home',
            icon: <GoHome size={30} />,
            iconActive: <GoHomeFill size={30} />,
            path: '/'
        },
        {
            id: 2,
            title: 'Moments',
            icon: <IoMapOutline size={30} />,
            iconActive: <IoMap size={30} />,
            path: '/moments'
        },
        {
            id: 3,
            title: 'Places',
            icon: <RiMapPinLine size={30} />,
            iconActive: <RiMapPinFill size={30} />,
            path: '/places'
        },
        {
            id: 4,
            title: 'Add',
            icon: <IoMdAddCircleOutline size={30} />,
            iconActive: <IoMdAddCircle size={30} />,
            path: '/add'
        },
    ]

    return (
        <nav className='navBarContainer'>
            <ul className='menuList'>
                {
                    headerMenu.map((menuItem) => {
                        return (
                            <li key={menuItem.id}>
                                <NavLink to={menuItem.path}>
                                    {pathname == menuItem.path ? menuItem.iconActive : menuItem.icon}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar