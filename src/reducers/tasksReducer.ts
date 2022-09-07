import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer = (state: Array<TaskType>, action: SuperType) => {
    // action - это объект с полем type
    switch (action.type) {
        case "REMOVE-TASK" : {
            return state.filter(t => t.id != action.payload.id)
        }
        case "ADD-TASK" : {
            let task = {id: v1(), title: action.payload.title, isDone: false};
            return [task, ...state]
        }
        default:
            return state
        // или console.log('Vse propalo!')
    }
}

// общий тип со всеми типами
type SuperType = RemoveTaskACType | addTaskACType

// ReturnType - внутренняя функция реакта
type RemoveTaskACType = ReturnType<typeof removeTaskAC>

// Action Creator - функция, которая возвращает объект со свойством type
// распространенная ошибка не забудь про as const!!! чтобы type не типизировался как string
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        // по правилам хорошего тона
        payload: {id}
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: {title}
    } as const
}