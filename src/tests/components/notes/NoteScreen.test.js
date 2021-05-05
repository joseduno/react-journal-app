import { mount } from "enzyme"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { NoteScreen } from "../../../components/notes/NoteScreen"
import configureStore from 'redux-mock-store'
import { activeNote } from "../../../actions/notes"


jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {
    notes: {
        active: {
            id: 'testId',
            title: 'testTitle',
            body: 'testBody',
            date: 12341234
        }
    }
}
let store = mockStore(initialState)
store.dispatch = jest.fn()


describe('Pruebas en NoteScreen', () => {
    
    const wrapper = mount(
        <Provider store={store}>
            <NoteScreen />
        </Provider>
    )

    beforeEach(() => {
        store = mockStore(initialState)
        jest.clearAllMocks()
    })

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe disparrar el active note cuando se modifica una nota', () => {
        wrapper.find('input[name="title"]').simulate('change', {target: {
            name: 'title', value: 'new testTitle'
        }})
        expect(activeNote).toHaveBeenLastCalledWith('testId', {
            id: 'testId',
            title: 'new testTitle',
            body: 'testBody',
            date: 12341234
        })
    })
    
    


})
