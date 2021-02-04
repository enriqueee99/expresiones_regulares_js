const campo = document.querySelector('#campo');
const button = document.querySelector('#button');

button.addEventListener('click', e =>{
    //const regex = /[0-9]{3}/g; //buscara 3 numeros
    //const regex = /sol/g; //buscara 3 numeros
    //const regex = /^[\s]*(.*?)[\s]*$/; //regrese cadenas sin espacios
    //const regex = /<([a-z]+)([^<]+)*(?:>(.*)<\/\1\>||\s+\/>)/g; //regrese cadenas sin espacios
    //const regex =  /^\w+\s?\w+\s?$/; //nombres
    //const regex =  /09\d{8}/; //cedula del guayas xd
    //const regex =  /13\d{8}/; //cedula del manabis xd
    //const regex =  /[a-zA-Z0-9.-_]+@[a-zA-Z0-1-._]+\.[a-z-A-Z-0-9.-_]+/; // un correo normal
    const regex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/; //correo mejorado

    const validation = campo.value.match(regex);  //ejeucta
    
    console.log(validation);
})