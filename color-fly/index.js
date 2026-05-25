// Localizar variables para las funciones
const generateBtn = document.getElementById('generate-btn');

const quantityInput = document.querySelector('input[name="quantity"];');

const formatBtns = document.querySelectorAll('.format-btn');

const palette = document.querySelector('.palette');

// Variable para almacenar el formato de color seleccionado

let currentFormat = "hex";

// Función para generar un color aleatorio en formato hexadecimal

const generateColor = () => {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}

const generatePalette = (count) => {
    const palette = [];

    for (let i = 0; i < count; i++) {
        palette.push(generateColor());
    }

    return palette;
}
