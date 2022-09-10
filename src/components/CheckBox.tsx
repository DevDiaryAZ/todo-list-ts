import React, {ChangeEvent, ChangeEventHandler} from 'react';

type PropsType = {
    callback: (checked: boolean) => void
    checked: boolean
}

export const CheckBox: React.FC<PropsType> = ({callback, checked}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.checked)
    }

    return <input type={"checkbox"}
                  checked={checked}
                  onChange={onChangeHandler}
    />
}