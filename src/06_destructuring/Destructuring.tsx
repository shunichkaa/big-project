import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string,
    man: ManType
}

function useDimychState = (m: string) => {
    return [m, function() {}]
}
function useDimychState2(m: string) {
    return {
        message: m,
        setMessage: function() {}
    }
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const [message, setMessage] = useState("hello")

    return (<div>
        <h1>{props.title}</h1>
        <hr/>
        <div>
            {props.man.name}
        </div>
    </div>)
}
const [message, setMessage] = useState("hello")