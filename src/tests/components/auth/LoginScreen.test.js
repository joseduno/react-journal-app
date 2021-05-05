import { mount } from "enzyme"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { LoginScreen } from "../../../components/auth/LoginScreen"
import configureStore from 'redux-mock-store'
import { MemoryRouter } from "react-router-dom"
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth"


jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn(),
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
    ui: {
        loading: false,
        msgError: null
    }
}
let store = mockStore(initialState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        {/* Memory router se utiliza en entornos de pruebas para poder renderizar 
        links que son llamados dentro de otros componentes */}
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en <LoginScreen />', () => {

    beforeEach(() => {
        store = mockStore(initialState)
        // Por buena practica se recomienda limpiar los mocks
        jest.clearAllMocks()
    })

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe disparar la accion de login con Google', () => {
        wrapper.find('.google-btn').simulate('click')
        expect(startGoogleLogin).toHaveBeenCalled()
    })

    test('Debe disparar la accion de login con email y password', () => {
        wrapper.find('input').at(0).simulate('change', {target: {
            name: 'email',
            value: 'test'
        }})
        wrapper.find('input').at(1).simulate('change', {target: {
            name: 'password',
            value: 'test'
        }})
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(startLoginEmailPassword).toHaveBeenCalledWith('test', 'test')
    })
    
    
})
