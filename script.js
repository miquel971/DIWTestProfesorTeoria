/* ============================================================
   BANCO TOTAL DE PREGUNTAS (173 Preguntas - UF1 a UF7 UAX)
   ============================================================ */
const totalQuestionsBank = [
    // --- UF1: LA INTERFAZ GRÁFICA ---
    { question: "¿Qué se entiende por interfaz en el contexto del desarrollo web?", answers: ["Conjunto de elementos que permiten la comunicación e intercambio de información entre el usuario y una máquina", "El hardware físico del servidor", "Un tipo de protocolo de red"], correct: "Conjunto de elementos que permiten la comunicación e intercambio de información entre el usuario y una máquina" },
    { question: "IPO corresponde a las siglas de ->", answers: ["Interacción Persona-Ordenador", "Interfaz de Programación Online", "Intercambio de Procesos Operativos"], correct: "Interacción Persona-Ordenador" },
    { question: "El objetivo principal de la IPO es ->", answers: ["Hacer que la interacción sea lo más natural, eficiente y satisfactoria posible para el usuario", "Reducir el consumo de memoria del navegador", "Permitir que el ordenador aprenda del usuario automáticamente"], correct: "Hacer que la interacción sea lo más natural, eficiente y satisfactoria posible para el usuario" },
    { question: "Una interfaz usable permite que el usuario ->", answers: ["Aprenda a usarla rápidamente, cometa pocos errores y logre sus objetivos con eficiencia", "Tenga que leer el manual antes de empezar", "Necesite ayuda técnica constante"], correct: "Aprenda a usarla rápidamente, cometa pocos errores y logre sus objetivos con eficiencia" },
    { question: "La usabilidad se relaciona principalmente con ->", answers: ["Facilidad de aprendizaje, eficiencia, memorabilidad, errores y satisfacción", "El número de imágenes por página", "La velocidad de carga del servidor"], correct: "Facilidad de aprendizaje, eficiencia, memorabilidad, errores y satisfacción" },
    { question: "La accesibilidad web persigue que ->", answers: ["Cualquier persona, independientemente de sus capacidades físicas, cognitivas o tecnológicas, pueda acceder y navegar", "La web sea compatible solo con dispositivos móviles", "El código sea lo más corto posible"], correct: "Cualquier persona, independientemente de sus capacidades físicas, cognitivas o tecnológicas, pueda acceder y navegar" },
    { question: "¿Qué organismo define las WCAG?", answers: ["El W3C (World Wide Web Consortium)", "ISO", "Google"], correct: "El W3C (World Wide Web Consortium)" },
    { question: "Las WCAG son ->", answers: ["Las Pautas de Accesibilidad para el Contenido Web (Web Content Accessibility Guidelines)", "Leyes internacionales de comercio", "Un tipo de framework de JavaScript"], correct: "Las Pautas de Accesibilidad para el Contenido Web (Web Content Accessibility Guidelines)" },
    { question: "Una web accesible beneficia ->", answers: ["A personas con discapacidad, personas mayores, usuarios con limitaciones técnicas o en entornos desfavorables", "Solo a personas ciegas", "Únicamente a los desarrolladores"], correct: "A personas con discapacidad, personas mayores, usuarios con limitaciones técnicas o en entornos desfavorables" },
    { question: "¿Qué atributo HTML es clave para la accesibilidad en imágenes?", answers: ["El atributo alt (texto alternativo)", "El atributo src", "El atributo title"], correct: "El atributo alt (texto alternativo)" },
    { question: "El diseño centrado en el usuario se conoce como ->", answers: ["UX Design (User Experience Design)", "UI Design", "Visual Programming"], correct: "UX Design (User Experience Design)" },
    { question: "El enfoque UXD busca principalmente ->", answers: ["Satisfacer las necesidades del usuario en su interacción con el producto", "Hacer que la web sea muy colorida", "Priorizar la velocidad del código sobre el diseño"], correct: "Satisfacer las necesidades del usuario en su interacción con el producto" },
    { question: "¿Qué fase inicial pertenece al diseño de interfaces?", answers: ["Análisis de requisitos e investigación del usuario", "Programación del CSS", "Subida al servidor"], correct: "Análisis de requisitos e investigación del usuario" },
    { question: "La entrevista con el cliente sirve para ->", answers: ["Conocer las necesidades, objetivos y público objetivo del proyecto", "Negociar el precio final", "Decidir el lenguaje de programación"], correct: "Conocer las necesidades, objetivos y público objetivo del proyecto" },
    { question: "Un documento de especificación debe ->", answers: ["Recoger todos los requisitos funcionales y de diseño acordados", "Ser opcional", "Contener solo el presupuesto"], correct: "Recoger todos los requisitos funcionales y de diseño acordados" },
    { question: "¿Qué es un mapa web?", answers: ["Representación visual de la arquitectura y jerarquía de las páginas de un sitio", "Un GPS para la página", "Un plugin de Google Maps"], correct: "Representación visual de la arquitectura y jerarquía de las páginas de un sitio" },
    { question: "Los wireframes son ->", answers: ["Esquemas de baja fidelidad que definen la estructura y jerarquía de la página", "Diseños finales con todos los colores", "El código HTML base"], correct: "Esquemas de baja fidelidad que definen la estructura y jerarquía de la página" },
    { question: "El objetivo principal de un wireframe es ->", answers: ["Definir la disposición de los elementos sin entrar en detalles visuales", "Elegir las fotos de la web", "Probar la interactividad de los botones"], correct: "Definir la disposición de los elementos sin entrar en detalles visuales" },
    { question: "Un mockup se diferencia de un wireframe porque ->", answers: ["Es un diseño artístico de alta fidelidad con colores, tipografía e imágenes", "Es interactivo", "Solo tiene texto"], correct: "Es un diseño artístico de alta fidelidad con colores, tipografía e imágenes" },
    { question: "El “look & feel” hace referencia a ->", answers: ["Apariencia visual (look) y experiencia de uso o interactividad (feel)", "La seguridad del servidor", "El tiempo de carga"], correct: "Apariencia visual (look) y experiencia de uso o interactividad (feel)" },
    { question: "¿Qué diferencia hay entre mockup y prototipo?", answers: ["El mockup es estático; el prototipo es interactivo y simula el funcionamiento real", "No hay diferencia", "El mockup es el código final"], correct: "El mockup es estático; el prototipo es interactivo y simula el funcionamiento real" },
    { question: "¿Cuál es un diseño de mayor coste de realización?", answers: ["El prototipo de alta fidelidad", "El wireframe", "El mockup"], correct: "El prototipo de alta fidelidad" },
    { question: "Una buena interfaz debe ser ->", answers: ["Intuitiva, coherente, clara y eficiente", "Compleja y artística", "Solo en blanco y negro"], correct: "Intuitiva, coherente, clara y eficiente" },
    { question: "HTML5 ayuda a la accesibilidad gracias a ->", answers: ["Uso de etiquetas semánticas que estructuran mejor el contenido", "Poder añadir vídeos", "Ser compatible con navegadores antiguos"], correct: "Uso de etiquetas semánticas que estructuran mejor el contenido" },
    { question: "¿Cuál NO es un contenedor semántico HTML5?", answers: ["div o span", "header", "section"], correct: "div o span" },
    { question: "El uso de ARIA sirve para ->", answers: ["Hacer que el contenido dinámico y los controles avanzados sean accesibles", "Optimizar el buscador", "Reducir el peso de las imágenes"], correct: "Hacer que el contenido dinámico y los controles avanzados sean accesibles" },
    { question: "Un diseño accesible debe tener en cuenta ->", answers: ["Contraste de colores, tamaño de fuente, navegación por teclado y textos alternativos", "Solo el idioma del código", "Que no tenga vídeos"], correct: "Contraste de colores, tamaño de fuente, navegación por teclado y textos alternativos" },
    { question: "En una buena interfaz web, el usuario debe ->", answers: ["Sentirse en control y saber en todo momento dónde está y qué puede hacer", "Estar confundido al principio", "Aprenderse el código fuente"], correct: "Sentirse en control y saber en todo momento dónde está y qué puede hacer" },

    // --- UF2: INTRODUCCIÓN A CSS ---
    { question: "¿Qué significan las siglas CSS?", answers: ["Cascading Style Sheets (Hojas de Estilo en Cascada)", "Creative Style System", "Computer Simple Style"], correct: "Cascading Style Sheets (Hojas de Estilo en Cascada)" },
    { question: "¿Para qué se utiliza CSS en el desarrollo web?", answers: ["Para definir la presentación, diseño y aspecto visual de los documentos HTML", "Para programar la lógica del servidor", "Para crear bases de datos"], correct: "Para definir la presentación, diseño y aspecto visual de los documentos HTML" },
    { question: "¿Qué selector CSS selecciona todos los elementos?", answers: ["El selector universal (*)", "El selector de clase", "El selector de ID"], correct: "El selector universal (*)" },
    { question: "¿Cómo se enlaza una hoja CSS externa correctamente?", answers: ["<link rel='stylesheet' href='estilos.css'>", "<style src='estilos.css'>", "<script href='estilos.css'>"], correct: "<link rel='stylesheet' href='estilos.css'>" },
    { question: "¿Qué tipo de CSS tiene mayor prioridad?", answers: ["Los estilos en línea (atributo style)", "Hojas externas", "Estilos internos"], correct: "Los estilos en línea (atributo style)" },
    { question: "¿Qué símbolo identifica una clase?", answers: ["El punto (.)", "La almohadilla (#)", "El asterisco (*)"], correct: "El punto (.)" },
    { question: "¿Qué símbolo identifica un id?", answers: ["La almohadilla (#)", "El punto (.)", "El porcentaje (%)"], correct: "La almohadilla (#)" },
    { question: "¿Qué propiedad cambia el color del texto?", answers: ["color", "font-color", "text-background"], correct: "color" },
    { question: "¿Qué unidad es relativa al tamaño de la fuente?", answers: ["em o rem", "px", "cm"], correct: "em o rem" },
    { question: "¿Qué propiedad define la tipografía?", answers: ["font-family", "text-font", "font-style"], correct: "font-family" },
    { question: "¿Qué propiedad controla el tamaño del texto?", answers: ["font-size", "text-size", "font-weight"], correct: "font-size" },
    { question: "¿Qué valor de position saca al elemento del flujo?", answers: ["absolute o fixed", "relative", "static"], correct: "absolute o fixed" },
    { question: "¿Qué propiedad controla el espacio interior?", answers: ["padding", "margin", "border"], correct: "padding" },
    { question: "¿Qué propiedad controla el espacio exterior?", answers: ["margin", "padding", "outline"], correct: "margin" },
    { question: "¿Qué selector selecciona descendientes?", answers: ["Un espacio entre selectores", "Una coma", "Un signo mayor que"], correct: "Un espacio entre selectores" },
    { question: "¿Qué pseudoclase se activa al pasar el ratón?", answers: [":hover", ":active", ":focus"], correct: ":hover" },
    { question: "¿Qué propiedad oculta un elemento manteniendo su espacio?", answers: ["visibility: hidden", "display: none", "opacity: 0"], correct: "visibility: hidden" },
    { question: "¿Qué valor de display coloca elementos en línea?", answers: ["inline", "block", "grid"], correct: "inline" },
    { question: "¿Qué propiedad define el fondo de un elemento?", answers: ["background", "color", "fill"], correct: "background" },
    { question: "¿Qué es la herencia en CSS?", answers: ["Propiedad por la que los elementos hijos adquieren ciertos estilos de sus padres", "Copiar archivos CSS de una web a otra", "Heredar clases de Bootstrap"], correct: "Propiedad por la que los elementos hijos adquieren ciertos estilos de sus padres" },
    { question: "¿Cómo se escriben comentarios en CSS?", answers: ["/* comentario */", "// comentario", "/%/ comentario"], correct: "/* comentario */" },
    { question: "¿Qué propiedad alinea texto horizontalmente?", answers: ["text-align", "horizontal-align", "justify-content"], correct: "text-align" },
    { question: "¿Qué valor centra el texto?", answers: ["center", "middle", "justify"], correct: "center" },
    { question: "¿Qué selector tiene mayor especificidad?", answers: ["El selector de ID (#)", "El selector de clase (.)", "El selector de etiqueta"], correct: "El selector de ID (#)" },
    { question: "¿Qué propiedad controla el grosor del texto?", answers: ["font-weight", "font-bold", "font-size"], correct: "font-weight" },
    { question: "¿Qué valor de display elimina el elemento del flujo?", answers: ["none", "hidden", "inline"], correct: "none" },
    { question: "¿Qué propiedad define estilos de lista?", answers: ["list-style", "ul-style", "list-type"], correct: "list-style" },
    { question: "¿Qué significa cascada en CSS?", answers: ["El orden de prioridad para aplicar estilos basado en importancia, especificidad y orden", "Que las propiedades se heredan de arriba a abajo", "El proceso de importar archivos"], correct: "El orden de prioridad para aplicar estilos basado en importancia, especificidad y orden" },
    { question: "¿Qué atributo HTML se usa para aplicar clases?", answers: ["class", "id", "style"], correct: "class" },
    { question: "¿Qué unidad depende del ancho del viewport?", answers: ["vw", "vh", "em"], correct: "vw" },

    // --- UF3: CSS AVANZADO ---
    { question: "¿Qué tipo de diseño utiliza medidas fijas?", answers: ["Diseño estático o fijo", "Diseño líquido", "Diseño responsivo"], correct: "Diseño estático o fijo" },
    { question: "¿Qué problema presenta el diseño fijo en pantallas pequeñas?", answers: ["Obliga a usar scroll horizontal y no se adapta al ancho", "Las fuentes se borran", "Los colores pierden brillo"], correct: "Obliga a usar scroll horizontal y no se adapta al ancho" },
    { question: "¿En qué se basa el diseño elástico?", answers: ["En unidades relativas al tamaño de fuente (em)", "En porcentajes (%)", "En píxeles"], correct: "En unidades relativas al tamaño de fuente (em)" },
    { question: "¿Qué característica define al diseño líquido?", answers: ["Utiliza porcentajes para adaptarse al ancho del contenedor", "Cambia la estructura según el dispositivo", "Usa unidades vh"], correct: "Utiliza porcentajes para adaptarse al ancho del contenedor" },
    { question: "¿Qué inconveniente puede tener el diseño líquido?", answers: ["En pantallas muy grandes los párrafos pueden estirarse demasiado", "No carga en móviles", "Elimina los bordes"], correct: "En pantallas muy grandes los párrafos pueden estirarse demasiado" },
    { question: "¿Qué tipo de diseño reorganiza elementos según dispositivo?", answers: ["Diseño responsivo (Responsive Design)", "Diseño fijo", "Diseño fluido"], correct: "Diseño responsivo (Responsive Design)" },
    { question: "¿En qué se basa el diseño responsivo?", answers: ["En Media Queries y rejillas flexibles", "En JavaScript", "En imágenes vectoriales"], correct: "En Media Queries y rejillas flexibles" },
    { question: "¿Qué significa el enfoque mobile-first?", answers: ["Diseñar primero para móviles y luego escalar a pantallas grandes", "Hacer solo una web móvil", "Usar solo iconos"], correct: "Diseñar primero para móviles y luego escalar a pantallas grandes" },
    { question: "¿Qué unidad depende del viewport?", answers: ["vh y vw", "em y rem", "px"], correct: "vh y vw" },
    { question: "¿Qué regla CSS permite condiciones?", answers: ["@media", "@import", "@charset"], correct: "@media" },
    { question: "¿Qué medio se usa para pantallas?", answers: ["screen", "print", "speech"], correct: "screen" },
    { question: "¿Qué operador exige cumplir todas las condiciones?", answers: ["and", "not", "only"], correct: "and" },
    { question: "¿Qué operador niega una condición?", answers: ["not", "and", "or"], correct: "not" },
    { question: "¿Qué propiedad comprueba el ancho del viewport?", answers: ["width", "height", "size"], correct: "width" },
    { question: "¿Qué valor indica orientación horizontal?", answers: ["landscape", "portrait", "horizontal"], correct: "landscape" },
    { question: "¿Qué propiedad se basa en la resolución?", answers: ["resolution", "density", "ratio"], correct: "resolution" },
    { question: "¿Qué propiedad crea sombras en texto?", answers: ["text-shadow", "box-shadow", "font-shadow"], correct: "text-shadow" },
    { question: "¿Qué propiedad crea sombras en cajas?", answers: ["box-shadow", "text-shadow", "border-shadow"], correct: "box-shadow" },
    { question: "¿Qué valor aplica sombra interior?", answers: ["inset", "inside", "inner"], correct: "inset" },
    { question: "¿Qué tipos de gradientes existen en CSS?", answers: ["Lineales (linear-gradient) y radiales (radial-gradient)", "Fijos y variables", "Simples"], correct: "Lineales (linear-gradient) y radiales (radial-gradient)" },
    { question: "¿Qué propiedad crea transiciones suaves?", answers: ["transition", "animation", "transform"], correct: "transition" },
    { question: "¿Qué propiedad indica duración de transición?", answers: ["transition-duration", "time", "speed"], correct: "transition-duration" },
    { question: "¿Qué función rota un elemento?", answers: ["rotate()", "spin()", "turn()"], correct: "rotate()" },
    { question: "¿Qué función escala un elemento?", answers: ["scale()", "resize()", "grow()"], correct: "scale()" },
    { question: "¿Qué función desplaza un elemento?", answers: ["translate()", "move()", "offset()"], correct: "translate()" },
    { question: "¿Qué elemento no es propio de preprocesadores?", answers: ["Etiquetas HTML nativas", "Variables", "Mixins"], correct: "Etiquetas HTML nativas" },
    { question: "¿Para qué sirve la anidación?", answers: ["Para escribir selectores dentro de otros reflejando la estructura HTML", "Para guardar archivos CSS", "Para crear bucles"], correct: "Para escribir selectores dentro de otros reflejando la estructura HTML" },
    { question: "¿Qué directiva importa archivos SCSS?", answers: ["@import", "@use", "@include"], correct: "@import" },
    { question: "¿Qué ventaja aportan los preprocesadores CSS?", answers: ["Uso de variables, funciones, anidación y mejor organización", "Carga instantánea", "No requieren compilación"], correct: "Uso de variables, funciones, anidación y mejor organización" },

    // --- UF4: CREACIÓN DE INTERFACES GRÁFICAS ---
    { question: "¿Qué es una plantilla web?", answers: ["Diseño predefinido que sirve como base para crear un sitio", "Un manual corporativo", "Un servidor"], correct: "Diseño predefinido que sirve como base para crear un sitio" },
    { question: "¿Cuál es el objetivo principal de usar plantillas?", answers: ["Ahorrar tiempo y costes en el desarrollo", "Evitar el HTML", "Proteger el código"], correct: "Ahorrar tiempo y costes en el desarrollo" },
    { question: "¿Qué ventaja aportan las plantillas en el mantenimiento?", answers: ["Facilitan cambios globales al modificar una base", "Hacen que sea diario", "No necesitan actualizarse"], correct: "Facilitan cambios globales al modificar una base" },
    { question: "¿Qué tipo de contenido se genera dinámicamente?", answers: ["Contenido que cambia según la interacción o base de datos", "Imágenes fijas", "Textos estáticos"], correct: "Contenido que cambia según la interacción o base de datos" },
    { question: "¿Qué lenguaje se usa para contenido dinámico en cliente?", answers: ["JavaScript", "PHP", "Python"], correct: "JavaScript" },
    { question: "¿Qué caracteriza a un CMS?", answers: ["Permite gestionar contenidos sin conocimientos técnicos de programación", "Es un hardware", "Es un protocolo"], correct: "Permite gestionar contenidos sin conocimientos técnicos de programación" },
    { question: "¿Cómo se denominan las plantillas en WordPress?", answers: ["Themes o Temas", "Skins", "Layouts"], correct: "Themes o Temas" },
    { question: "¿Qué etiqueta HTML permite definir plantillas reutilizables?", answers: ["<template>", "<pattern>", "<layout>"], correct: "<template>" },
    { question: "¿Cómo se muestra el contenido de <template>?", answers: ["Mediante JavaScript, clonando su contenido", "Aparece solo", "Pulsando el botón derecho"], correct: "Mediante JavaScript, clonando su contenido" },
    { question: "¿Qué ventaja tiene separar la interfaz en varios archivos?", answers: ["Mejora la organización, reutilización y trabajo en equipo", "Aumenta el peso", "Confunde al navegador"], correct: "Mejora la organización, reutilización y trabajo en equipo" },
    { question: "¿Qué es un framework CSS?", answers: ["Conjunto de herramientas y reglas CSS para facilitar el diseño", "Un editor de texto", "Un sistema operativo"], correct: "Conjunto de herramientas y reglas CSS para facilitar el diseño" },
    { question: "¿Quién desarrolló Bootstrap originalmente?", answers: ["Twitter", "Google", "Facebook"], correct: "Twitter" },
    { question: "¿Qué enfoque sigue Bootstrap?", answers: ["Mobile-first", "Desktop-first", "Server-first"], correct: "Mobile-first" },
    { question: "¿Qué sistema de maquetación utiliza Bootstrap?", answers: ["Grid System (basado en Flexbox)", "Tablas HTML", "Floats"], correct: "Grid System (basado en Flexbox)" },
    { question: "¿Qué archivo permite personalizar Bootstrap?", answers: ["Variables SASS o archivos CSS personalizados", "Imágenes .png", "Solo el HTML"], correct: "Variables SASS o archivos CSS personalizados" },
    { question: "¿Qué criterio es importante al elegir un framework CSS?", answers: ["Documentación, comunidad, peso y facilidad de uso", "Color del logo", "Antigüedad"], correct: "Documentación, comunidad, peso y facilidad de uso" },

    // --- UF5: COMPONENTES MULTIMEDIA ---
    { question: "¿Qué se considera contenido multimedia en una web?", answers: ["Texto, imágenes, audio, vídeo y animaciones", "Solo vídeo", "Solo texto"], correct: "Texto, imágenes, audio, vídeo y animaciones" },
    { question: "¿Cómo permite HTML5 incluir contenido multimedia?", answers: ["Mediante etiquetas nativas como <audio> y <video>", "Con Flash", "Con <iframe>"], correct: "Mediante etiquetas nativas como <audio> y <video>" },
    { question: "¿Qué etiqueta HTML se utiliza para audio?", answers: ["<audio>", "<sound>", "<mp3>"], correct: "<audio>" },
    { question: "¿Qué etiqueta HTML se utiliza para vídeo?", answers: ["<video>", "<movie>", "<mp4>"], correct: "<video>" },
    { question: "¿Qué atributo muestra controles de reproducción?", answers: ["controls", "play", "interface"], correct: "controls" },
    { question: "¿Qué atributo inicia la reproducción automáticamente?", answers: ["autoplay", "start", "auto"], correct: "autoplay" },
    { question: "¿Qué atributo repite el contenido multimedia?", answers: ["loop", "repeat", "again"], correct: "loop" },
    { question: "¿Qué atributo silencia el audio?", answers: ["muted", "silent", "low"], correct: "muted" },
    { question: "¿Qué formato de audio es más compatible con HTML5?", answers: ["MP3", "WAV", "FLAC"], correct: "MP3" },
    { question: "¿Qué formato de vídeo es más compatible con navegadores actuales?", answers: ["MP4 (H.264)", "AVI", "WMV"], correct: "MP4 (H.264)" },
    { question: "¿Para qué sirve la etiqueta <source>?", answers: ["Para ofrecer el mismo contenido en distintos formatos por compatibilidad", "Para el autor", "Para el título"], correct: "Para ofrecer el mismo contenido en distintos formatos por compatibilidad" },
    { question: "¿Qué ventaja tiene ofrecer varios formatos multimedia?", answers: ["Asegura la reproducción en cualquier navegador", "Mejora la resolución", "Ocupa menos"], correct: "Asegura la reproducción en cualquier navegador" },
    { question: "¿Qué atributo mejora la accesibilidad en vídeos?", answers: ["Subtítulos y descripciones", "Color", "Resolución"], correct: "Subtítulos y descripciones" },
    { question: "¿Para qué sirve la etiqueta <track>?", answers: ["Para añadir pistas de texto (subtítulos) a audio/vídeo", "Para rastrear", "Para el idioma"], correct: "Para añadir pistas de texto (subtítulos) a audio/vídeo" },
    { question: "¿Qué tipo de imagen es SVG?", answers: ["Imagen vectorial", "Mapa de bits", "Imagen comprimida"], correct: "Imagen vectorial" },
    { question: "¿Qué formato de imagen es más adecuado para fotografías?", answers: ["JPEG", "SVG", "PNG"], correct: "JPEG" },
    { question: "¿Qué formato de imagen soporta transparencias?", answers: ["PNG", "JPEG", "BMP"], correct: "PNG" },
    { question: "¿Qué atributo HTML es clave para la accesibilidad de imágenes?", answers: ["alt", "title", "longdesc"], correct: "alt" },
    { question: "¿Qué problema puede causar un uso inadecuado de multimedia?", answers: ["Carga lenta de la página y mala experiencia de usuario", "Apaga el ordenador", "Invierte los colores"], correct: "Carga lenta de la página y mala experiencia de usuario" },
    { question: "¿Qué buena práctica se recomienda al usar multimedia en la web?", answers: ["Optimizar archivos y ofrecer alternativas textuales", "Audio automático", "Vídeos gigantes"], correct: "Optimizar archivos y ofrecer alternativas textuales" },

    // --- UF6: CONTENIDO INTERACTIVO ---
    { question: "¿Qué es un evento en una página web?", answers: ["Acción o suceso detectado por el navegador (clic, carga, etc.)", "Una reunión", "Una actualización"], correct: "Acción o suceso detectado por el navegador (clic, carga, etc.)" },
    { question: "¿Para qué sirven los eventos en JavaScript?", answers: ["Para responder a las acciones del usuario y crear interactividad", "Para crear animaciones CSS", "Para cambiar el título en el servidor"], correct: "Para responder a las acciones del usuario y crear interactividad" },
    { question: "¿Qué lenguaje se utiliza para manejar eventos en el navegador?", answers: ["JavaScript", "HTML", "C++"], correct: "JavaScript" },
    { question: "¿Qué evento se lanza al cargar completamente la página?", answers: ["load", "start", "open"], correct: "load" },
    { question: "¿Qué evento se produce al hacer clic con el ratón?", answers: ["click", "press", "select"], correct: "click" },
    { question: "¿Qué evento detecta la pulsación de una tecla?", answers: ["keydown / keyup", "type", "press"], correct: "keydown / keyup" },
    { question: "¿Qué método permite asociar varios manejadores a un evento?", answers: ["addEventListener()", "setEvent()", "attachEvent()"], correct: "addEventListener()" },
    { question: "¿Qué ventaja tiene addEventListener frente a onclick?", answers: ["Permite añadir múltiples funciones a un mismo evento", "Es más fácil", "No usa JS"], correct: "Permite añadir múltiples funciones a un mismo evento" },
    { question: "¿Qué propiedad del evento indica la tecla pulsada?", answers: ["key", "button", "keyCode"], correct: "key" },
    { question: "¿Qué evento se produce al perder el foco un elemento?", answers: ["blur", "focusout", "lost"], correct: "blur" },
    { question: "¿Qué evento se lanza al enviar un formulario?", answers: ["submit", "send", "post"], correct: "submit" },
    { question: "¿Qué evento se produce al redimensionar la ventana?", answers: ["resize", "scale", "change"], correct: "resize" },
    { question: "¿Qué evento del ratón se lanza al pasar sobre un elemento?", answers: ["mouseover", "hover", "over"], correct: "mouseover" },
    { question: "¿Qué evento se lanza con el botón derecho del ratón?", answers: ["contextmenu", "rightclick", "menu"], correct: "contextmenu" },
    { question: "¿Qué método permite acceder a un elemento por su id?", answers: ["getElementById()", "queryId()", "getElement()"], correct: "getElementById()" },
    { question: "¿Qué método devuelve solo el primer elemento coincidente?", answers: ["querySelector()", "select()", "getFirst()"], correct: "querySelector()" },
    { question: "¿Qué método devuelve todos los elementos coincidentes?", answers: ["querySelectorAll()", "getElementsByAll()", "selectAll()"], correct: "querySelectorAll()" },
    { question: "¿Qué propiedad permite acceder a estilos en línea?", answers: ["style", "css", "styles"], correct: "style" },
    { question: "¿Qué método devuelve los estilos calculados por el navegador?", answers: ["window.getComputedStyle()", "element.getStyles()", "window.styles()"], correct: "window.getComputedStyle()" },
    { question: "¿Cómo son los estilos obtenidos con getComputedStyle?", answers: ["De solo lectura", "Modificables", "Variables"], correct: "De solo lectura" },
    { question: "¿Qué propiedad permite cambiar la clase de un elemento?", answers: ["className / classList", "class", "setClass"], correct: "className / classList" },
    { question: "¿Qué evento se lanza al escribir en un input?", answers: ["input", "write", "change"], correct: "input" },
    { question: "¿Qué evento se produce al seleccionar texto?", answers: ["select", "highlight", "copy"], correct: "select" },
    { question: "¿Qué propiedad indica el botón del ratón pulsado?", answers: ["button", "mouseButton", "clickType"], correct: "button" },
    { question: "¿Qué coordenada tiene en cuenta el scroll de la página?", answers: ["pageY", "clientY", "screenY"], correct: "pageY" },
    { question: "¿Qué coordenada se refiere a la ventana visible?", answers: ["clientY", "pageY", "topY"], correct: "clientY" },
    { question: "¿Qué evento se lanza al reiniciar un formulario?", answers: ["reset", "clear", "undo"], correct: "reset" },
    { question: "¿Cómo se puede cambiar una hoja de estilos completa?", answers: ["Modificando el atributo href del elemento <link>", "No es posible", "Con .cssFile"], correct: "Modificando el atributo href del elemento <link>" },
    { question: "¿Qué evento se produce al mover el ratón?", answers: ["mousemove", "moving", "mousepos"], correct: "mousemove" },
    { question: "¿Qué buena práctica se recomienda al trabajar con eventos?", answers: ["Delegación de eventos y no saturar el DOM con escuchadores", "Usar onclick en HTML", "Poner todo en el body"], correct: "Delegación de eventos y no saturar el DOM con escuchadores" },

    // --- UF7: ACCESIBILIDAD Y USABILIDAD ---
    { question: "¿Qué es la accesibilidad web?", answers: ["Diseño que permite a personas con discapacidad percibir, entender y navegar por la web", "Que se abra en todos los países", "Que no se caiga"], correct: "Diseño que permite a personas con discapacidad percibir, entender y navegar por la web" },
    { question: "¿A quién beneficia la accesibilidad web?", answers: ["A todos, pero especialmente a personas con discapacidad y mayores", "Solo a jóvenes", "Solo a diseñadores"], correct: "A todos, pero especialmente a personas con discapacidad y mayores" },
    { question: "¿Qué organismo define las WCAG?", answers: ["W3C", "Google", "ISO"], correct: "W3C" },
    { question: "¿Qué son las WCAG?", answers: ["Pautas técnicas que definen cómo hacer la web accesible", "Manual SEO", "Normas de ciberseguridad"], correct: "Pautas técnicas que definen cómo hacer la web accesible" },
    { question: "¿Qué significan las siglas POUR?", answers: ["Perceptible, Operable, Comprensible (Understandable) y Robusto", "Potente, Ordenado, Útil y Real", "Página Organizada"], correct: "Perceptible, Operable, Comprensible (Understandable) y Robusto" },
    { question: "¿Qué implica que un contenido sea perceptible?", answers: ["Que los usuarios puedan recibir la información a través de sus sentidos", "Código visible", "Transparente"], correct: "Que los usuarios puedan recibir la información a través de sus sentidos" },
    { question: "¿Qué principio POUR se relaciona con el teclado?", answers: ["Operable", "Perceptible", "Robusto"], correct: "Operable" },
    { question: "¿Qué principio POUR exige que el contenido sea entendible?", answers: ["Comprensible (Understandable)", "Robusto", "Operable"], correct: "Comprensible (Understandable)" },
    { question: "¿Qué principio POUR se centra en la compatibilidad futura?", answers: ["Robusto", "Perceptible", "Estructurado"], correct: "Robusto" },
    { question: "¿Qué atributo HTML es obligatorio para imágenes accesibles?", answers: ["alt", "title", "id"], correct: "alt" },
    { question: "¿Para qué sirve el atributo alt en una imagen?", answers: ["Para describir la imagen a quien no puede verla", "Nombre interno", "Mejorar color"], correct: "Para describir la imagen a quien no puede verla" },
    { question: "¿Qué etiqueta HTML5 mejora la accesibilidad semántica?", answers: ["nav, header, main, footer, article, etc.", "div o span", "section únicamente"], correct: "nav, header, main, footer, article, etc." },
    { question: "¿Qué herramienta permite validar accesibilidad automáticamente?", answers: ["TAW o WAVE", "Photoshop", "Notepad++"], correct: "TAW o WAVE" },
    { question: "¿Qué es ARIA?", answers: ["Accessible Rich Internet Applications (ayuda a la accesibilidad en contenido dinámico)", "IA para diseño", "Fuente especial"], correct: "Accessible Rich Internet Applications (ayuda a la accesibilidad en contenido dinámico)" },
    { question: "¿Cuándo debe usarse ARIA?", answers: ["Cuando el HTML semántico no es suficiente para describir la función", "Siempre", "Solo en Apps"], correct: "Cuando el HTML semántico no es suficiente para describir la función" },
    { question: "¿Qué atributo ARIA define el rol de un elemento?", answers: ["role", "type", "description"], correct: "role" },
    { question: "¿Qué atributo ARIA oculta contenido a lectores de pantalla?", answers: ["aria-hidden", "aria-invisible", "aria-none"], correct: "aria-hidden" },
    { question: "¿Por qué es importante el contraste de color?", answers: ["Para facilitar la lectura a personas con baja visión o daltonismo", "Batería", "Modernidad"], correct: "Para facilitar la lectura a personas con baja visión o daltonismo" },
    { question: "¿Qué problema tiene usar solo color para transmitir información?", answers: ["Excluye a usuarios que no pueden distinguir colores", "Más caro", "Carga lenta"], correct: "Excluye a usuarios que no pueden distinguir colores" },
    { question: "¿Qué buena práctica mejora la accesibilidad en formularios?", answers: ["Usar etiquetas <label> vinculadas correctamente a los inputs", "Placeholders", "Ocultar campos"], correct: "Usar etiquetas <label> vinculadas correctamente a los inputs" }
];

/* ============================================================
   LÓGICA DE ROTACIÓN SIN REPETICIÓN (script.js)
   ============================================================ */

let quizData = [];
let currentQ = 0;
let score = 0;
let answered = false;

// Referencias DOM
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultScreen = document.getElementById('result-screen');
const quizHeader = document.getElementById('quiz-header');

/**
 * Gestiona la memoria de preguntas para que no se repitan
 */
function getAvailableQuestions() {
    // Obtenemos IDs de preguntas ya hechas de la memoria del navegador
    let playedIds = JSON.parse(localStorage.getItem('uax_played_questions')) || [];
    
    // Filtramos las que NO han sido jugadas aún
    let available = totalQuestionsBank.filter((q, index) => !playedIds.includes(index));

    // Si nos quedamos sin preguntas nuevas suficientes para un test, reiniciamos el ciclo
    if (available.length < 30) {
        localStorage.removeItem('uax_played_questions');
        return [...totalQuestionsBank];
    }
    return available;
}

/**
 * Guarda el ID de la pregunta en el historial del navegador
 */
function markAsPlayed(questionText) {
    let playedIds = JSON.parse(localStorage.getItem('uax_played_questions')) || [];
    // Buscamos el índice original en el banco total para que sea persistente
    const originalIndex = totalQuestionsBank.findIndex(q => q.question === questionText);
    
    if (originalIndex !== -1 && !playedIds.includes(originalIndex)) {
        playedIds.push(originalIndex);
        localStorage.setItem('uax_played_questions', JSON.stringify(playedIds));
    }
}

/**
 * Prepara una nueva tanda de 30 preguntas
 */
function prepareNewTest() {
    const available = getAvailableQuestions();
    
    // Mezclamos y elegimos 30 de las disponibles (o del banco total si se reinició)
    const shuffled = available.sort(() => 0.5 - Math.random());
    quizData = shuffled.slice(0, 30);
    
    currentQ = 0;
    score = 0;
    
    resultScreen.classList.add('hide');
    quizHeader.classList.remove('hide');
    
    loadQuestion();
}

/**
 * Carga la pregunta actual en la interfaz
 */
function loadQuestion() {
    answered = false;
    const data = quizData[currentQ];
    
    // Mezclar opciones para que varíen de posición siempre (A, B, C rotan)
    const shuffledAnswers = [...data.answers].sort(() => 0.5 - Math.random());
    
    questionEl.innerText = `(${currentQ + 1}/30) ${data.question}`;
    optionsContainer.innerHTML = '';
    
    shuffledAnswers.forEach(ans => {
        const div = document.createElement('div');
        div.classList.add('option');
        div.innerText = ans;
        div.onclick = () => {
            if (answered) return;
            checkOption(div, ans);
        };
        optionsContainer.appendChild(div);
    });
}

/**
 * Verifica la opción al hacer clic y pasa solo tras feedback visual
 */
function checkOption(element, selectedText) {
    answered = true;
    const data = quizData[currentQ];
    const options = document.querySelectorAll('.option');

    // Registrar esta pregunta en la memoria de "ya hechas"
    markAsPlayed(data.question);

    options.forEach(opt => {
        opt.classList.add('disabled');
        // Pintamos la correcta en verde
        if (opt.innerText === data.correct) {
            opt.classList.add('correct');
        }
        // Si fallaste, pintamos tu elección en rojo
        if (opt.innerText === selectedText && selectedText !== data.correct) {
            opt.classList.add('wrong');
        }
    });

    if (selectedText === data.correct) {
        score++;
    }

    // Paso automático tras 1 segundo para ver el resultado
    setTimeout(() => {
        currentQ++;
        if (currentQ < 30) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

/**
 * Muestra la nota final
 */
function showResults() {
    quizHeader.classList.add('hide');
    resultScreen.classList.remove('hide');
    
    // Cálculo nota sobre 10
    const finalGrade = (score / 30) * 10;
    document.getElementById('grade').innerText = finalGrade.toFixed(1);
}

// Iniciar al cargar la ventana
window.onload = prepareNewTest;