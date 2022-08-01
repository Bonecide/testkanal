import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Login from "../../components/Login/Login"

export default function LoginPage() {
    const navigate = useNavigate()
    let isAuth = useSelector((state) => state.auth.isAuth)
    useEffect(()=> {
        if(isAuth) {
            navigate('/')
        }
    },[isAuth])
    return(
        <div>
            <Login/>
        </div>
    )
}