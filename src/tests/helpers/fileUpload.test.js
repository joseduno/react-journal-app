import { fileUpload } from "../../helpers/fileUpload"
import cloudinary from 'cloudinary'


// Usando el SDK de cloudinary (similar a una API) para hacer las pruebas de carga de archivos
cloudinary.config({ 
    cloud_name: 'dixkox8dy', 
    api_key: '388279744725116', 
    api_secret: 'k8nfNicv1v81JFhej7HnskMFNAE' 
  });


describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar una url ', async() => {
        const resp = await fetch('data:image/jpeg;base64,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')
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')
        const url = await fileUpload(file)
        // Hay que borrar el archivo creado en cloudinary para evitar que se acumulen estos archivos
        const segments = url.split('/')
        const imageId = segments[segments.length-1].replace('.jpg', '')
        await cloudinary.v2.api.delete_resources(imageId, {}, ()=>{});
        
        expect(typeof url).toBe('string')
    })

    test('Debe de retornar null cuando no se carga un archivo ', async() => {

        const file = new File([], 'foto.png')
        const url = await fileUpload(file)
        expect(url).toBe(null)

    })
})
