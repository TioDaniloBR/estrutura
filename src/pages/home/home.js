import React from "react";
import { Container } from "react-bootstrap";

import Router from "../../utils/routes";

const Home = ()=>{
    return(
        <>
           <Base />
        </>
    );
}

const Base = ()=>{
    return(
        <Container>
            <Header />
            <MiddleRow />
        </Container>
    );
}

const Header = ()=>{
    return(
       <div className="navbar">
           <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Company Name</a>
           <div className="form-group mb-0 col-md-8">
                <input className="form-control w-100" type="text" placeholder="Search" aria-label="Search"></input>
           </div>
           <button type="button" className="btn btn-primary">Login</button>
       </div>
    );
}

const MiddleRow = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <Menu />
                <Body />
            </div>
        </div>
    );
}

const Menu = ()=>{
    return(
        <nav className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/page2'>Page2</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


const Body = ()=>{
    return(
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <Router />
        </main>
    );
}

export default Home;