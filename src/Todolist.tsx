import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from './Todolist.module.css'
import {CheckBox} from "./CheckBox/CheckBox";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<null | string>(null)
    const [filterValue, setFilterValue] = useState<FilterValuesType>('all')

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError("Title is required")

        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }
    const onCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>, t: TaskType) => {
        let newIsDoneValue = e.currentTarget.checked
        props.changeTaskStatus(t.id, newIsDoneValue)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        setFilterValue("all")
        props.changeFilter(filterValue)
    };
    const onActiveClickHandler = () => {
        setFilterValue("active")
        props.changeFilter(filterValue)
    }
    const onCompletedClickHandler = () => {
        setFilterValue("completed")
        props.changeFilter(filterValue)
    };

    const changeIsDoneHandler = (id:string, isDone:boolean) => props.changeTaskStatus(id,isDone)

    const inputStyle = error ? s.error : ""

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={inputStyle}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={s.errorMessage}>{error}</div>}

        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    // const changeIsDoneHandler = (isDone:boolean) => props.changeTaskStatus(t.id,isDone)

                    return <li key={t.id} className={t.isDone ? s.isDone : ''}>
                        {/*universal component Checkbox*/}
                        <CheckBox isDone={t.isDone} callback={(isDone:boolean)=>changeIsDoneHandler(t.id, isDone)}/>
                        {/*<input type="checkbox" checked={t.isDone} onChange={(e) => onCheckBoxHandler(e, t)}/>*/}
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={filterValue === "all" ? s.activeFilter : ''} onClick={onAllClickHandler}>All</button>
            <button className={filterValue === "active" ? s.activeFilter : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={filterValue === "completed" ? s.activeFilter : ''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
