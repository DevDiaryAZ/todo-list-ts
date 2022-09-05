import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    title: string,
    callback: (newTitle: string) => void
}


export const EditableSpan: React.FC<PropsType> = ({title, callback}) => {
    const [edit, setEdit] = useState(false)
    let [localTitle, setLocalTitle] = useState<string>(title)

    const toggleHandler = () => {
        setEdit(!edit);
        addTextFromSpan();
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalTitle(e.currentTarget.value)
    }

    const addTextFromSpan = () => {
        callback(localTitle);
    }

    return edit ? <input value={localTitle} onBlur={toggleHandler} autoFocus={true} onChange={onChangeHandler}/> :
        <span onDoubleClick={toggleHandler}>{title}</span>
}