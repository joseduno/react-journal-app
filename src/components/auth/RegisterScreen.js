import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch()

    /* useSelector: hook del react-redux utilizado para acceder a la 
    informacion del store (tal como se ve en la pestana state del 
    redux devtools) */
    const {msgError} = useSelector(state => state.ui)

    const [formValues, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formValues

    const handleSubmit = e => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false
        } else if (password !== password2 || !validator.isStrongPassword(password)) {
            dispatch(setError('Password is not valid'))
            return false
        }
        dispatch(removeError())
        return true
    }

    

    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <h3 className='auth__title'>Register</h3>
            <form onSubmit={handleSubmit}>
                {
                    msgError
                    &&
                    (<div className='auth__alert-error'>
                        {msgError}
                    </div>)
                }
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                    value={name}
                    onChange={handleChange}
                />
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
                <input
                    type='password'
                    placeholder='Confirm password'
                    name='password2'
                    className='auth__input'
                    value={password2}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                >
                    Sign in
                </button>

                <Link to='/auth/login' className='link'>
                    Already registered?
                </Link>

            </form>
        </div>
    )
}
