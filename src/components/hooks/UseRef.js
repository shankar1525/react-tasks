import React, { useEffect, useRef } from "react";

const UseRefHook = () => {
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return(
        <>
        <div>
            <h1>
                Use Ref
            </h1>
            <input ref={inputRef} placeholder="search something..." />
        </div>
        </>
    )
}

export default UseRefHook;