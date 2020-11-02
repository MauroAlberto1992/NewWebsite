import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './contacts.css';
import Grid from '@material-ui/core/Grid'


class Contact extends Component {
    render() {
        return (
            <div className="contactBody">
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                >
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <h2 className="title">Contact Me</h2>
                                <hr className="hr"/>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem className="item">
                                <i style={{color: "#bcbcbc", fontSize: '66px', paddingRight: '4.5rem'}} className="fa fa-phone-square"
                                   aria-hidden="true"/>911529327
                            </ListItem>
                            <ListItem className="item">
                                <i style={{color: "#bcbcbc",fontSize: '66px', paddingRight: '4rem'}} className="fa fa-envelope"
                                   aria-hidden="true"/>geral@maurocruzalberto.pt
                            </ListItem>
                            <ListItem className="item">
                                <i style={{color: "#bcbcbc",fontSize: '66px', paddingRight: '4.5rem'}} className="fa fa-skype"
                                   aria-hidden="true"/>mauro.alberto08</ListItem>
                        </List>
                    </Grid>
                </Grid>

            </div>

        )
    }
}

export default (Contact)