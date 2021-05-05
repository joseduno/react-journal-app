import { act } from "@testing-library/react"
import { mount } from "enzyme"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import { AppRouter } from "../../routers/AppRouter"
import { firebase } from '../../firebase/config'
import { login } from "../../actions/auth"


jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        notes: [],
        active: {
            id: 'asd123',
            title: '',
            body: '',
            date: 123456
        }
    }
}
const store = mockStore(initialState)
store.dispatch = jest.fn()  // Tiene que estar defino el store como variable LET!!!


describe('Pruebas en AppRouter', () => {

    test('Debe de llamar al login si estoy autenticado', async() => {
        // When testing, code that causes React state updates should be wrapped into act(...)
        await act( async() => {
            await firebase.auth().signInWithEmailAndPassword('test@testing.com', '123456')
            mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            )
        })

        // expects siempre fuera de los ACT sobre todo si tiene promesas involucradas
        expect(login).toHaveBeenCalledWith('fvqMd5WZl1h8RucnfGmcob9f7n02', null)

    })

})
