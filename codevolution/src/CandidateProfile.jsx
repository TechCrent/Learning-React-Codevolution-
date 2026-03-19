export const CandidateProfile = () =>{
    const name = "Ciici Crentsil";
    const role = "Software Architect";
    const experience = 30;
    const isAvailable = true;

    return(
        <>
            <h2 className="mt-5">{name}</h2>
            <p>
                {role} with {experience} years of experience
            </p>
            <p>Started in {2026 - experience}</p>
            <p>Status: {isAvailable ? "Available for hire":"Not Available"}</p>
            <p>Contact: {name.toLowerCase().replace(" ","")}@email.com</p>
        </>
    );
}