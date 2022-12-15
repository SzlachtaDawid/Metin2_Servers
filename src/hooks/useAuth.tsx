import  { useContext } from "react";
import AuthContext from "../context/authContext";

export default function useAuth(): [boolean, (isAuthenticated: boolean, tokenData: any) => void] {
    const authContext = useContext(AuthContext);
    const auth: boolean = authContext.isAuthenticated;
    const setAuth: (isAuthenticated: boolean, tokenData: any) => void = (isAuthenticated, tokenData) =>  {
        if(isAuthenticated){
            authContext.login()
            window.localStorage.setItem('token-data', JSON.stringify(tokenData))
        } else {
            authContext.logout()
            window.localStorage.removeItem('token-data')
        }
    }

    return [auth, setAuth];
}