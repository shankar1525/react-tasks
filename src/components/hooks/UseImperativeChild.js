import React,{useState,useImperativeHandle, forwardRef} from "react";
import styles from './index.module.css'
const ChildComponent = (props, ref) => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    useImperativeHandle(ref, ()=>({ reset }))
    return (
        <>
            <div>
                <h3>Count : {count}</h3>
                <button className={styles.button} onClick={increment} >Increment</button>
                <button className={styles.button} onClick={decrement} >Decrement</button>
            </div>
        </>
    )
}

export default forwardRef(ChildComponent);