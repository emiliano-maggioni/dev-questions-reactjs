import React from 'react';
import classes from "./AnswersContainer.module.scss";

type Props = {
  idPage: string;
}

const AnswersContainer = ({ idPage }: Props) => {

  let questionText = "";
  let answer = "";
  switch (idPage) {
    case "typescript":
      questionText = "1) Ventajas de utilizar typescript e inconvenientes";
      answer = "El ventaja principal de Typescript es que te permite de gestionar los types de la Single Page Application. Entonces cuando desarrollamos nuestra aplicación es mas facil tambien porquè Typescript sugiere (cuando escribemos el codigo) el tipo de dato correspondiente (CTRL + Espacio, in Visual studio code). Asimismo Typescript reporte mas fácilmente los errores en el nuestro IDE, y se puede usar con Angular y Vue.js tambien. Como desventajas alguien puede preferir alternativas mas flexibles (como prop-types por ejemplo).";
      break;
    case "redux":
      questionText = "2) Por qué utilizar Redux?";
      answer = `Redux es un sistema para gestionar el state, es basicamente una alternativa al React context que es muy útil pero puede tener dos desventajas como que en una SPA muy grande podrìamos tener muchos context anidados, en vez Redux te permite una gestion mas clara (pensemos a aplicaciones muy grandes, como para un banco) y Redux es mejor ademas como prestaciones.`;
      break;
    case "autenticacion":
      questionText = "3) Diferentes métodos de autenticación y seguridad de peticiones entre el frontend y el backend. (puedes nombrar y breve descripción). Cuál consideras que es el mejor según tus preferencias y el porqué?";
      answer = "Session-based autenticación, cookie-based autenticación, token-based autenticación, bearer autenticación. Session-based autenticaciòn despues que el usuario ha enviado los datos para el login, el server genera una session y ademas client-side se crea una session asociada a la session entre el server. La cookie-based autenticaciòn es solo client-side y entonce un usuario puede modificar la session si quieres (por esta racon no es un método muy seguro). Por ultimo el JWT token permite la autenticaciòn con un token compuesto por tres partes (header, payload y signature), se usa mucho (yo tambien uso el JWT token entre mis SPA) porquè es mas seguro (se puede usar con la autenticaciòn Bearer que cada vez que tu haces una llamada controla el token, puesto entre el header de la llamada), y no tiene problema de escalabilidad (en vez la autenticaciòn session-based los tienes porque haces una nueva session ademas sobre el server, para cada usuario).";
      break;
    case "storage":
      questionText = "4) Qué formas hay de almacenar en el navegador la información? por ejemplo un JWT? localstorage, cookies...?";
      answer = "Podemos almacenar los datos en formas como el localStorage, sessionStorage, los cookies, que cada uno tiene diferencias.Los datos entre el sessionStorage se eliminan cerrando el browser, a diferencia del localStorage que persiste y no tiene tiempo de caducidad, ademas el cookie persiste (si establecemos una fecha de caducidad). El JWT es un open standard, una string de codigo compuesto por tres partes que, pero no sirve para almacenar información.";
      break;
    case "promise_all":
      questionText = "5) promise.all() propón un escenario donde lo utilizarías";
      answer = "Promise.all permite de tomar un array de promesas (o un iterable) y devolver una promise, por ejemplo:";
      break;
    case "rxjs":
      questionText = "6) Para qué sueles utilizar la librería rxjs? consideras que tiene algún inconveniente?";
      answer = "Yo se que Rxjs sirve para gestionar cosas como asynchronous events, callbacks y event-based programs, pero aún no la he usada con ReactJS";
      break;
    case "optimizazion_codigo":
      questionText = "7) En qué te sueles fijar para optimizar tu código?";
      answer = "Intento que el código sea lo más limpio posible, eliminando código redundante por ejemplo, innecessarios imports, console.log(), compruebo que no haya renderizadores superfluos, en este caso modifico el código para tener los mismos resultados pero con menos render, agrego comentarios y nombres explicativos (a variables, componente, etc.), agrego un reset.css file, elimino el código no utilizado (comentado o superfluo) y asimismo muevo el codigo donde es mejor (por ejemplo una línea que está entre un forEach pero que puede ser escrita en el exterior).";
      break;
    case "testing":
      questionText = "8) Qué herramientas utilizas para testear tu código?";
      answer = "Hago muchos usability testing y compatibility testing, asimismo yo he usado Jest para hacer test algunos unit y integration tests, y por ultimo los SPA que hago son probados por el cliente (beta testing).";
      break;
  }
  return (<>
        <a id={idPage} >{idPage}</a>
        <p className={classes.question}>{questionText}</p>
        <p className={classes.answer}>{answer}
        {(idPage == "promise_all") && (  <><pre>{`          
                let firstpromise = Promise.resolve("Hola");
                let secondpromise = Promise.resolve(12345);
                
                const promises = Promise.all([firstpromise,secondpromise]);
                promises.then((values) => console.log("PROMISES OK"))
                .catch((error) =>  console.log("THERE'S AN ERROR."));
          `}</pre>
        En vez de firstpromise y secondpromise podriamos poner promises relacionadas a la respuesta de alguna llamada a una API por ejemplo.</>
        )}
        </p>
      </>
  );
}

export default AnswersContainer;
