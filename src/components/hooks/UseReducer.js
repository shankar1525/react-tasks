import React, { useReducer, useState } from "react";
import styles from './index.module.css';

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(dispatcher, {
        count: 0,
        error: null
    });
    function dispatcher(state, action) {
        const {type} = action;
        switch(type) {
            case "increment": {
                const updateCount = state.count + 1;
                const errorCheck = updateCount > 5 ? true : false;
                return {
                    ...state,
                    count: errorCheck ? state.count : updateCount,
                    error: errorCheck ? "you have reached max value limit" : null
                }
            }
            case "decrement": {
                const updateCount = state.count - 1;
                const errorCheck = updateCount < 0 ? true : false;
                return {
                    ...state,
                    count: errorCheck ? state.count : updateCount,
                    error: errorCheck ? "you have reached max value limit" : null
                }
            }
            default:
                return state;
        }
    }
return(
    <>
    <div>
        <h1>Use Reducer Hook</h1>
        <h3>Count : {state.count}</h3>
        <p className={styles.error} >{state.error? state.error:""}</p>
        <button className={styles.button} onClick={()=>dispatch({type:'increment'})} >Increment</button>
        <button className={styles.button} onClick={()=>dispatch({type:'decrement'})} >Decrement</button>
    </div>
    </>
)
}

export default UseReducerHook;