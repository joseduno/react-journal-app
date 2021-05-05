import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeNote, startDeletingNote } from '../../actions/notes'
import useForm from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'


export const NoteScreen = () => {

    const dispatch = useDispatch()
    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleChange, reset] = useForm(note)
    const {title, body, url} = formValues

    /*Cuando el cambio en una variables (eg note) no ejecuta otras partes del codigo 
    (eg useForm(note)), conviene crear una referencia y efectos secundarios para 
    poder hacer notar los cambios donde se necesiten, como se muestra a continuacion*/
    const activeId = useRef(note.id)
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, formValues))
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeletingNote(note.id))
    }
    
    return (
        <div className='notes__main-content animate__animated animate__fadeIn animate__faster'>
            <NotesAppBar />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                    name='title'
                    value={title}
                    onChange={handleChange}
                />

                <textarea
                    placeholder='what happened today?'
                    className='notes__textarea'
                    name='body'
                    value={body}
                    onChange={handleChange}
                >
                </textarea>

                {
                    url
                    &&
                    <div className='notes__image'>
                        <img
                            src={`${url}`}
                            alt='imagen'
                            name='url'
                        />
                    </div>
                }
            </div>
            <button className='btn btn-danger' onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}
