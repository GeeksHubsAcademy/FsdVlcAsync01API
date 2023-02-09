
const axios = require('axios');

const TraeLocalizaciones = async () => {

    let resultado = await axios.get("https://rickandmortyapi.com/api/location");

    return resultado;
}


TraeLocalizaciones()
    .then(
        res => {

            res.data.results.map(
                (location) => console.log(location?.name)
            )
        }
    )
    .catch(
        error => { 
            switch(error.response.status){

                case 404:
                    console.log("Página no encontrada")
                break;

                case 501:
                    console.log("Acceso no autorizado")
                break

                default:
                    console.log("unknown error");
            }
        }
    );