import React from "react";

type UniversalButton = {
    title:string
    callback: ()=> void
}

export const UniversalButton = (props:UniversalButton) => {
    const onClickHandler = () => {
        props.callback()
    }
    return <button onClick={onClickHandler}>
        {props.title}
    </button>
}