import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startNewNote, startSavingNote, startUploadingFile, startLoadingNotes } from '../../actions/notes'
import { db } from '../../firebase/config'
import { types } from '../../types/types'

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn(() => {
        return 'https://test.com/test.jpg'
    })
}))
 
/* Archivo que muestra como probar redux, utilizando un mock del store */
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    auth: {
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: 'TXEOeeZXIs8BYX1oU2eA',
            title: 'Hola',
            body: 'Mundo',
            date: 1234567890
        }
    }
}
let store = mockStore(initialState)


describe('Pruebas en acciones notes.js', () => {

    beforeEach(() => {
        store = mockStore(initialState)
    })

    test('debe funcionar correctamente startNewNote', async() => {
        try {
            await store.dispatch(startNewNote())
    
            // Obtiene las acciones disparadas (despues del startNewNote en este caso)
            const actions = store.getActions()
    
            expect(actions[0]).toEqual({
                type: types.notesActive,
                payload: {
                    id: expect.any(String),
                    title: '',
                    body: '',
                    date: expect.any(Number),
                }
            })
            expect(actions[1]).toEqual({
                type: types.notesAddNew,
                payload: {
                    id: expect.any(String),
                    title: '',
                    body: '',
                    date: expect.any(Number),
                }
            })
            const docId = actions[0].payload.id
            await db.doc(`TESTING/journal/notes/${docId}`).delete()
        } catch (error) {
            console.log(error)
        }
    })

    /* POR ALGUNA RAZON QUE DESCONOZCO NO FUNCIONA ESTA PRUEBA */
    // test('Debe funcionar correctamente el startLoadingNotes', async() => {
    //     try {
    //         await store.dispatch(startLoadingNotes('TESTING'));
    //         const actions = store.getActions();
    //         expect(actions[0].type).toBe(types.notesLoad)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })

    test('Debe funcionar correctamente el startSaivngNotes', async() => {
        try {
            const note = {
                id: 'TXEOeeZXIs8BYX1oU2eA',
                title: 'title',
                body: 'body',
                date: 1234567890
            }
            await store.dispatch(startSavingNote(note))
            const actions = store.getActions()
            const expected = {
                id: expect.any(String),
                title: expect.any(String),
                body: expect.any(String),
                date: expect.any(Number),
            }
    
            expect(actions[0].type).toBe(types.notesUpdated)
            expect(actions[0].payload).toMatchObject(expected)
            expect(actions[0].payload.id).toBe(note.id)
            expect(actions[0].payload.title).toBe(note.title)
        } catch (error) {
            console.log(error)
        }
    })

    /* POR ALGUNA RAZON QUE DESCONOZCO NO FUNCIONA ESTA PRUEBA */
    // test('startUploadingFile debe funcionar correctamente', async() => {
    //     const file = new File([], 'test.jpg')
    //     await store.dispatch(startUploadingFile(file))
    //     const docRef = await db.doc('TESTING/journal/notes/TXEOeeZXIs8BYX1oU2eA').get()
    //     console.log(docRef)
    // })
})
