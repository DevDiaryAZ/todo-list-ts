import React, {ChangeEvent} from "react";

type TypeCheckBox = {
    isDone: boolean,
    callback: (isDone:boolean)=>void
}


export const CheckBox = ({isDone, callback} : TypeCheckBox) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={isDone} onChange={onChangeHandler}/>
}