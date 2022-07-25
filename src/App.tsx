import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterType = "All" | "Active" | "Completed"

function App() {

    let [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},//0
        {id: 2, title: "JS", isDone: true},//1
        {id: 3, title: "ReactJS", isDone: false},//2
        {id: 4, title: "ReactJS2222", isDone: false}
    ])

    const removeTask = (id: number) => {
        setTasks(tasks1.filter((el) => {
            return el.id !== id
        }));
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1} removeTask={removeTask} />
        </div>
    );
}

export default App;