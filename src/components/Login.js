import React from 'react'
import '../css/login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        //auth
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            }).catch((e) => alert(e.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
                    alt='gmail logo' />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
