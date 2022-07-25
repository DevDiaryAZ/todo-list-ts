import React, {useState} from 'react';
import {FilterType} from "./App";


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id:number) => void
}

export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<FilterType>('All')

    let filteredTasks = props.tasks;

    if(filter === "Active"){
        filteredTasks = props.tasks.filter((el) => {
            return !el.isDone
        })
    }
    if(filter === "Completed"){
        filteredTasks = props.tasks.filter((el) => {
            return el.isDone
        })
    }

    const filterTask = (buttonName:FilterType) => {
        setFilter(buttonName)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasks.map((el, index) =>
                <li key={index}>
                    <button onClick={() => {
                        props.removeTask(el.id)
                    }}>X
                    </button>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>
            )}
        </ul>
        <div>
            <button onClick={()=>{filterTask("All")}}>All</button>
            <button onClick={()=>{filterTask("Active")}}>Active</button>
            <button onClick={()=>{filterTask("Completed")}}>Completed</button>
        </div>
    </div>

}