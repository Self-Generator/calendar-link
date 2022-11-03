import { useState } from "react"

export const Name = () => {
    const [text, setText] = useState('')

    const event1 = (e: any) => {
        setText(e.target.value.replace(/ /g, '+'))
    }


    return (
        <input type="text" onChange={event1} placeholder='Event Name' />
    )
}