import React, { useImperativeHandle, useRef, useState,forwardRef } from "react";
import styles from './index.module.css'
import UseImperativeChild from "./UseImperativeChild";

const UseImperativeHandleHook = () => {
    const resetButtonRef = useRef();
    return (
        <>
            <div>
                <h1>Use Imperative Handle Hook</h1>
                <button className={styles.button} onClick={() => resetButtonRef.current?.reset()} >Reset</button>
                <UseImperativeChild ref={resetButtonRef} />
            </div>
        </>
    )
}
export default UseImperativeHandleHook;
