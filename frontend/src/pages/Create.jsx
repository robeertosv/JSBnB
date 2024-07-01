import '../styles/create.scss'

//title, address, description, esApartamento, price, services, photo
const Create = () => {

    const handler = async (e) => {
        e.preventDefault();
    
        // Obteniendo valores del formulario
        const title = document.querySelector('#title').value;
        const address = document.querySelector('#address').value;
        const description = document.querySelector('#description').value;
        let esApartamento = document.querySelector('#type').value === 'flat'; // Asumiendo que 'flat' es un valor posible
        const price = document.querySelector('#price').value;
        const maxPeople = document.querySelector('#maxPeople').value;
        let services = document.querySelector('#services').value.split(', ');
        const photo = document.querySelector('#photo').files[0]; // El archivo seleccionado por el usuario
    
        // Crear un objeto FormData para enviar los datos del formulario incluyendo el archivo
        const formData = new FormData();
        formData.append('title', title);
        formData.append('address', address);
        formData.append('description', description);
        formData.append('esApartamento', esApartamento);
        formData.append('price', price);
        formData.append('maxPeople', maxPeople);
        formData.append('services', JSON.stringify(services)); // Convertir el array a un string JSON
    
        // Añadir el archivo de la foto si existe
        if (photo) {
            formData.append('photo', photo);
        }
    
        // Enviar el FormData al servidor
        try {
            let res = await fetch('http://localhost/api/inmuebles/create', {
                method: 'POST',
                body: formData, // Usar FormData como cuerpo de la petición
                // No es necesario especificar el 'Content-Type', el navegador lo hará automáticamente
            });
            if (!res.ok) throw new Error('Network response was not ok.');
            res = await res.json();
            console.log(res);
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className="createContainer">
            <h1>Create a new property</h1>
        <div className="createForm">
            <form onSubmit={handler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title"  placeholder='Beach cottage' required/>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder='C/Calle, 3' required/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder='Awesome cottage at famous beach' required/>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="flat">Flat</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Price (pax/night (€))</label>
                    <input type="number" id="price" required/>
                </div>
                <div>
                    <label htmlFor="maxPeople">Max People</label>
                    <input type="number" id="maxPeople" required/>
                </div>
                <div>
                    <label htmlFor="services">Services (coma separated)</label>
                    <input type="text" id="services" placeholder='WiFi, TV, ...' required/>
                </div>
                <div>
                    <label htmlFor="photo">Photo</label>
                    <input type="file" id="photo"/>
                </div>

                <button type="submit">Create new!</button>
            </form>
        </div>
    </div>
  )
}

export default Create