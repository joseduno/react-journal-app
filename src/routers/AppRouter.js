import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    /* Se usa para mantener el state aunque actualice la página, ya que firebase 
    mantiene informacion de la sesión */
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
                await dispatch(startLoadingNotes(user.uid))
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch])

    if (checking) {
        return <h1>Wait...</h1>
    }

    /*When true, will only match if the path matches the location.pathname exactly
    path	location.pathname	exact	matches?
    /one	/one/two	true	no
    /one	/one/two	false	yes*/
    return (
        <Router>
            <div>
                <Switch>
                    {/* Las rutas publicas son utiles para redireccionar aunque estes logueado, 
                    impide que entres a la pagina del login cuando estas autenticado*/}
                    <PublicRoute path='/auth' component={AuthRouter} isAuthenticated={isLoggedIn}/>
                    {/* Las rutas privadas obligan al usuario a estar autenticado para visualizarlas */}
                    <PrivateRoute exact path='/' component={JournalScreen} isAuthenticated={isLoggedIn}/>
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
