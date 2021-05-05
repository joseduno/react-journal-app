import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import useForm from '../../hooks/useForm'


export const LoginScreen = () => {

    const {loading} = useSelector(state => state.ui)

    /* Hook de react-redux para disparar acciones y que el 
    'store' se encargue de buscar el reducer adecuado */
    const dispatch = useDispatch()

    const [formValues, handleChange] = useForm({
        email: '',
        password: ''
    })
    const {email, password} = formValues

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))
    }

    /* el dispatch del custom hook de react-redux puede recibir funciones como 
    arguemntos que retornen un callback, el hook pasara la funcion 'dispatch' 
    como argumento a ese callback retornado, para que desde ese callback, pueda ser llamando 
    finalmente la accion (con su type y payload), ver 'actions/auth.js' */
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={loading}
                >
                    Login
                </button>

                <div className='auth__social-network'>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to='/auth/register' className='link'>
                    Create new account
                </Link>
            </form>
        </div>
    )
}
