import { useState } from "react"

export const UserDashboard = ({isPremium}) => {

    const[count, setCount] = useState(0);
    const[credits, setCredits ] = useState(100);

    if(!isPremium){
        return <div>Upgrade to Premium to see credits</div>
    }

    return(
        <>
            <div>
                <p>You have {credits} credits</p>
                <button onClick={ () => {
                    setCredits(credits-1);
                    setCount(count+1);
                    }}>Spend</button>
                <p>You have spent{count} of your credits</p>
            </div>
        </>
    )
}