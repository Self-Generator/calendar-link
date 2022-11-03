import { Compilation } from "../functions/Compilation"
import { CopyFunction } from "../functions/CopyFunction"

export const Form = () => {
    return (
        <div className="contactForm pushDown200">
            <h1>Get Calendar Link <i className="fa-regular fa-calendar"></i> </h1>

            <Compilation />

            <CopyFunction />
        </div>
    )
}
