import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type AddItemFormType = {
    todolistId: string
    callback: (title: string) => void
}

export const AddItemForm: React.FC<AddItemFormType> = ({
                                                           todolistId,
                                                           callback,
                                                       }) => {

    let [title, setTitle] = useState<string>("")
    let [error, setError] = useState<string | null>(null)

    const addTaskLocal = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            callback(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            callback(title);
        }
    }

    return <div>
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
        <button onClick={addTaskLocal}>+</button>
        {error && <div className="error-message">{error}</div>}
    </div>
}