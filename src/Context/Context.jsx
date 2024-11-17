import { useState, useEffect, createContext } from "react"


export const MyContext = createContext(null)

function GlobalState({ children }) {

    const [user, setUser] = useState("hadysafa");
    const [userData, setUserData] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");
    const [submit,setSubmit] = useState(false);


    async function getUserData(user) {
        try {
            console.log(user)
            setPending(true);
            console
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) throw new Error("User Not Found!");
            const data = await response.json();
            if (data) {
                setPending(false);
                setSubmit(false)
                setUserData(data)
            }
        }
        catch (error) {
            setPending(false);
            setSubmit(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        if(submit){
            setError("")
            getUserData(user);
        }
    },[submit])



    return (

        <MyContext.Provider value={{
                userData, error,pending,setSubmit,setUser
        }}>
            {children}
        </MyContext.Provider>

    );

}


export default GlobalState