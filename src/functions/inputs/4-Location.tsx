import { useState } from "react"

export const Location = () => {
    const [located, setLocated] = useState('')

    const event4 = (e: any) => {
        setLocated(e.target.value.replace(/ /g, '+'))
    }

    
    return (
        <input type="text" onChange={event4} placeholder='Add Location' />
    )
}