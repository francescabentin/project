"use strict";

const restaurantes =
    [
        {
            "nombre": "Restaurante del Mar",
            "descripcion": "Española",
            "estrellas": 4.5,
            "precio": '$$$',
            "comunidad": "Galicia"
        },
        {
            "nombre": "La Parrilla Andaluza",
            "descripcion": "Carnes a la parrilla en estilo andaluz.",
            "estrellas": 4.2,
            "precio": '$$$',
            "comunidad": "Andalucía"
        },
        {
            "nombre": "Sabores de Cataluña",
            "descripcion": "Especialidades de la cocina catalana.",
            "estrellas": 4.7,
            "precio": '$$$',
            "comunidad": "Cataluña"
        },
        {
            "nombre": "Asador Vasco",
            "descripcion": "Carnes asadas al estilo vasco.",
            "estrellas": 4.6,
            "precio": '$$$',
            "comunidad": "País Vasco"
        },
        {
            "nombre": "Restaurante del Mar",
            "descripcion": "Española",
            "estrellas": 4.5,
            "precio": '$$$',
            "comunidad": "Galicia"
        },
        {
            "nombre": "La Parrilla Andaluza",
            "descripcion": "Carnes a la parrilla en estilo andaluz.",
            "estrellas": 4.2,
            "precio": '$$$',
            "comunidad": "Andalucía"
        },
        {
            "nombre": "Sabores de Cataluña",
            "descripcion": "Especialidades de la cocina catalana.",
            "estrellas": 4.7,
            "precio": '$$$',
            "comunidad": "Cataluña"
        },
        {
            "nombre": "Asador Vasco",
            "descripcion": "Carnes asadas al estilo vasco.",
            "estrellas": 4.6,
            "precio": '$$$',
            "comunidad": "País Vasco"
        },
        {
            "nombre": "Restaurante del Mar",
            "descripcion": "Española",
            "estrellas": 4.5,
            "precio": '$$$',
            "comunidad": "Galicia"
        },
        {
            "nombre": "La Parrilla Andaluza",
            "descripcion": "Carnes a la parrilla en estilo andaluz.",
            "estrellas": 4.2,
            "precio": '$$$',
            "comunidad": "Andalucía"
        },
        {
            "nombre": "Sabores de Cataluña",
            "descripcion": "Especialidades de la cocina catalana.",
            "estrellas": 4.7,
            "precio": '$$$',
            "comunidad": "Cataluña"
        },
        {
            "nombre": "Asador Vasco",
            "descripcion": "Carnes asadas al estilo vasco.",
            "estrellas": 4.6,
            "precio": '$$$',
            "comunidad": "País Vasco"
        }

    ];



const restaurantContainer = document.getElementById('restaurant__container');
restaurantContainer.classList.add('restaurant__container');

restaurantes.forEach((restaurante, index) => {
    const restauranteElement = document.createElement('div');
    restauranteElement.classList.add('restaurant__container__restaurante');

    const divImage = document.createElement('div');
    divImage.classList.add('restaurant__container__restaurante__image');


    const imagenElement = document.createElement('img');
    if (index >= 1 && index <= 4) {
        imagenElement.src = `./assets/images/${index}.jpeg`;
    } else {
        imagenElement.src = './assets/images/1.jpeg';
    }

    imagenElement.classList.add('restaurant__container__restaurante__image__img')

    const divInfo = document.createElement('div');
    divInfo.classList.add('restaurant__container__restaurante__info');


    const nombreElement = document.createElement('h2');
    nombreElement.textContent = restaurante.nombre;

    const puntajeElement = document.createElement('p');
    puntajeElement.textContent = ` ${restaurante.estrellas} ★`;

    const precioElement = document.createElement('p');
    precioElement.textContent = ` ${restaurante.precio}`;

    const paisElement = document.createElement('p');
    paisElement.textContent = `${restaurante.comunidad}`;


    restauranteElement.appendChild(divImage);
    divImage.appendChild(imagenElement);
    restauranteElement.appendChild(divInfo);

    divInfo.appendChild(nombreElement);
    divInfo.appendChild(puntajeElement);
    divInfo.appendChild(precioElement);
    divInfo.appendChild(paisElement);

    restaurantContainer.appendChild(restauranteElement);
});






