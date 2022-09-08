import {FilterValuesType, TodolistType} from "../App";

export const todolistReducer = (state: Array<TodolistType>, action: SuperType) => {
    switch (action.type) {
        case'CHANGE-TODOLIST-FILTER':
            return state.map(tl => tl.id === action.payload.todolistId ? {...tl, filter: action.payload.value} : tl)
        case'REMOVE-TODOLIST':
            return (state.filter(tl => tl.id != action.payload.todolistId))
        case'ADD-TODOLIST':
            let newTodolist: TodolistType = {
                id: action.payload.newTodolistId,
                title: action.payload.title,
                filter: 'all'
            }
            return ([...state, newTodolist]);
        case'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.payload.todolistId ? {...tl, title: action.payload.title} : tl)
        default:
            return state
    }
}

type SuperType = ChangeFilterACType | RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType

type ChangeFilterACType = ReturnType<typeof changeFilterAC>

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>

type AddTodolistACType = ReturnType<typeof addTodolistAC>

type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeFilterAC = ( todolistId: string, value: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {todolistId, value }
    } as const
}

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId}
    } as const
}

export const addTodolistAC = (newTodolistId: string, title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {newTodolistId, title}
    } as const
}
export const changeTodolistTitleAC = (todolistId: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {todolistId, title}
    } as const
}
