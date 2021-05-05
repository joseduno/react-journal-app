import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"


describe('Pruebas en el authReducer', () => {

    const testUser = {
        uid: '123456789',
        displayName: 'test'
    }

    test('Debe retornar el state por defecto', () => {
        const state = authReducer()
        expect(state).toEqual({})
    })

    test('Debe retornar un uid y displayName despues de loguearse', () => {
        const state = authReducer({}, {
            type: types.login,
            payload: testUser
        })
        expect(state.uid).toBe('123456789')
        expect(state.name).toBe('test')
    })

    test('Debe retornar un objeto vacio al hacer logout', () => {
        const state = authReducer(testUser, {
            type: types.logout
        })
        expect(state).toEqual({})
    })
    
})
