const CASSETTE_THEMES = {
    night: {
        name: "Edición Nocturna (Midnight)",
        customizable: false, // Bloquea los sliders de color
        cuerpo: "cuerpo_cassette_midnight.png",
        detalles1: "detalles_fijos_midnight1.png",
        detalles2: "detalles_fijos_midnight2.png",
        cintas: "cintas_fondo_midnight.png",
        engranaje: "engranaje_midnight.png",
        labelClass: "tape-label-night"
    },
    classic: {
        name: "Clásico Transparente",
        customizable: true, // Habilita los sliders de color
        cuerpo: "cuerpo_cassette.png",
        detalles1: "detalles_fijos.png",
        detalles2: null, // No usa tapa de engranajes separada
        cintas: "cintas_fondo.png",
        engranaje: "engranaje.png",
        labelClass: "tape-label-classic"
    }
};