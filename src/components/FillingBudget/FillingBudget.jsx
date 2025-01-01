import React,{ useEffect, useState, useContext } from "react"

function FillingBudget({budget,setBudget}) {

    function handleBudgetChange(e) {
        setBudget(e.target.value)
    }


    return(
        <div>
            <label htmlFor="budget-field">Enter your budget</label>
            <input type="number" id="budget-field" onChange={handleBudgetChange}/>
        </div>
    );
}

export default FillingBudget;