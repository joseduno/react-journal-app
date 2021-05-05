import Swal from 'sweetalert2'
import {db} from '../firebase/config'
import { fileUpload } from '../helpers/fileUpload'
import { loadNotes } from '../helpers/loadNotes'
import { types } from '../types/types'


export const startNewNote = () => {
    /* getState es una funcion similar al useSelector */ 
    return async(dispatch, getState) => {
        try {
            const {uid} = getState().auth
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
            }
            const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
            dispatch(activeNote(doc.id, newNote))
            dispatch(addNewNote(doc.id, newNote))
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})


export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {id, ...note}
})


export const startLoadingNotes = uid => {
    return async(dispatch) => {
        try {
            const notes = await loadNotes(uid)
            dispatch(setNotes(notes))
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const setNotes = notes => ({
    type: types.notesLoad,
    payload: notes
})


export const startSavingNote = note => {
    return async(dispatch, getState) => {
        try {
            const {uid} = getState().auth
            const noteToFirestore = {...note}
            delete noteToFirestore.id
            if (!noteToFirestore.url) {
                delete noteToFirestore.url
            }
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
            dispatch(refreshNote(note))
            /* Comentado porque en entorno de pruebas me salta un error
            No se hacer el mock del Swal */
            Swal.fire({
                icon: 'success',
                title: 'Saved!',
                text: note.title
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const refreshNote = note => ({
    type: types.notesUpdated,
    payload: note
})


export const startUploadingFile = file => {
    return async(dispatch, getState) => {
        try {
            const {active:activeNote} = getState().notes
            /* Comentado porque en entorno de pruebas me salta un error
            No se hacer el mock del Swal */
            Swal.fire({
                title: 'Uploading...',
                text: 'Please wait...',
                willOpen: () => {
                    Swal.showLoading()
                }
            })
            const fileUrl = await fileUpload(file)
            dispatch(startSavingNote({...activeNote, url: fileUrl}))
            /* Comentado porque en entorno de pruebas me salta un error
            No se hacer el mock del Swal */
            Swal.close()
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const startDeletingNote = id => {
    return async(dispatch, getState) => {
        try {
            const {uid} = getState().auth
            await db.doc(`${uid}/journal/notes/${id}`).delete()
            dispatch(noteDelete(id))
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const noteDelete = id => ({
    type: types.notesDelete,
    payload: id
})


export const logoutCleaning = () => ({
    type: types.notesLogoutCleaning
})