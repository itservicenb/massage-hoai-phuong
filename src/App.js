import React, { Component } from 'react';
import './App.css';

//MDL components needed
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Hoai Phuong Massage" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/booking">Booking</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Pages">
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/booking">Booking</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
