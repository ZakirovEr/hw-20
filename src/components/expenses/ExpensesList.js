import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
import Card from '../UI/Card'
import { Component } from 'react'

class ExpensesList extends Component {
    render() {
        if (this.props.expenses.length === 0) {
            return <h2 className="expenses-list__fallback">No expense Found.</h2>;
          }
        return (
            <Card className='expenses-list'>
                {this.props.expenses.map(element => {
                    return <ExpenseItem
                        date={element.date}
                        title={element.title}
                        price={element.amount}
                        key={element.id} />
                })}
            </Card>
        )
    }
}

export default ExpensesList