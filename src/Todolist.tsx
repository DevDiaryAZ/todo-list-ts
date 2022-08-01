import React, {ChangeEvent, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {UniversalButton} from "./components/UniversalButton";

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
    addTask: () => void
    setInputValue: (value: string) => void
    inputValue: string
}


export function Todolist(props: PropsType) {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.currentTarget.value)
    }

    const onChangeCheckBoxHandler = () => {
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') props.addTask()
    }

    const allChangeFilterHandler = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                onChange={(event) => {
                    onChangeInputHandler(event)
                }}
                value={props.inputValue}
                onKeyDown={(event) => handleKeyPress(event)}
                // ref={inputEl}
            />
            <UniversalButton callback={props.addTask} title={"+"}/>
            {/*<button onClick={*/}
            {/*    props.addTask*/}
            {/*}>+*/}
            {/*</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return (<li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={() => {
                            onChangeCheckBoxHandler()
                        }}/>
                        <span>{t.title}</span>
                        <UniversalButton callback={() => {
                            removeTaskHandler(t.id)
                        }} title={"x"}/>
                        {/*<button onClick={() => {*/}
                        {/*    removeTaskHandler(t.id)*/}
                        {/*}}>x*/}
                        {/*</button>*/}
                    </li>)
                })
            }
        </ul>
        <div>
            <UniversalButton callback={() => allChangeFilterHandler("all")} title={"All"}/>
            <UniversalButton callback={() => allChangeFilterHandler("active")} title={"Active"}/>
            <UniversalButton callback={() => allChangeFilterHandler("completed")} title={"Completed"}/>
            {/*<button onClick={() => allChangeFilterHandler("all")}>*/}
            {/*    All*/}
            {/*</button>*/}
            {/*<button onClick={() => allChangeFilterHandler("active")}>*/}
            {/*    Active*/}
            {/*</button>*/}
            {/*<button onClick={() => allChangeFilterHandler("completed")}>*/}
            {/*    Completed*/}
            {/*</button>*/}
        </div>
    </div>
}
