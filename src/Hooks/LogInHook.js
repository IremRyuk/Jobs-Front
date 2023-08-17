import {useDispatch} from 'react-redux'
import {useState} from 'react'
import { UserDataAct } from '../Redux/action/UserDataAct'



export const LogInHook = () => {

const dispatch = useDispatch()
const [errors,setError] = useState(null)



const logInUser = async (gmail,password) => {
    const response = await fetch('https://jobs-2dwq.onrender.com/users/login',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({gmail,password})
    })

    const json = await response.json()

    if(!response.ok){
        setError(json.LoginErrMsg)
    }
    if(response.ok){
        localStorage.setItem('user',JSON.stringify(json))
        dispatch(UserDataAct(json))
        console.log(json)
    }
}

return {logInUser,errors}


}