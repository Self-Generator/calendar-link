import { useState } from "react"

export const Recur = () => {
    const [date7, setDate7] = useState('')
    const [time7, setTime7] = useState('')
    const [visibility, setVisibility] = useState(false)

    const event7 = (e: any) => {
        setDate7(e.target.value.replace(/-/g, ''))
    }

    const event7t = (e: any) => {
        var t7 = e.target.value.replace(/:/g, '') + '00'
        setTime7(t7)
    }

    const show = () => {
        setVisibility(!visibility)
    }

    return (
        <div>
            {visibility ?
                <div>
                    <button onClick={show} className="flex-row redd">Non Recurring <i className="fa-sharp fa-solid fa-xmark"></i></button>
                    <h3>Recurring ends on</h3>
                    <div className="smaller">
                        <input type="date" onChange={event7} />
                        <input type="time" onChange={event7t} />
                        {/* {error && <p className="error">Time cannot be in the past</p>} */}
                    </div>
                </div>
                : <button onClick={show} className="flex-row yelloww">Recurring <i className="fa-solid fa-repeat"></i></button>
            }
        </div>
    )
}