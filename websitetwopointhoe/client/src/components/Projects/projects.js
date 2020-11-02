import React, { Component} from 'react'
import {Tabs, Tab} from 'react-mdl'
import './projects.css';

// Images
import logoEvo from '../../img/Logos/logoEvodeck.png';
import logoLinhas from '../../img/Logos/logoBlack_semfundo - cópia.png';
import logoAlfr from '../../img/Logos/logoalfr.png';
import logoHex from '../../img/Logos/logo.png';
import rollUp from '../../img/Roll-upV6_sm.png';

// Components
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/es/Typography/Typography";


class Projects extends Component {
   constructor(props){
        super(props);
        this.state={
            activeTab: 0,
            openDialogRollUp: false,
        };
    }


    handleOpenDialogRollUp = () =>{
       this.setState({openDialogRollUp: true })
    }
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
                       src={rollUp}
                       alt='Roll Up'
                      />
           </Dialog>
       )
    }


    toggleCategories() {
        if (this.state.activeTab === 0){
            return (
                <div className="projectsGrid">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media cardMedia"
                                        image={logoLinhas}
                                        title="Linhas 3D"
                                        style={{backgroundSize: "contain"}}
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <b>Linhas 3D</b>
                                        </Typography>
                                        <Typography component="p">
                                            As cozinhas, roupeiros e casas de banho têm uma vertente comercial complexa, que deriva da execução do projecto por medida:<br/>
                                            Retificação dimensional em obra, montagem faseada, inclusão de equipamentos acessórios e tampos, sendo em si mesma uma área de serviços especializadas.
                                            Desta realidade surge a empresa Linhas 3D, que conta com uma equipa com mais de 20 anos de Know-How e experiência na região.
                                        </Typography>
                                    </CardContent>

                                    <a href="https://www.linhas3d.pt/" rel="noopener noreferrer"  target="_blank">
                                        <Button className="buttonCard"><b>LINK</b>
                                        </Button>
                                    </a>
                                </CardActionArea>
                            </Card></Grid></Grid>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="projectsGrid">
                    {this.handleDialogRollUp()}
                    <Grid item>
                        <Card className="cardEvodeck">
                            <CardMedia
                                className="media cardMediaEvodeck"
                                image={logoEvo}
                                title="Evodeck GeekSessions"
                                style={{backgroundSize: "auto"}}
                            />

                            <CardContent  style={{ height: "100px" }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <b>Roll Up</b>
                                </Typography>
                                <Typography component="p">
                                    O Roll Up representativo da empresa<br/>
                                </Typography>
                            </CardContent>
                            <Button onClick={this.handleOpenDialogRollUp} className="buttonCard"><b>LINK</b>
                            </Button>
                        </Card>
                    </Grid>
                </div>

                    )
        }
        if (this.state.activeTab === 2){
            return (
                <div className="projectsGrid">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media cardMedia"
                                        image={logoAlfr}
                                        title="Alfr Alentejo"
                                        style={{backgroundSize: "contain"}}
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <b>ALFR Alentejo</b>
                                        </Typography>
                                        <Typography component="p">
                                            O projeto AFLR-Alentejo tem como objetivo central o desenvolvimento da tecnologia Advanced Linear Fresnel Reflector para a produção de eletricidade despachável a preço competitivo.<br/>
                                            Este projeto visa a modelação, instalação, operação e análise de um protótipo de concentrador solar ALFR para produção de eletricidade por via termossolar e acoplá-lo a sistemas de armazenamento térmico com misturas de sais fundidos.
                                        </Typography>
                                    </CardContent>

                                    <a href="http://www.alfr-alentejo.uevora.pt/" rel="noopener noreferrer"  target="_blank">
                                        <Button className="buttonCard"><b>LINK</b>
                                        </Button>
                                    </a>
                                </CardActionArea>
                            </Card></Grid></Grid>
                </div>
            )
        }
        else  {
            return (
                <div  className="projectsGrid">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        style={{backgroundSize: "contain"}}
                                        className="media cardMedia"
                                        image={logoHex}
                                        title="HEX"
                                    />

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <b>HEX</b>
                                        </Typography>

                                        <Typography component="p">
                                            A HEX tem uma equipa de engenheiros experientes que irão encontrar a melhor e mais acessível solução para qualquer problema.
                                            <br/>Os engenheiros da HEX são proficientes em todos os traços de engenharia<br/>IoT, design, quintas inteligentes e energias renováveis.
                                            <br/>Com Engenheiros Civis, Electrotécnicos e Mecânicos nas nossas fileiras, estamos preparados para ajudar os nossos clientes nas conquistas dos seus objectivos.
                                        </Typography>
                                    </CardContent>
                                    <a href="http://www.hex.com.pt/realestatedevelopment/" rel="noopener noreferrer"  target="_blank">
                                        <Button className="buttonCard"><b>LINK</b>
                                        </Button></a></CardActionArea>
                            </Card></Grid>
                    </Grid>

                </div>
            )
        }

    }

    render () {
        return (
             <div>
                <Tabs className="mainTab" activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab style={{color: "#323334",
                        fontWeight: "bold"}}>Squarespace</Tab>
                    <Tab style={{color: "#323334",
                        fontWeight: "bold"}}>Wordpress</Tab>
                    <Tab style={{color: "#323334",
                        fontWeight: "bold"}}>Bootstrap</Tab>
                    <Tab style={{color: "#323334",
                        fontWeight: "bold"}}>Photoshop</Tab>
                </Tabs>
                 <div className="categoryTabs">
                    <Grid>

                        <div >{this.toggleCategories()}</div >
                    </Grid>
                </div>
            </div>

        )
    }
}

export default Projects