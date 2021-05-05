import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSavingNote, startUploadingFile } from '../../actions/notes'
import moment from 'moment'


export const NotesAppBar = () => {

    const {active:note} = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const handleSaveClick = () => {
        dispatch(startSavingNote(note))
    }

    const handlePictureClick = () => {
        document.querySelector('#inputPicture').click()
    }

    const handleFileChange = ({target}) => {
        const file = target.files[0]
        if (file) {
            dispatch(startUploadingFile(file))
        }
    }

    return (
        <div className='notes__appbar'>
            <span>{moment().format('LL')}</span>
            <div>
                <input
                    id='inputPicture'
                    type='file'
                    name='file'
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
                <button className='btn' onClick={handlePictureClick}>Picture</button>
                <button className='btn' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}
