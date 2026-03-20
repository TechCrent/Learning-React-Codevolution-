export const Alert = ({children}) =>{
    return(
        <div className="flex justify-center items-center m-2">
            <div className=" border border-green-500 rounded-md p-2 bg-green-500 text-black">
            {children}
            </div>
        </div>
    )
}