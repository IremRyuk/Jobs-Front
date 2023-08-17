import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {UserDataAct} from '../Redux/action/UserDataAct'
export const SignUpHook = () => {
    // Status
    const [errors,setError] = useState(null)
    const [loading,setLoading] = useState(null)

    // Redux
    const dispatch = useDispatch()
    const SignUp = async (gmail,password) => {
        setLoading(true)
        setError(null)
        const response = await fetch('/users/signup', 
        {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({gmail,password})
        }
        )
        const json = await response.json()
        
        // Bad Request
        if(!response.ok){
            setLoading(false)
            setError(json.signUpErr)
        }

        // Good Request
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch(UserDataAct(json))
            setLoading(false)
        }
    }
    return {SignUp,loading,errors}
}
