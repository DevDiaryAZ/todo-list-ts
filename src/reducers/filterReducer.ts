import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: SuperType) => {
    switch (action.type) {
        case "CHANGE-FILTER" : {
            return action.payload.value
        }
        default:
            return state
    }
}

type SuperType = changeFilterACType

type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {value}
    } as const
}