import { useState } from "react"

export const UserProfile = () =>{
    const [user, setUser] = useState({
        name: "Ciici Crentsil",
        age: "20",
        email: "crent@gmail.com",
        address: {
            city: "Kumasi",
            country: "Ghana"
        }
    });

    const updateName = () =>{
        setUser({
            ...user,
            name: "Simon"
        });
    };

    const updateAge = () =>{
        setUser({
            ...user,
            age: 18
        });
    };

    const updateMultiple = () =>{
        setUser({
            ...user,
            name: "Daniel",
            age: 22,
        })
    }

    const updateCity = () =>{
        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Accra",
            },
        })
    }
    
    return(
        <>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Country: {user.address.country}</p>
            <button onClick={updateName}>Change name to Simon</button>
            <button onClick={updateAge}>Change age to 18</button>
            <button onClick={updateMultiple}>Change name and age</button>
            <button onClick={updateCity}>Move City</button>
        </>
    )
}