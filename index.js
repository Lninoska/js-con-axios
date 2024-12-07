const fs = require('fs').promises
const axios = require('axios')

const numeroAzar = (numeroMaximo) => Math.floor(Math.random() * numeroMaximo - 1);



const leerArchivo = async () => {
    try {
        const datos = await fs.readFile('pokemon.txt', 'utf8');
        const arrayDatos = JSON.parse(datos);

        const numeroArray = Math.abs(numeroAzar(arrayDatos.length));

        const valorBusqueda = arrayDatos[numeroArray]
        console.log(`Pokemon aleatoreo: ${valorBusqueda}`)

        const urls = [ 
            "https://random-data-api.com/api/v2/appliances",
            "https://random-data-api.com/api/v2/blood_types",
            "https://random-data-api.com/api/v2/users"
        ];

        for( const url of urls) {
            const { data } = await axios.get(url);
            console.log(`Datos obtenidos de ${url}:`, data)
            await new Promise (resolve => setTimeout(resolve, 2000))
        }
    }
    catch(error){ 
        console.error("error:", error.message)
    }
}

leerArchivo()

// TRANSFORMAR ARCHIVOS DE TEXTO A ARCHIVOS JS 

const  urls  = require ('./ejercicio/urlAPI'); 
const pokemon = require('./ejercicio/pokemon');
const { resolve } = require('path');

const ejecutararchivosJS = async () => {
    try {
        const Array = numeroAzar(pokemon.length)
        const seleccionaPokemon = pokemon[Array]

        console.log(`Pokemon seleccionado: ${seleccionaPokemon}`)

        for(const url of urls) {
            const { data } = await axios.get(url);
            console.log(`Datos obtenidos de ${url}`, data)
            await new Promise( resolve => setTimeout(resolve, 4000))
        }
    } catch(error){
        console.log("error", Error.message)
    }
}

ejecutararchivosJS()