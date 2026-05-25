// Localizar variables para las funciones
const generateBtn = document.getElementById('generate-btn');

const quantityInputs = document.querySelectorAll('input[name="quantity"]');

const formatBtns = document.querySelectorAll('.format-btn');

const palette = document.querySelector('.palette');

// Variable para almacenar el formato de color seleccionado

let currentFormat = "hex";
let currentColors = [];

// Función para generar un color aleatorio en formato hexadecimal

const generateColor = () => {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Función para generar una paleta de colores aleatorios llamando al color creado en la función anterior

const generatePalette = (count) => {
    const colors = [];                  //Array para almacenar los colores generados que seria (const palette) pero existe ya una variable con ese nombre

    for (let i = 0; i < count; i++) {
        colors.push(generateColor());
    }

    return colors;
}

// Función para renderizar (mostrar) la paleta de colores en el DOM

const renderPalette = (colors) => {
    palette.innerHTML = "";
    colors.forEach((color) => {
        const box = document.createElement("div");
        box.classList.add("color-box");
        box.style.backgroundColor = color;

           let colorCode;

        if (currentFormat === "hsl") {
            colorCode = hexToHsl(color);
        } else {
            colorCode = color;
        }
        box.innerHTML = `<span class="color-code">${colorCode}</span>`;
        palette.appendChild(box);
    });
}

// Evento para el botón de generar paleta

generateBtn.addEventListener("click", () => {
    let count = 6;

    quantityInputs.forEach((input) => {
        if (input.checked) {
            count = input.value;
        }
    });

    const colors = generatePalette(count);
    currentColors = colors; // Guardar los colores generados en la variable global
    renderPalette(currentColors);
});

// Eventos para los botones de formato de color (HEX/HSL)

formatBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFormat = btn.dataset.format;

        // paso 1: quitarle active a todos
        formatBtns.forEach((b) => {
            b.classList.remove("button-active");
            b.classList.add("button-inactive");
        });

        // paso 2: agregarle active solo al clickeado
        btn.classList.remove("button-inactive");
        btn.classList.add("button-active");

        // muestra los mismos colores en el nuevo formato

        renderPalette(currentColors); 
    });
});

// Función para convertir un color hexadecimal a formato HSL

const hexToHsl = (hex) => {
    // Extrae los valores de rojo, verde y azul del HEX y los convierte a un rango de 0 a 1
    let r = parseInt(hex.slice(1, 3), 16) / 255;  // Rojo
    let g = parseInt(hex.slice(3, 5), 16) / 255;  // Verde
    let b = parseInt(hex.slice(5, 7), 16) / 255;  // Azul

    // Encuentra el valor máximo y mínimo entre los tres colores
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    // Calcula la luminosidad (L) que es el promedio entre el máximo y mínimo
    let h, s, l = (max + min) / 2;

    if (max === min) {
        // Si el máximo y mínimo son iguales, el color es gris, sin matiz ni saturación
        h = s = 0;
    } else {
        // Calcula la diferencia entre máximo y mínimo
        let d = max - min;

        // Calcula la saturación (S) dependiendo de la luminosidad
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        // Calcula el matiz (H) dependiendo de cuál color es el máximo
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) :
            max === g ? (b - r) / d + 2 : (r - g) / d + 4;

        // Convierte el matiz a un rango de 0 a 1
        h /= 6;
    }

    // Devuelve el color en formato HSL con grados, porcentaje de saturación y luminosidad
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}






// Paleta inicial al cargar la página ← aquí va
currentColors = generatePalette(6);
renderPalette(currentColors);