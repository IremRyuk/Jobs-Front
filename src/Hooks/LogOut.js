import { useDispatch } from "react-redux"
import { UserDataActClear } from "../Redux/action/UserDataAct"

export const LogOut = () => {
    const dispatch = useDispatch()
    
    const LogOutUser = () => {

        localStorage.removeItem('user')

        dispatch(UserDataActClear())
    }
    return {LogOutUser}
}