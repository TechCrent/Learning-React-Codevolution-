import { ActionButton } from "./ActionButton"

export const Newsletter = () => {
    
    const handleSubscribe = () =>{
        alert('Subscribed')
    }

    return(
        <div className="mb-10">
            <h2>Subscribe to Newsletter</h2>
            <ActionButton text="Subscribe" onClick={handleSubscribe}/>
        </div>
    )
}