import React from 'react'
import { Card, CardHeader, CardContent, Typography , Grid, Divider } from "@material-ui/core";

import useStyles from  "./styles"
function Main() {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography variant="h5" align="center">Total Balance $200</Typography>
                <Typography varian="subtitle1" styles={{ lineHeight : '1.5rem' , marginTop : '20px' }} >
                    {/* InfoCard */}
                    Try Saying: Add income for $100 in Category Salary for Monday ...
                </Typography>
                <Divider className={classes.divider} />
                {/* Form  */}
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* <List /> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
