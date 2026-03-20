export const UserDetails = ({name, isOnline, hideOffline}) => {
   
    if(hideOffline && !isOnline){
        return null;
    }

   
    return(
        <div className="flexbox">
            <h3 className="text-xl p-2">{name}</h3>
            {isOnline ? 
                <div>
                    <span className="pb-2 text-green-100">Status: Online</span>
                    <p>Available</p>
                    <button className="border px-2 py-1 rounded-md">Send Message</button>
                </div>
            :
                <div>
                    <span className="pb-2 text-red-100">Status: Offline</span>
                    <p>Not Available</p>
                    <p>Check back later</p>
                </div>
            }
        </div>
    )

}