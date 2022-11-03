import { useState } from "react"

export const Start = () => {
    const [date1, setDate1] = useState('')
    const [time1, setTime1] = useState('')

    const event2 = (e: any) => {
        setDate1(e.target.value.replace(/-/g, ''))
    }

    const event2t = (e: any) => {
        var t2 = e.target.value.replace(/:/g, '') + '00'
        setTime1(t2)
    }

    
    return (
        <div>
            <h3>Starts from</h3>
            <div className="smaller">
                <input type="date" onChange={event2} />

                <input type="time" onChange={event2t} />
                {/* {error && <p className="error">Time cannot be in the past</p>} */}
            </div>

        </div>
    )
}
