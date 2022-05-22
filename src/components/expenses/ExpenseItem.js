import { Component} from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

class ExpenseItem extends Component {
    render() {
        return (
            <Card className="expense-item">
                <ExpenseDate date={this.props.date} />
                <div className="expense-item__description">
                    <h2>{this.props.title}</h2>
                    <div className="expense-item__price">{this.props.price}</div>
                </div>
            </Card>
        )
    }
}

export default ExpenseItem