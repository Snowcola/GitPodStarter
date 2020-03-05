import React from 'react'
import { useState} from 'react'
import { Menu, Layout } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LaptopOutlined, 
    NotificationOutlined,
    PieChartOutlined,
    DesktopOutlined,
    TeamOutlined,
    FileOutlined
} from '@ant-design/icons'
import {Link} from 'react-router-dom'
const {Sider} = Layout
const {SubMenu} = Menu
function Nav(props) {
    const [collapsed, setCollapsed] = useState(false) 
    
    const onCollapse = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            > 
              <Menu.Item key="3"><Link to="/user/tom">Tom</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/user/bill'>Bill</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/user/alex'>Alex </Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <FileOutlined />
            </Menu.Item>
          </Menu>
        </Sider>
    );
}

export default Nav