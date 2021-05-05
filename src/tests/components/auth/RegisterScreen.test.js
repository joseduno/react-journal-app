import { mount } from "enzyme"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import { startRegisterWithEmailPasswordName } from "../../../actions/auth"
import { RegisterScreen } from "../../../components/auth/RegisterScreen"


jest.mock('../../../actions/auth', () => ({
    startRegisterWithEmailPasswordName: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
    ui: {
        msgError: null
    }
}
let store = mockStore(initialState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
)


describe('Pruebas en componente <RegisterScreen />', () => {

    beforeEach(() => {
        store = mockStore(initialState)
        jest.clearAllMocks()
    })

    test('Debe hacer match con el snapshot ', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe iniciar el proceso de registro con email password y name', () => {
        wrapper.find('input[name="name"]').simulate('change', {target: {
            name: 'name',
            value: 'test'
        }})
        wrapper.find('input[name="email"]').simulate('change', {target: {
            name: 'email',
            value: 'test@test.com'
        }})
        wrapper.find('input[name="password"]').simulate('change', {target: {
            name: 'password',
            value: 'Test123-,.'
        }})
        wrapper.find('input[name="password2"]').simulate('change', {target: {
            name: 'password2',
            value: 'Test123-,.'
        }})
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(startRegisterWithEmailPasswordName).toHaveBeenCalledWith(
            'test@test.com', 'Test123-,.', 'test'
        )
    })

    test('Debe mostrar alerta de error', () => {
        const initialState = {
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        }
        const store = mockStore(initialState)
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        )
        const divError = wrapper.find('.auth__alert-error')
        expect(divError.exists()).toBe(true)
        expect(divError.text().trim()).toBe('Email no es correcto')
    })
    
    
    
})
