import React from 'react'
import { A } from "hookrouter";
import { Menu } from "antd";
const MainMenu = () => {
    
    return (
        <Menu
          style={{ width: 199 }}
          defaultSelectedKeys={['1']}
          mode={'inline'}
          theme={'light'}
        >
        <Menu.Item key="1">
            <A href="/" icon={'home'} >Home</A>
        </Menu.Item>
        <Menu.Item key="2">
            <A href="/" icon={'file-multiple'} >Menu Item 2</A>
        </Menu.Item>
        <Menu.Item key="3">
            <A href="/chart" icon={'gift'}>Chart</A>
        </Menu.Item>    
        <Menu.Item key="4">
            <A href="/" icon={'bank'}>Menu Item 4</A>
        </Menu.Item>
        <Menu.Item key="5">   
            <A href="/service" icon={'cog'}>Services</A>
        </Menu.Item>     
            
        </Menu>
    )
}

export default MainMenu
