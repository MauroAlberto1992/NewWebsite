import React, {Component, Fragment} from 'react';

//Pictures / Logos
import mauroAlberto from './../img/mauroAlberto.jpeg';
import rollup from './../img/Roll-upV6_sm.png';
//import medium from './../img/Logos/medium.png';
import logoEvo from './../img/Logos/logoEvodeck.png';
import logoLinhas from './../img/Logos/logoBlack_semfundo - cópia.png';
import logoAlfr from './../img/Logos/logoalfr.png';
import logoHex from './../img/Logos/logo.png';
import cv from './../img/CV.png';

//Components
import Button from "@material-ui/core/Button/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/es/Typography/Typography";


// Styles
import {withStyles} from "@material-ui/core/styles/index";

const CV = {
    alignItems: "center",
    border: "3px solid #ffe66d",
    color: "#ffe66d",
    //display: "flex",
    fontSize: "23px",
    fontWeight: 800,
    padding: "20px 10px",
    marginBottom: "10px",
    textDecoration: "none",
    textTransform: "uppercase",
}

const styles = theme => ({
    avatarImgCell: {
        borderRadius: '50%',
        border: '5px solid #bcbcbc',
        height: "150px",
        margin: "2em 0em"
    },
    bannerText: {
        backgroundColor: '#323334',
        width: '100%',
        opacity: 0.8,
        borderRadius: 10
    },
    bannerTextHr: {
        borderTop: '5 dotted  #ffa31a',
        width: '50%',
        margin: 'auto'
    },
    card: {
        maxWidth: 280,
        height: 120,
    },
    contactBody: {
        margin: 'auto',
        background: '#323334',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingTop: '2em'
    },
    hr: {
        borderTop: '5px dotted white',
        width: '50%',
        margin: 'auto'
    },
    landingGrid: {
        background: '#323334',
        textAlign: 'center',
        width: '100%',
        height: '100%'
    },
    media: {
        height: 140,
    },
    pgraph: {
        fontFamily: 'Oxygen',
        fontWeight: 'bold',
        margin: 'auto',
        width: '75%',
        paddingTop: '1em'
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginRight: "25px"
    },
    title: {
        fontFamily: 'Anton',
        color: 'white',
        marginBottom: 20
    },


})

class Cellphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialogCv: false,
            openDialogRollUp: false
        };
    }


    // handles
    handleCloseDialogRollUp = () => {
        this.setState({openDialogRollUp: false })
    }

    handleDialogRollUp(){
        const {openDialogRollUp} = this.state
        return (
            <Dialog
                open={openDialogRollUp}
                onBackdropClick={this.handleCloseDialogRollUp}
                onClose={this.handleCloseDialogRollUp}

            >
                <img
                    src={rollup}
                    alt='Roll Up'
                />
            </Dialog>
        )
    }

    handleDialogCv(){
        const {openDialogCv} = this.state
        return (
            <Dialog
                open={openDialogCv}
                onBackdropClick={this.handleCloseCv}
                onClose={this.handleCloseCv}

            >
                <img
                    height={350}
                    width={248}
                    src={cv}
                    alt='cv'
                />
            </Dialog>
        )
    }

    handleOpenDialogRollUp = () =>{
        this.setState({openDialogRollUp: true })
    }

    handleCv = () =>{
        this.setState({openDialogCv: true })
    }

    handleCloseCv = () =>{
        this.setState({openDialogCv: false })
    }


    classLanding = () => {
        const {classes} = this.props
        return (
            <Fragment>
                    <img
                        src={mauroAlberto}
                        alt='Mauro Alberto'
                        className={classes.avatarImgCell}
                    />
                <div className={classes.bannerText}>
                    <Grid item>
                        <h1 className="bannerTextHone">Full Stack Web Developer</h1></Grid>
                    <Grid item>
                        <hr className={classes.bannerTextHr}/>
                    </Grid>
                    <Grid item><p className="bannerTextP">HTML/CSS | Javascript | React | Python | Django |
                        Squarespace | Wordpress | Photoshop</p></Grid>
                    <div className={classes.socialLinks}>
                        <Grid item>
                            <a href="https://www.linkedin.com/in/mauro-alberto-6501744b/" rel="noopener noreferrer"
                               target="_blank">
                                <i style={{color: '#ffe66d', fontSize: '4em', padding: 8}}
                                   className="fa fa-linkedin" aria-hidden={"true"}/>
                            </a></Grid>
                        <Grid item><a href="https://github.com/MauroAlberto1992" rel="noopener noreferrer"
                                      target="_blank">
                            <i style={{color: '#ffe66d', fontSize: '4em', padding: 8}} className="fa fa-github"
                               aria-hidden={"true"}/>
                        </a></Grid>
                        <Grid item><a href="https://medium.com/@mauro_alberto_08" rel="noopener noreferrer"
                                      target="_blank">
                            <i style={{color: '#ffe66d', fontSize: '4em', padding: 8}} className="fa fa-medium"
                               aria-hidden={"true"}/>
                        </a></Grid>
                    </div>
                </div>
            </Fragment>)
    }

    classProject = () => {
        const {classes} = this.props
        return (
    <Fragment>
        <Grid item>
            <Grid item>
                <h1 className="bannerTextHone" style={{marginTop: 75, marginBottom: 50}}>Projectos</h1>
            </Grid>
            <a href="http://www.hex.com.pt/realestatedevelopment/" rel="noopener noreferrer"
               target="_blank">
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={logoHex}
                        style={{
                            backgroundColor: 'black',
                            height: '120px',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                        title="HEX"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5"  component="h2">
                            <b>HEX</b>
                        </Typography>

                        <Typography component="p">
                            A HEX tem uma equipa de engenheiros experientes que irão encontrar a melhor
                            e mais acessível solução para qualquer problema.
                            <br/>Os engenheiros da HEX são proficientes em todos os traços de engenharia<br/>IoT,
                            design, quintas inteligentes e energias renováveis.
                            <br/>Com Engenheiros Civis, Electrotécnicos e Mecânicos nas nossas fileiras,
                            estamos preparados para ajudar os nossos clientes nas conquistas dos seus
                            objectivos.
                        </Typography>
                    </CardContent></CardActionArea>
            </Card></a>
        </Grid>
        <div  style={{height: 50}}/>
        <Grid item >
            <a href="https://www.linhas3d.pt/" rel="noopener noreferrer" target="_blank">
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={logoLinhas}
                        style={{
                            backgroundColor: 'black',
                            height: '120px',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                        }}
                        title="Linhas 3D"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>Linhas 3D</b>
                        </Typography>
                        <Typography component="p">
                            As cozinhas, roupeiros e casas de banho têm uma vertente comercial complexa,
                            que deriva da execução do projecto por medida:<br/>
                            Retificação dimensional em obra, montagem faseada, inclusão de equipamentos
                            acessórios e tampos, sendo em si mesma uma área de serviços especializadas.
                            Desta realidade surge a empresa Linhas 3D, que conta com uma equipa com mais
                            de 20 anos de Know-How e experiência na região.
                        </Typography>
                    </CardContent>
</CardActionArea>
            </Card></a></Grid>
            <div  style={{height: 50}}/>
        <div onClick={this.handleOpenDialogRollUp}>
            <Card className={classes.card} >
                <CardMedia
                    className="media cardMediaEvodeck"
                    image={logoEvo}
                    title="Evodeck GeekSessions"
                    style={{backgroundSize: "auto", height: '120px', width: "280px"
                    }}

                />
            </Card>
        </div>
        <div  style={{height: 50}}/>
        <Grid item> <a href="http://www.alfr-alentejo.uevora.pt/" rel="noopener noreferrer" target="_blank">
            <img
                src={logoAlfr}
                alt="ALFR Alentejo"
                className="alfr"/>
        </a></Grid>
    </Fragment>)}

    classContact =()=> {
        const {classes} = this.props
        return <Fragment>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <h1 className="bannerTextHone" style={{marginTop: 75}}>Contactos</h1>
                        <hr className={classes.hr} style={{marginBottom: 25}}/>
                    </Grid>
                </Grid>
                <List>
                    <Button onClick={this.handleCv} style={CV}><b>CV</b>
                    </Button>
                    <div  style={{height: 30}}/>
                    <ListItem className="item" style={{fontSize: 20}}>
                        <i style={{color: "white", fontSize: '18px', paddingRight: '1.5rem', paddingLeft: '1.2rem'}} className="fa fa-phone-square"
                           aria-hidden="true"/><span style={{color: "white"}}>911529327</span>
                    </ListItem>
                    <ListItem className="item" style={{fontSize: 20}}>
                        <i style={{color: "white", fontSize: '18px', paddingRight: '1.2rem', paddingLeft: '1.2rem'}} className="fa fa-envelope"
                           aria-hidden="true"/><span style={{color: "white"}}>geral@maurocruzalberto.pt</span>
                    </ListItem>
                    <ListItem className="item" style={{fontSize: 20}}>
                        <i style={{fontSize: '18px', paddingRight: '1.5rem', color: "white", paddingLeft: '1.2rem'}} className="fa fa-skype"
                           aria-hidden="true"/><span style={{color: "white"}}>mauro.alberto08</span></ListItem>
                </List>
            </Grid>
            <div  style={{height: 30}}/>
        </Fragment>

    }



    render() {
        const {classes} = this.props
        return (
            <Grid container
                  direction="column"
                  alignItems={"center"}
                  alignContent={"center"}
                  className={classes.landingGrid}>
                {this.handleDialogCv()}
                {this.handleDialogRollUp()}
                {this.classLanding()}
                {this.classProject()}
                {this.classContact()}

            </Grid>)

}
}


export default withStyles(styles, {withTheme: true})(Cellphone);