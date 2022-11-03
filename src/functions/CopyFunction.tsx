import { LinkBuild } from "./LinkBuild";


export const CopyFunction = () => {

    // Copy Function
    function copy() {
        navigator.clipboard.writeText(LinkBuild);
        document.getElementById('copyBtn')!.innerHTML = 'Copied!';
        setTimeout(() => {
            document.getElementById('copyBtn')!.innerHTML = 'Copy Link <i class="fa-regular fa-copy"></i>';
        }, 2000);
    }

    return (
        <div className="flex-row row2">
            <button onClick={copy} className="greenn" id="copyBtn">Copy Link <i className="fa-regular fa-copy"></i></button>
            <a href={LinkBuild} target={"_blank"} rel="noreferrer" className="btn-accent bluee">Open it <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    )
}