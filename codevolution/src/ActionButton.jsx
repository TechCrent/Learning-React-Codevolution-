export const ActionButton = ({text, onClick}) =>{
    return(
        <div>
            <button onClick={onClick} className="border border-slate-500 p-1 rounded-md text-slate-100">{text}</button>
        </div>
    )
}