## Instrucciones de uso - Manual de usuario

    - Ingreso link de despliegue de página
    - Selección de formato de color (HEX o HSL)
        1. En formato HEX: muestra únicamente el código hexadecimal
        2. En formato HSL: muestra ambos códigos (HEX y HSL) en cada recuadro
    - Selección de cantidad de colores según la necesidad: 6, 8 o 9
    - Ejecución de boton Generar Paleta
    - Notificación toast al generar una paleta indicando el formato seleccionado
    - Efecto hover en cada recuadro de color

## Decisiones técnicas

    - Funciones flecha (arrow functions): Se usaron funciones flecha modernas para mantener consistencia en el código.
    - Separación de responsabilidades: Cada función tiene una única tarea: 
        - generateColor() — Genera un color HEX aleatorio
        - generatePalette(count) — Genera un array de colores según la cantidad seleccionada
        - renderPalette(colors) — Renderiza los recuadros de color en el DOM
        - hexToHsl(hex) — Convierte un color HEX a formato HSL
        - showToast(message) — Muestra una notificación temporal al usuario
    - Variables de estado: Se usaron let currentFormat y let currentColors para recordar el estado actual de la aplicación entre interacciones.
    - data-attributes: Se usaron atributos data-format en los botones HEX/HSL para identificarlos de forma confiable en JS sin depender de clases CSS que cambian dinámicamente.

## Pasos para ejecución local

    1. Entrar al repositorio de GitHub 
    2. Entrar al apartado de <Code>
    3. Copiar el link del repositorio:
        (https://github.com/arteagagustavo019-design/Paleta-Colores-FT75.git)
    4. Digita Windows + R y digitar (cmd) para abrir la terminal
    5. Clonar el repositorio usando:
        (git clone -link repositorio-)
    6. Entrar a la carpeta del proyecto digitando:
        (cd Paleta-Colores-FT75)
    7. Abrir el proyecto en VS Code digitando:
        (code .)
    8. Ejecutar con LiveServer o la extension de uso predeterminado

    - Tener en consideración que del punto 3 al 4 se lo realiza en la terminal
    - Ejecución adicional para extraer la carpeta del proyecto al escritorio de ser necesario, luego del paso 2 digita (cd Desktop) y continua el resto de pasos ya descritos.

## Pasos para desplegar la aplicación

- VS Code

    1. Inicializar el repositorio local en la terminal de VS Code
        (git init)
    2. Agregar todos los archivos:
        (git add .)
    3. Hacer el primer commit:
        (git commit -m "primer commit")

- GitHub

    4. Crear el repositorio en GitHub con lo siguiente:
        (nombre del repositorio y selección de repositorio público)
    5. Click en "Create repository"

- VS Code

    6.  git push -u 
        (-u se lo hace la primera vez, en consiguiente solo git push)

- GitHub

    7. Ingresar al repositorio
    8. Seleccionar (Settings)
    9. Seleccionar (Pages)
    10. En Branch seleccionar None y cambiar a (main) y se deja (root)
    11. Guardar y esperar unos minutos
    12. Recargar la pagina para vizualización de link

---
*Desarrollado por Gustavo Arteaga — 2026*