import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

//* start - 1:26 , Explaination: 1:34

// Let title = Income
//Transactions - [
//     {id:1,type:Income,category:Business,amount:50,date:date}
//     {id:2,type:Expense,category:pets,amount:100,date:date} 
//     {id:3,type:Income,category:Business,amount:50,date:date}
//     {id:4,type:Income,category:Salary,amount:80,date:date}
// ]
//After, transactionPerType  - [
//     {id:1,type:Income,category:Business,amount:50,date:date}
//     {id:3,type:Income,category:Business,amount:50,date:date}
//     {id:4,type:Income,category:Salary,amount:80,date:date}
// ]

// export const incomeCategories = [
//     { type: 'Business', amount: 0, color: incomeColors[0] },
//     { type: 'Investments', amount: 0, color: incomeColors[1] },
//     { type: 'Savings', amount: 0, color: incomeColors[7] },
//     { type: 'Rental income', amount: 0, color: incomeColors[8] },
//   ];
// After increamenting [
//     { type: 'Business', amount: 100, color: incomeColors[0] },
//     { type: 'Investments', amount: 0, color: incomeColors[1] },
//     { type: 'Salary', amount: 80, color: incomeColors[7] },
//     { type: 'Rental income', amount: 0, color: incomeColors[8] },
//   ];

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const transactionPerType = transactions.filter((t) => t.type === title )
    // Reduce explanation - https://www.youtube.com/watch?v=tVCYa_bnITg
    const total = transactionPerType.reduce((acc,currentValue) => {
        return acc += currentValue.amount
    }, 0);
    const categories = title === "Income" ? incomeCategories : expenseCategories;         
    
    console.log({transactionPerType, total, categories});

    // Finding categories which the matches the transaction category type and increamenting there values
    transactionPerType.forEach(t => {
        const category = categories.find(c => c.type === t.category)

        if(category){
            category.amount += t.amount
        }
    });

    // All categories that have amount more than 0 
    const filteredCategories = categories.filter(c => c.amount > 0)

    // https://www.chartjs.org/docs/latest/getting-started/usage.html
    // https://www.npmjs.com/package/react-chartjs-2
    const chartData = {
        datasets: [{
            data: filteredCategories.map(c => c.amount),
            backgroundColor: filteredCategories.map(c => c.color),
        }],
        labels: filteredCategories.map(c => c.type)
    };

    return { total, chartData  }
}

export default useTransactions