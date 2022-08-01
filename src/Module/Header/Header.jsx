import s from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteAuth } from '../../store/AuthSlice';
export default function Header() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()
    return(
        <div className={s.header}>
            <div className={s.logo}>
                    <img className={s.logoDesktop} src="/img/logo.png" alt="" />
                    <img className={s.logoMobile} src="/img/logoMobile.png" alt="" />
            </div>
            <div>
                {isAuth && (
                    <div className={s.logout}>
                        <h2>
                            Admin
                        </h2>
                        <LogoutIcon onClick={() => dispatch(deleteAuth())} className={s.logoutIcon}/>
                    </div>
                )}
            </div>
        </div>
    )
}