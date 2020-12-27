import React from 'react'

function InfoCard() {
    // 0 - False , 1 - True
    const isIncome = Math.round(Math.random())
    
    return (
        <div style={{ textAlign: 'centre', padding: '0 10%'}} >
            Try Saying: <br />
            Add {isIncome ? "Income " : "Expense "} 
            for ${isIncome ? "100 " : "50 "} 
            in Category {isIncome ? "Salary " : "Food "} 
            for {isIncome ? "Monday " : "Sunday "} ...
        </div>
    )
}

export default InfoCard
