import { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

class NewExpense extends Component {
    addData = (expenseData)=>{
        this.props.onAddDataToArray(expenseData)
    }
    render() {
        return (
            <div className='new-expense'>
                <ExpenseForm onAddData={this.addData}/>
            </div>
        )
    }
}

export default NewExpense