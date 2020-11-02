import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
// Images
import cv from './img/CV.png';

import LandingPage from "./components/LandingPage/landingpage";
import Contacts from "./components/Contacts/contacts";
import Projects from "./components/Projects/projects";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const menuLink = {
    alignItems: "center",
    color: "#bcbcbc",
    display: "flex",
    fontSize: "16px",
    height: "100%",
    padding: "0 10px",
    textDecoration: "none",
    textTransform: "uppercase",
}

const CV = {
    alignItems: "center",
    color: "#bcbcbc",
    display: "flex",
    fontSize: "16px",
    fontWeight: 800,
    height: "100%",
    padding: "0 10px",
    textDecoration: "none",
    textTransform: "uppercase",
}

const linkActive = {
    borderTop: "4px solid #ffe66d",
    color: "#ffe66d",
    fontWeight: 700,
    paddingBottom: "4px",
}

const linkActiveProj = {
    borderTop: "4px solid #ffa69e",
    color: "#ffa69e",
    fontWeight: 700,
    paddingBottom: "4px",
}

const linkActiveContacts = {
    borderTop: "4px solid #9fc5ff",
    color: "#9fc5ff",
    fontWeight: 700,
    paddingBottom: "4px",
}

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            apiResponse: "",
            openDialogCv: false
        };
    }

    callAPI(){
        fetch("http:localhost:9000/testAPI")
            .then(res => {console.log("res", res); res.text()})
            .then(res => this.setState({apiResponse: res}));
    }
    componentDidMount(){
        this.callAPI()
    }
    // HANDLES!
    handleCv = () =>{
        this.setState({openDialogCv: true })
    }

    handleCloseCv = () =>{
        this.setState({openDialogCv: false })
    }

    handleDialogCv(){
        const {openDialogCv} = this.state
        return (
            <Dialog
                open={openDialogCv}
                onBackdropClick={this.handleCloseDialogRollUp}
                onClose={this.handleCloseCv}

            >
                <img
                    height={700}
                    width={496}
                    src={cv}
                    alt='cv'
                />
            </Dialog>
        )
    }


    render() {
        let width = window.innerWidth
        let height = window.innerHeight
        console.log("this.state.apiResponse",this.state.apiResponse)
        return (
            <Router>
                <div>
                    {this.handleDialogCv()}
                    <div className="container">
                            <h1 style={{margin: (width > 800 || height > 1100) ? null :  "auto" }} className={ (width > 800 || height > 1100) ? "header" : "cell"}>Mauro Alberto</h1>
                        {width > 800 || height > 1100 ?
                            <div className="menu__right ">
                                    <ul className="menu__list menu__list-item">
                                    <li>
                                        <NavLink to="/" exact style={menuLink} activeStyle=
                                            {linkActive }
                                        >Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/projects" exact style={menuLink} activeStyle=
                                            {linkActiveProj}
                                        >Projects</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contacts" exact style={menuLink} activeStyle=
                                            {linkActiveContacts}
                                        >Contacts</NavLink>
                                    </li>
                                    <li>
                                        <Button onClick={this.handleCv} style={CV}><b>CV</b>
                                        </Button>

                                    </li>
                                    </ul>
                            </div> : null}
                    </div>
                <Route path="/" exact strict component={LandingPage}/>
                <Route path="/projects" exact strict component={Projects}/>
                <Route path="/contacts" exact strict component={Contacts}/>
            </div>
            </Router>

        )
    }
}

export default App;