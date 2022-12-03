import  { useContext } from "react";
import AuthContext from "../context/authContext";

export default function useAuth(): (boolean | ((value: boolean) => void))[] {
    const authContext = useContext(AuthContext);
    const auth: boolean = authContext.isAuthenticated;
    const setAuth: (value: boolean) => void = (value) =>  {
        if(value){
            authContext.login()
        } else {
            authContext.logout()
        }
    }

    return [auth, setAuth];
}