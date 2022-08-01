import s from './Login.module.scss'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { setAuth } from '../../store/AuthSlice'
export default function Login() {
    const [login,setLogin] = useState()
    const [password,setPassword] = useState()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (login === 'admin' && password ==='admin') {
            dispatch(setAuth())
        }
    }
    return(
        <div className={s.login}>   
                <div className={s.form}>
                    <div>
                        <h1>Autorization</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                            <div>
                                <h2>login</h2>
                                <input value={login} onChange={(e) => setLogin(e.target.value)} type='text' />
                            </div>
                            <div>
                                <h2>password</h2>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                            </div>
                            <div className={s.button}>
                                <button type='submit'>Login</button>
                            </div>
                    </form>
                </div>
        </div>
    )
    }