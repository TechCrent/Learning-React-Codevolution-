export const ContactForm =() => {
    return(
        <>
        <form action="" className="flex-box">
            <label htmlFor="">Name:</label>
            <input className="my-5 ml-2" type="text" placeholder="Your Name"/>
            <br />
            <label htmlFor="">Email:</label>
            <input className="mb-2 ml-2" type="text" placeholder="Your Email"/>
        </form>
        </>
    )
}