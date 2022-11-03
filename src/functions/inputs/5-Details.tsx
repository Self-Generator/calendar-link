import { useState } from "react"

export const Details = () => {
    const [details, setDetails] = useState('')

    const event5 = (e: any) => {
        setDetails(e.target.value.replace(/ /g, '+'))
    }


    return (
        <input type="text" onChange={event5} placeholder='Details' />
    )
}