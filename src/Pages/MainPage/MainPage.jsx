
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CardList from '../../components/CardList/CardList';
export default function MainPage() {
    const navigate = useNavigate()
    let isAuth = useSelector((state) => state.auth.isAuth)
    useEffect(()=> {
        if(!isAuth) {
            navigate('/login')
        }
    },[isAuth])

    return(
        <div>
            <CardList/>
        </div>
    )
}