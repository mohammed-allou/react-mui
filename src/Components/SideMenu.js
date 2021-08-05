import React from 'react';
import { TiHome } from "react-icons/ti";
import { TiBook } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import Home from '../pages/Home';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <TiHome style={{ fontSize: '1.6em' }} />,
        component: () => <Home />,
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <TiBook style={{ fontSize: '1.6em' }}/>,
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus style={{ fontSize: '1.6em' }}/>,
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople style={{ fontSize: '1.6em' }}/>,
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaEnvelopeOpenText style={{ fontSize: '1.6em' }}/>,
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle style={{ fontSize: '1.6em' }}/>,
    }
]
