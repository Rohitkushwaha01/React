import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card'

const Newexpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        props.onAddExpense(enteredExpenseData);
    }

    return (
        <Card className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </Card>
    )
}

export default Newexpense;