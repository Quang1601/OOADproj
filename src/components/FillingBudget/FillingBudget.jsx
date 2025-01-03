import React,{ useEffect, useState, useContext } from "react"
import './FillingBudget.css';

function FillingBudget({budget,setBudget}) {

    function handleBudgetChange(e) {
        setBudget(e.target.value)
        if (e.target.value === "") {
            setBudget(10000000000)
        }
    }


    return(
        <div>
            <label htmlFor="budget-field">Enter your budget:</label>
            <input type="number" id="budget-field" onChange={handleBudgetChange}/>
        </div>
    );
}

export default FillingBudget;