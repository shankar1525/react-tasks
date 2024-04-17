import React, { useMemo, useState } from "react";
import { SplitScreen } from "../split-screen";
const UseMemoHook = () => {
    return (
        <>
            <SplitScreen>
                <MemoComponent />
                <NonMemoComponent />
            </SplitScreen>
        </>
    )
}

const MemoComponent = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);
    const selectedItem = useMemo(()=>{
        return items.find((item) => item.isSelected);
    },[items]);
    return (
        <>
            <div>
                <h1>When we use use memo</h1>
                <h4>count : {count}</h4>
                <h4>select Item : {selectedItem?.id}</h4>
                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        </>
    )
}

const NonMemoComponent = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems)
    const selectedItem = items.find((item) => item.isSelected);
    return (
        <>
            <div>
                <h1>Ignored use memo</h1>
                <h4>count : {count}</h4>
                <h4>select Item : {selectedItem?.id}</h4>
                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        </>
    )
}

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 29_999_999
    }
}
)

export default UseMemoHook;