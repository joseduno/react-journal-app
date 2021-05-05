import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth"
import { types } from "../../types/types"
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'


/* Archivo que muestra como probar redux, utilizando un mock del store */
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {}
let store = mockStore(initialState)

describe('Pruebas en las acciones del auth.js', () => {

    beforeEach(() => {
        store = mockStore(initialState)
    })

    test('Las acciones login y logout deben funcionar correctamente', () => {
        const loginAction = login('TEST', 'TEST')
        const logoutAction = logout()

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid: 'TEST',
                displayName: 'TEST'
            }
        })
        expect(logoutAction).toEqual({type: types.logout})
        
    })

    test('Debe iniciar el logout y disparar las acciones respectivas', async() => {
        await store.dispatch(startLogout())
        const actions = store.getActions()
        expect(actions[0]).toEqual({type: types.logout})
        expect(actions[1]).toEqual({type: types.notesLogoutCleaning})
    })
    
    test('Debe loguearse correctamente y disparar las acciones respectivas', async() => {
        await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'))
        const actions = store.getActions()
        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'fvqMd5WZl1h8RucnfGmcob9f7n02',
                displayName: null
            }
        })
    })
    
    
})
