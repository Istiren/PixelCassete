# 📼 Pixel Art Cassette VTuber Widget (OBS + Last.fm)

Un widget animado de casete retro en pixel art para OBS Studio, conectado en tiempo real a Last.fm/Spotify y gestionado mediante un panel de configuración web.

---

## Guía rápida de archivos (Estructura Modular)

*   **`themes.js` (La base de datos de diseños):**
    *   Aquí se registran todos los modelos de casetes disponibles. 
    *   Define los **nombres exactos de las fotos (PNG)** de cada capa, si el diseño permite modificar colores con sliders (`customizable: true/false`), y qué clase CSS usará para el texto.
*   **`index.html` (El reproductor para OBS):**
    *   Es la pantalla limpia que lee los parámetros de la URL, apila las capas gráficas en su orden correcto, anima los engranajes y hace el *polling* a la API de Last.fm cada 4 segundos.
*   **`config.html` (El panel de control):**
    *   La interfaz web donde el usuario (o tu cliente) personaliza el casete, ve la vista previa en vivo y genera automáticamente su enlace optimizado para OBS.

---

## Tutorial exprés para mi yo del futuro: ¿Cómo agregar un nuevo diseño en el futuro?

Si se te ocurre un nuevo diseño, solo sigue estos 3 pasos:

### 1. Sube tus fotos al repositorio
Sube todas las capas en formato PNG a la raíz del proyecto (respetando las medidas de tus capas, ej. 380x190 px para el cuerpo y 64x64 px para los engranajes).

### 2. Registra el tema en `themes.js`
Abre `themes.js` y agrega un nuevo objeto con los nombres exactos de tus archivos:
```javascript
cyberpunk: {
    name: "Edición Cyberpunk",
    customizable: false, // Pon true si quieres que use los sliders de color libre
    cuerpo: "cuerpo_cyberpunk.png",
    detalles1: "detalles_cyber1.png",
    detalles2: "detalles_cyber2.png", // Pon null si no usas tapa de engranajes
    cintas: "cintas_cyber.png",
    engranaje: "engranaje_cyber.png",
    labelClass: "tape-label-cyber" // La clase CSS para posicionar el texto
}

```

### 3. Define las distancias de la cinta en el CSS (`index.html` y `config.html`)

Si tu nueva cinta quedó en un lugar diferente del casete, agrega su clase CSS en la sección `<style>` de ambos archivos para ajustar milimétricamente dónde flota el texto y la carátula:

```css
.tape-label-cyber {
    top: 15px;    /* Distancia desde arriba */
    left: 40px;   /* Distancia desde la izquierda */
    width: 260px; /* Ancho exacto del canal de la cinta */
    height: 36px;
}

```

*¡Listo! Al recargar el panel de configuración, tu nuevo diseño aparecerá automáticamente en el menú desplegable.*

---
