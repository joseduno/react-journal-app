import { useState } from "react";

const useForm = (initialState={}) => {
    
    const [formValues, setFormValues] = useState(initialState);

    const reset = (newFormState=initialState) => setFormValues(newFormState)

    const handleChange = ({target}) => {setFormValues({
        ...formValues,
        [target.name]: target.value
    })}

    return [formValues, handleChange, reset]

}

export default useForm;
