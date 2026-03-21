export const CustomButton = () =>{

        const handleClick =() => {
            alert("Thanks for clicking!")
        }

    
    return(
        <div className="flexbox">
            <button onClick={handleClick} className="border border-slate p-1 mt-5 rounded-md">Button</button>
        </div>
    );
}