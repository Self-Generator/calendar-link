import { Name } from "./inputs/1-Name"
import { Start } from "./inputs/2-Start"
import { End } from "./inputs/3-End"
import { Location } from "./inputs/4-Location"
import { Details } from "./inputs/5-Details"
import { Recur } from "./inputs/6-Recur"

export const Compilation = () => {
    return (
        <div>
            <Name />
            <Start />
            <End />
            <Location />
            <Details />
            <Recur />
        </div>
    )
}