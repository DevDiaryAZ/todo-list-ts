import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {
    // constants
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Orange", isDone: false},
            {id: v1(), title: "Apple", isDone: false},
            {id: v1(), title: "Water", isDone: false},
        ]
    });

    function removeTask(todolistID: string, id: string) {
        let filteredTasks = tasks[todolistID].filter(t => t.id !== id);

        // setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== id)});
        setTasks({...tasks, [todolistID]: filteredTasks});
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]});
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {

        setTasks({
            ...tasks,
            [todolistID]: [...tasks[todolistID].map(el => el.id === taskId ? {...el, isDone: isDone} : el)]
        });
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        let filterTodolists = todolists.map(el => (el.id === todolistID) ? {...el, filter: value} : el);

        setTodolists(filterTodolists)
    }

    function onClickDeleteTodolist(todolistID: string) {
        setTodolists(todolists.filter(el => el.id !== todolistID))
        delete tasks[todolistID]
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                }

                return (
                    <Todolist key={el.id}
                              todolistID={el.id}
                              title={el.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={el.filter}
                              onClickDeleteTodolist={onClickDeleteTodolist}
                    />
                )
            })}
        </div>
    );
}

export default App;
