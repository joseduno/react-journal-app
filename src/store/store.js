/* Este archivo sirve de guia para cualquier store, ya que tiene configurador 
el redux dev tools y el applyMiddleware, usado para gestionar las peticiones 
asincronas, recordadno que el ciclo de trabajo en redux, debe ser síncrono 
entre el dispatcher y los cambios de estados */


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    // a traves de las claves de este objeto se accede a lo que tiene el store almacenado
    // utilizando el hook useSelector
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
})

/* createStore solo recibe un reducer, para pasar varios, se unifican todos los necesarios
en uno solo con la funcion combineReducers como se muestra en las lineas previas */

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);