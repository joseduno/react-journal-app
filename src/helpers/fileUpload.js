

export const fileUpload = async(file) => {

    const cloudURL = 'https://api.cloudinary.com/v1_1/dixkox8dy/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'react-journal-app')
    formData.append('file', file)

    try {
        const resp = await fetch(cloudURL, {method: 'POST', body: formData})

        if (resp.ok) {
            const data = await resp.json()
            return data.secure_url
        } else {
            return null
        }

    } catch (error) {
        throw error
    }
}