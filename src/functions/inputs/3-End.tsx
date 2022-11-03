import { useState } from "react"

export const End = () => {
    const [date2, setDate2] = useState('')
    const [time2, setTime2] = useState('')

    const event3 = (e: any) => {
        setDate2(e.target.value.replace(/-/g, ''))
    }

    const event3t = (e: any) => {
        var t3 = e.target.value.replace(/:/g, '') + '00'
        setTime2(t3)
    }


    return (
        <div>
            <h3>Ends on</h3>
            <div className="smaller">
                <input type="date" onChange={event3} />

                <input type="time" onChange={event3t} />
                {/* {error && <p className="error">Time cannot be in the past</p>} */}
            </div>
        </div>
    )
}