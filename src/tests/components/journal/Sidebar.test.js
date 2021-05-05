import { mount } from "enzyme"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { Sidebar } from "../../../components/journal/Sidebar"
import configureStore from 'redux-mock-store'
import { startLogout } from "../../../actions/auth"
import { startNewNote } from "../../../actions/notes"


jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn()
}))
jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
    auth: {
        name: 'test'
    },
    notes: {
        notes: []
    }
}
let store = mockStore(initialState)
store.dispatch = jest.fn()


describe('Pruebas en <Sidebar />', () => {

    beforeEach(() => {
        store = mockStore(initialState)
        jest.clearAllMocks()
    })

    const wrapper = mount(
        <Provider store={store}>
            <Sidebar />
        </Provider>
    )
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe llamar el logout', () => {
        wrapper.find('button').simulate('click')
        expect(startLogout).toHaveBeenCalled()
    })
    
    test('Debe llamar el startNewNote', () => {
        wrapper.find('.journal__new-entry').simulate('click')
        expect(startNewNote).toHaveBeenCalled()
    })
    
})
