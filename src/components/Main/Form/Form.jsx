import React,{ useContext, useState } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem  } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

import { ExpenseTrackerContext } from "../../../context/context"
import useStyles from './styles'


const initialState = {
    category: "",
    amount: "",
    date: new Date(),
    type: "Income",
}

function Form() {
    const classes = useStyles()
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const [formData, setFormData] = useState(initialState)

    // console.log(formData);
    const submitTransaction = () =>{
        const transaction = {...formData , amount: Number(formData.amount), id: uuidv4() }
        addTransaction(transaction)
        setFormData(initialState)
    }

    return (
       <Grid container spacing={2}>
           <Grid item xs={12}>
               <Typography variant="subtitle2" align="center" gutterBottom >
                    ...
               </Typography>
           </Grid>

           <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
           </Grid>
           <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} >
                        <MenuItem value="Salary">Salary</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                    </Select>
                </FormControl>
           </Grid>

           <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
           </Grid>
           <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
           </Grid>

           <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={submitTransaction}>Create</Button>
       </Grid>
    )
}

export default Form
