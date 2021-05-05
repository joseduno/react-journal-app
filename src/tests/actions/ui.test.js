import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types"


describe('Pruebas en ui acciones', () => {

    test('todas las acciones deben funcionar', () => {
        const setErrorAction = setError('test error')
        const removeErrorAction = removeError()
        const startLoadingAction = startLoading()
        const finishLoadingAction = finishLoading()
        expect(setErrorAction).toEqual({
            type: types.uiSetError,
            payload: 'test error'
        })
        expect(removeErrorAction).toEqual({type: types.uiRemoveError})
        expect(startLoadingAction).toEqual({type: types.uiStartLoading})
        expect(finishLoadingAction).toEqual({type: types.uiFinishLoading})
    })
    
})
