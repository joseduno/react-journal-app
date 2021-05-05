import { mount } from "enzyme"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { JournalEntry } from "../../../components/journal/JournalEntry"
import configureStore from 'redux-mock-store'
import { activeNote } from "../../../actions/notes"


jest.mock("../../../actions/notes", () => ({
    activeNote: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {}
let store = mockStore(initialState)
store.dispatch = jest.fn()


describe('Pruebas en el componente JournalEntry.js', () => {

    const entry = {
        id: 'testId',
        title: 'testTitle',
        body: 'testBody',
        date: 12341234,
        url: 'testUrl'
    } 

    const wrapper = mount(
        <Provider store={store}>
            <JournalEntry {...entry} />
        </Provider>
    )

    beforeEach(() => {
        store = mockStore(initialState)
        jest.clearAllMocks()
    })

    test('Debe mostrarse correctametne', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe hacer dispatch de activeNote', () => {
        wrapper.find('.journal__entry').simulate('click')
        expect(activeNote).toHaveBeenCalledWith(entry.id, {
            title: entry.title,
            body: entry.body,
            date: entry.date,
            url: entry.url,
        })
    })
})
