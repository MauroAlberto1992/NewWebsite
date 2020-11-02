import React, {Component} from 'react';
import './landingpages.css';
// Images
import mauroAlberto from './../../img/mauroAlberto.jpeg';
//import medium from './../../img/Logos/medium.png';

import Cellphone from "./../cellphone";


class LandingPage extends Component {

    containerDesktop = () => {
        return(
            <div className="landingGrid">
                    <img
                        src={mauroAlberto}
                        alt='Mauro Alberto'
                        className="avatarImg"/>
                <div className="bannerText">
                        <h1 className="bannerTextHone" >Full Stack Web Developer</h1>
                        <hr className="bannerTextHr"/>
                  <p className="bannerTextP">HTML/CSS | Javascript | React | Python | Swift |
                        Squarespace | Wordpress | Photoshop</p>
                    <div className="socialLinks">
                            <a href="https://www.linkedin.com/in/mauro-alberto-6501744b/" rel="noopener noreferrer"
                               target="_blank">
                                <i style={{color: '#ffe66d', fontSize: '4em', padding: 8}}
                                   className="fa fa-linkedin" aria-hidden={"true"}/>
                            </a>
                       <a href="https://github.com/MauroAlberto1992" rel="noopener noreferrer"
                                      target="_blank">
                            <i style={{color: '#ffe66d', fontSize: '4em', padding: 8}} className="fa fa-github"
                               aria-hidden={"true"}/>
                        </a>
                        <a href="https://medium.com/@mauro_alberto_08" rel="noopener noreferrer"
                           target="_blank">
                            <i style={{color: '#ffe66d', fontSize: '4em', padding: 8}} className="fa fa-medium"
                               aria-hidden={"true"}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let width = window.innerWidth
        let height = window.innerHeight
        return (
            width > 800 || height > 1100 ?
                 this.containerDesktop()
                    :  <Cellphone />)}
    }


export default LandingPage