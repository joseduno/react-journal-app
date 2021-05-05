import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from "../firebase/config"
import { types } from "../types/types"
import { logoutCleaning } from './notes'
import { finishLoading, startLoading } from "./ui"



/* inicio de sesion con firebase */
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())
        // No entiendo este return, se usa para que las pruebas funciones, pero no entiendo por que
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading())
            })
            .catch(({message}) => {
                Swal.fire('', message, 'error')
                dispatch(finishLoading())
            })
    }
}


/* inicio de sesion con google */
export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                const {uid, displayName} = user
                dispatch(login(uid, displayName))
            })
            .catch(({message}) => {
                Swal.fire('', message, 'error')
            })
    }
}

/* registro con firebase */
export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        // para registrar
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) => {

                // para actualizar datos
                await user.updateProfile({
                    displayName: name
                })
                dispatch(login(user.uid, user.displayName))
            })
            .catch(({message}) => {
                Swal.fire('', message, 'error')
            })
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        // para cerrar sesion
        try {
            await firebase.auth().signOut()
            dispatch(logout())
            dispatch(logoutCleaning())
        } catch ({message}) {
            Swal.fire('', message, 'error')
        }
    }
}

/* Estas son funciones que retornan acciones!, las anteriores son funciones para 
procesar informacion y posteriormente con un dispatch, ejecutar funciones que retornan 
una accion */
export const login = (uid, displayName) => ({
    type: types.login, 
    payload: {
        uid,
        displayName
    }
})

export const logout = () => ({
    type: types.logout
})