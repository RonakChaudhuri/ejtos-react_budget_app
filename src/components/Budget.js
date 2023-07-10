import React, { useContext, useEffect, useState } from "react";
import { AppContext, MAXIMUM_BUDGET } from '../context/AppContext';
const Budget = () => {
    const { budget, totalExpenses, expenses, currency } = useContext(AppContext);
    const [value, setValue] = useState(budget);

    useEffect(() => {
        setValue(budget);
      }, [budget]);

    const handleChange = (event) => {
        if(value > MAXIMUM_BUDGET) {
            alert("The value cannot exceed £20,000");
            setValue(MAXIMUM_BUDGET);
            return;
        }
        console.log(totalExpenses);
        if( value < expenses){
            alert("You cannot reduce the budget value lower than the spending");
            setValue(budget);
            return;
        }
        setValue(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                step={10}
                value={value}
                //style={{ marginLeft: '2rem' , size: 10}}
                onChange={handleChange}>
            </input>
        </div>
    );
};
export default Budget;
