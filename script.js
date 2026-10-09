
function explorar() {
    document.getElementById("dioses").scrollIntoView({
        behavior: "smooth"
    });
}


// INFORMACIÓN DE LOS PERSONAJES
const personajes = {

    zeus: {
        nombre: "Zeus",
        texto: `Zeus era el rey de los dioses griegos y gobernaba el cielo, el trueno y el rayo. Era hijo de los titanes Crono y Rea. Como Crono tenía miedo de que sus hijos lo destronaran, se los tragaba al nacer, pero Rea consiguió salvar a Zeus escondiéndolo. Cuando creció, Zeus liberó a sus hermanos y lideró la lucha contra los titanes, conocida como la Titanomaquia. Después de la victoria, se convirtió en el principal dios del Olimpo y repartió el dominio del mundo con sus hermanos Poseidón y Hades. También se encargaba de mantener el orden y la justicia. Sus símbolos más conocidos son el rayo, el águila y el cetro.

        REFERENCIA CULTURAL

        Zeus aparece en Percy Jackson y los dioses del Olimpo, de Rick Riordan, donde tiene un papel importante en los conflictos entre los dioses. La saga demuestra cómo estos personajes de la mitología se pueden adaptar a historias de aventuras ambientadas en la actualidad.`
    },

    poseidon: {
        nombre: "Poseidón",
        texto: `Poseidón era el dios del mar, los terremotos y los caballos, además de ser hermano de Zeus y Hades. Después de la victoria sobre los titanes, recibió el dominio de los mares. Su carácter era conocido por ser imprevisible, ya que podía provocar tormentas y agitar las aguas con su tridente. Uno de sus episodios más conocidos fue su disputa con Atenea por convertirse en el protector de Atenas. Según una versión del mito, Poseidón ofreció una fuente de agua salada, mientras que Atenea regaló un olivo, considerado más útil para los habitantes de la ciudad.

        REFERENCIA CULTURAL

        Poseidón aparece en Percy Jackson y los dioses del Olimpo, de Rick Riordan, como padre del protagonista, Percy Jackson. El joven hereda poderes relacionados con el agua, lo que muestra cómo las características de los dioses griegos se siguen utilizando para crear personajes de la literatura fantástica actual.`
    },

    atenea: {
        nombre: "Atenea",
        texto: `Atenea era la diosa de la sabiduría, la estrategia militar, las artes y los oficios. Según el mito, nació de la cabeza de Zeus, completamente adulta y armada. Se diferenciaba de otros dioses relacionados con la guerra porque destacaba por utilizar la inteligencia y la planificación en lugar de depender únicamente de la fuerza. También se convirtió en la protectora de Atenas después de vencer a Poseidón en el concurso por el patronazgo de la ciudad. Además, ayudó a varios héroes, como Perseo y Odiseo. Sus símbolos principales son la lechuza, el olivo, el casco y la lanza.

        REFERENCIA CULTURAL

        En La Odisea, atribuida a Homero, Atenea ayuda a Odiseo a regresar a Ítaca después de la guerra de Troya. Gracias a sus consejos y a su intervención, el héroe consigue superar distintas dificultades. Esta obra muestra cómo la sabiduría y la astucia eran cualidades muy valoradas en la mitología griega.`
    },

    perseo: {
        nombre: "Perseo",
        texto: `Perseo era un héroe hijo de Zeus y de la mortal Dánae. Su abuelo Acrisio intentó evitar una profecía que anunciaba que moriría a manos de su nieto, pero Perseo sobrevivió y creció hasta convertirse en un héroe. Una de sus misiones más conocidas fue conseguir la cabeza de Medusa, una de las gorgonas, cuya mirada podía convertir en piedra a quien la observara directamente. Para lograrlo, recibió ayuda divina y utilizó objetos especiales, como un casco que lo hacía invisible, unas sandalias aladas y un escudo brillante que le permitió ver el reflejo de Medusa sin mirarla directamente. Finalmente, consiguió cortarle la cabeza.

        REFERENCIA CULTURAL

        Su historia aparece adaptada en la película Furia de titanes (2010), que incorpora a Perseo y a diferentes criaturas mitológicas en una aventura fantástica. Aunque la película cambia algunos elementos del mito original, sirve como ejemplo de cómo las historias de los héroes griegos siguen inspirando al cine actual.`
    },

    icaro: {
        nombre: "Ícaro",
        texto: `Ícaro era hijo de Dédalo, un inventor famoso por construir el laberinto de Creta, donde estaba encerrado el Minotauro. El rey Minos terminó encerrando también a Dédalo y a su hijo. Para huir, Dédalo fabricó unas alas con plumas unidas mediante cera y advirtió a Ícaro de que no volara demasiado bajo ni demasiado alto. Sin embargo, Ícaro se dejó llevar por la emoción de volar y se acercó demasiado al Sol. El calor derritió la cera de sus alas y cayó al mar. Este mito suele interpretarse como una advertencia sobre los peligros de la imprudencia y de querer superar los límites sin pensar en las consecuencias.

        REFERENCIA CULTURAL

        Una idea parecida aparece en Frankenstein, de Mary Shelley, donde Víctor Frankenstein intenta ir más allá de los límites de la ciencia y termina sufriendo graves consecuencias. Aunque las dos historias son diferentes, ambas hacen reflexionar sobre la ambición y la responsabilidad.`
    },

    orfeo: {
        nombre: "Orfeo",
        texto: `Orfeo era un músico y poeta legendario cuya música era tan hermosa que podía emocionar a personas, animales e incluso a la naturaleza. Estaba casado con Eurídice, pero ella murió después de sufrir la picadura de una serpiente. Incapaz de aceptar su pérdida, Orfeo decidió descender al inframundo para intentar recuperarla. Con su lira y su canto consiguió conmover a Hades y Perséfone, quienes le permitieron llevarse a Eurídice con una condición: debía caminar delante de ella y no girarse a mirarla hasta que ambos hubieran salido del inframundo. Sin embargo, justo antes de llegar a la salida, Orfeo dudó y se giró, por lo que Eurídice desapareció y tuvo que quedarse en el mundo de los muertos. Este mito trata sobre el amor, la pérdida y la dificultad de confiar.

        REFERENCIA CULTURAL

        L'Orfeo, una ópera compuesta por Claudio Monteverdi y estrenada en 1607, adapta esta historia. La obra demuestra cómo el mito griego ha servido de inspiración para crear nuevas obras artísticas y musicales.`
    },

    aquiles: {
        nombre: "Aquiles",
        texto: `Aquiles fue uno de los guerreros más importantes de la guerra de Troya y el principal héroe de la Ilíada, atribuida a Homero. Era hijo de la nereida Tetis y del mortal Peleo, y destacaba por su fuerza, su velocidad y su habilidad en el combate. Durante la guerra, se enfadó con Agamenón y decidió retirarse de la lucha. Sin embargo, regresó después de la muerte de su amigo Patroclo y se enfrentó a Héctor, el gran defensor de Troya, al que terminó derrotando. La famosa historia de su talón vulnerable pertenece a tradiciones posteriores y no se cuenta de esa forma en la Ilíada. Aquiles representa tanto la valentía y la búsqueda de gloria como las consecuencias del orgullo y la ira.

        REFERENCIA CULTURAL

        En Troya (2004), una película que adapta libremente los acontecimientos de la guerra, aparece su enfrentamiento con Héctor. La película permite ver cómo el personaje sigue presente en el cine y cómo los relatos heroicos griegos continúan despertando interés.`
    },

    hercules: {
        nombre: "Hércules",
        texto: `Hércules, llamado Heracles en griego, era hijo de Zeus y de la mortal Alcmena. Era conocido por su fuerza extraordinaria, pero también tuvo que enfrentarse a muchos problemas. Hera, esposa de Zeus, sentía odio hacia él y, según el mito, provocó que sufriera un episodio de locura que terminó en una tragedia. Para expiar sus actos, Hércules tuvo que ponerse al servicio del rey Euristeo, quien le encargó doce trabajos que parecían imposibles. Entre ellos estaban derrotar al león de Nemea, acabar con la hidra de Lerna y capturar a Cerbero, el perro que custodiaba el inframundo. Después de superar numerosas pruebas, Hércules terminó alcanzando la inmortalidad en el Olimpo.

        REFERENCIA CULTURAL

        La película de animación Hércules (1997), de Disney, adapta libremente sus mitos. Aunque cambia bastantes detalles de la historia original, mantiene la idea de un héroe que debe superar obstáculos y demostrar su valor.`
    },

    minotauro: {
        nombre: "El Minotauro",
        texto: `El Minotauro era una criatura con cuerpo humano y cabeza de toro. Según el mito, era hijo de Pasífae, esposa del rey Minos, y de un toro relacionado con Poseidón. Para ocultarlo, Minos ordenó al inventor Dédalo construir un laberinto del que fuera muy difícil escapar. Como parte del castigo impuesto a Atenas, se enviaban jóvenes a Creta para que entraran en el laberinto y fueran devorados por el monstruo. El héroe Teseo decidió enfrentarse a él para acabar con aquella situación. Con la ayuda de Ariadna, que le entregó un hilo para encontrar la salida, consiguió matar al Minotauro y escapar del laberinto.

        REFERENCIA CULTURAL

        El laberinto del fauno (2006), de Guillermo del Toro, no adapta directamente el mito del Minotauro, pero utiliza un mundo fantástico lleno de criaturas, pruebas y espacios misteriosos que recuerda a algunos elementos de la mitología griega.`
    },

    medusa: {
        nombre: "Medusa",
        texto: `Medusa era una de las tres gorgonas y, a diferencia de sus hermanas, era mortal. Se la representaba con serpientes en lugar de cabello y una mirada capaz de convertir en piedra a quien la observara directamente. Su historia tiene diferentes versiones. En la narrada por el poeta romano Ovidio, Medusa había sido una joven que terminó transformada por Atenea. El héroe Perseo recibió la misión de conseguir su cabeza y, para vencerla sin quedar petrificado, utilizó el reflejo de un escudo pulido mientras ella dormía. Después de cortarle la cabeza, de su sangre nacieron Pegaso y Crisaor, según el mito. Más adelante, la cabeza de Medusa fue utilizada como símbolo protector en el escudo de Atenea.

        REFERENCIA CULTURAL

        En Harry Potter y la cámara secreta, de J. K. Rowling, aparece un basilisco cuya mirada puede matar y cuyas víctimas pueden quedar petrificadas si lo ven indirectamente, por ejemplo, mediante un reflejo. No es el mismo monstruo que Medusa, pero ambos relatos utilizan la mirada como un poder peligroso.`
    }
};


// ABRIR LA FICHA DE UN PERSONAJE

function mostrarPersonaje(id) {
    const personaje = personajes[id];

    if (!personaje) {
        return;
    }

    const partes = personaje.texto.split(/REFERENCIA CULTURAL/i);

    document.getElementById("personaje-titulo").textContent =
        personaje.nombre;

    document.getElementById("personaje-texto").textContent =
        partes[0].trim();

    const referencia = document.getElementById("personaje-referencia");
    const bloqueReferencia = document.querySelector(".referencia-cultural");

    if (partes.length > 1 && partes[1].trim()) {
        referencia.textContent = partes.slice(1).join(" ").trim();
        bloqueReferencia.style.display = "block";
    } else {
        bloqueReferencia.style.display = "none";
    }

    document.getElementById("personaje-modal").style.display = "flex";

    document.body.style.overflow = "hidden";
}


// CERRAR LA FICHA
function cerrarPersonaje() {
    document.getElementById("personaje-modal").style.display = "none";

    document.body.style.overflow = "";
}


// CERRAR AL PULSAR FUERA DE LA VENTANA
document.addEventListener("click", function(event) {
    const modal = document.getElementById("personaje-modal");

    if (event.target === modal) {
        cerrarPersonaje();
    }
});


// TEST DEL OLIMPO
function comenzarQuiz() {
    const preguntas = [
        {
            pregunta: "¿Quién era el rey de los dioses?",
            opciones: ["Poseidón", "Zeus", "Hades", "Ares"],
            correcta: 1
        },
        {
            pregunta: "¿Qué regaló Atenea a la ciudad de Atenas?",
            opciones: ["Un caballo", "Una espada", "Un olivo", "Un barco"],
            correcta: 2
        },
        {
            pregunta: "¿Qué héroe derrotó a Medusa?",
            opciones: ["Aquiles", "Orfeo", "Perseo", "Hércules"],
            correcta: 2
        },
        {
            pregunta: "¿Por qué cayó Ícaro al mar?",
            opciones: [
                "Porque perdió su espada",
                "Porque el Sol derritió la cera de sus alas",
                "Porque lo empujó Dédalo",
                "Porque se cayó del laberinto"
            ],
            correcta: 1
        },
        {
            pregunta: "¿A quién intentó rescatar Orfeo del inframundo?",
            opciones: ["Atenea", "Medusa", "Eurídice", "Tetis"],
            correcta: 2
        },
        {
            pregunta: "¿Qué héroe se enfrentó a Héctor en la guerra de Troya?",
            opciones: ["Aquiles", "Perseo", "Teseo", "Ícaro"],
            correcta: 0
        },
        {
            pregunta: "¿Cuántos trabajos tuvo que realizar Hércules?",
            opciones: ["Siete", "Diez", "Doce", "Quince"],
            correcta: 2
        },
        {
            pregunta: "¿Quién ayudó a Teseo a salir del laberinto?",
            opciones: ["Eurídice", "Ariadna", "Medusa", "Rea"],
            correcta: 1
        },
        {
            pregunta: "¿Qué instrumento tocaba Orfeo?",
            opciones: ["La lira", "La flauta", "El tambor", "La trompeta"],
            correcta: 0
        },
        {
            pregunta: "¿Qué criatura tenía cuerpo humano y cabeza de toro?",
            opciones: ["El basilisco", "La hidra", "El Minotauro", "Cerbero"],
            correcta: 2
        }
    ];

    let puntuacion = 0;

    for (let i = 0; i < preguntas.length; i++) {
        const p = preguntas[i];

        const respuesta = prompt(
            "PREGUNTA " + (i + 1) + " DE " + preguntas.length +
            "\n\n" + p.pregunta +
            "\n\n1. " + p.opciones[0] +
            "\n2. " + p.opciones[1] +
            "\n3. " + p.opciones[2] +
            "\n4. " + p.opciones[3] +
            "\n\nEscribe el número de tu respuesta. Pulsa Cancelar para salir."
        );

        if (respuesta === null) {
            return;
        }

        if (respuesta.trim() !== "" &&
            Number(respuesta) - 1 === p.correcta) {
            puntuacion++;
        }
    }

    let mensaje;

    if (puntuacion === 10) {
        mensaje = "¡Perfecto! Conoces muy bien la mitología griega.";
    } else if (puntuacion >= 7) {
        mensaje = "¡Muy bien! Has aprendido bastante.";
    } else if (puntuacion >= 5) {
        mensaje = "No está mal, pero puedes repasar algunos personajes.";
    } else {
        mensaje = "Te toca volver a explorar el Olimpo y probar otra vez.";
    }

    alert(
        "RESULTADO DEL OLIMPO\n\n" +
        "Has acertado " + puntuacion + " de 10 preguntas.\n\n" +
        mensaje
    );
}