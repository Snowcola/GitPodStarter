import React from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'antd/dist/antd.css'
import Nav from './features/nav/Nav'
import {Layout, Menu, Breadcrumb} from 'antd'
import { BrowserRouter as Router, Route, Switch, Link, withRouter, useLocation } from 'react-router-dom'
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
const { Header, Sider, Content, Footer} = Layout
const { SubMenu} = Menu

function App1() {
    return (
        <Router>
            <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
        </Router>
    )
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Router>
        <Nav />
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                <Crumbs style={{ margin: '16px 0' }}/>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path="/user/tom">
                        <Tom/>
                    </Route>
                    <Route path="/user/bill">
                        <Bill/>
                    </Route>
                    <Route path="/user/alex">
                        <Alex/>
                    </Route>
                </Switch>

                </div>
            </Content>
            </Layout>
        </Router>
      </Layout>
  );
}

const Crumbs = ({style}) => {
    const location = useLocation()
    console.log(location.pathname)
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const additionalBreadCrumbs = pathSnippets.map((s, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{capitalize(s)}</Link>
                </Breadcrumb.Item>
        )
    })
    const bredcrumbItems = [
        <Breadcrumb.Item key="Home">
            <Link to='/'>Home</Link>
        </Breadcrumb.Item>, ].concat(additionalBreadCrumbs)
    return <Breadcrumb style={style}>{additionalBreadCrumbs}</Breadcrumb>
}


const Bill = () => {
    return (<div>
        <h2>Bill</h2>
        </div>)
}
const Tom = () => {
    return(<div>
<h2>Tom</h2>
    </div>)
        
}
const Alex = () => {
    return (<div>
        <h2>Alex</h2>
        </div>)
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default App;
