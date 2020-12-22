import React from 'react'
import Details from './components/details/Details'

import { Grid } from "@material-ui/core"
import useStyles from "./styles"
function App() {
    const classes = useStyles()

    return (
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height : '100vh' }} >
            <Grid item xs={12} sm={4} >
                <Details />
            </Grid>
            <Grid item xs={12} sm={4} >
                Main
            </Grid>
            <Grid item xs={12} sm={4} >
                <Details />
            </Grid>
        </Grid>
    )
}

export default App
