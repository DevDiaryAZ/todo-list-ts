import {TaskType} from "../Todolist";


export const tasksReducer = (state: Array<TaskType>, action: SuperType) => {
    // action - это объект с полем type
    switch (action.type) {
        case 'REMOVE-TASK' : {
            return state
        }
        default:
            return state
        // или console.log('Vse propalo!')
    }
}

// общий тип со всеми типами
type SuperType = RemoveTaskACType

// ReturnType - внутренняя функция реакта
type RemoveTaskACType = ReturnType<typeof removeTaskAC>

// Action Creator - функция, которая возвращает объект со свойством type
// распространенная ошибка не забудь про as const!!! чтобы type не типизировался как string
export const removeTaskAC = () => {
    return {
        type: "REMOVE-TASK"
    } as const
}