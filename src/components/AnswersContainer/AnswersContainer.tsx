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
      questionText = "ventajas de utilizar typescript e inconveninentes";
      answer = "El ventaja de Typescript es que te permite de gestionar los types de la Single Page Application. Entonces cuando desarrollamos nuestra aplicación es mas facil tambien porquè Typescript sugiere (cuando escribemos el codigo) el tipo correspondiente (CTRL + Espacio, in Visual studio code). Asimismo Typescript reporte mas fácilmente los errore en el nuestro IDE, y se puede usar con Angular y Vue.js tambien. Como desventajas alguien puede preferir alternativas mas flexibles (como prop-types por ejemplo).";
      break;
    case "redux":
      questionText = "por qué utilizar Redux?";
      answer = `Redux es un sistema para gestionar el state, es basicamente una alternativa al React context`;
      break;
    case "autenticacion":
      questionText = "diferentes métodos de autenticación y seguridad de peticiones entre el frontend y el backend. (puedes nombrar y breve descripción). Cuál consideras que es el mejor según tus preferencias y el porqué?";
      answer = "dfbdfbdfbdfb";
      break;
    case "storage":
      questionText = "qué formas hay de almacenar en el navegador la información? por ejemplo un JWT? localstorage, cookies...?";
      answer = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligu";
      break;
    case "promise_all":
      questionText = "promise.all() propón un escenario donde lo utilizarías";
      answer = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligu";
      break;
    case "rxjs":
      questionText = "para qué sueles utilizar la librería rxjs? consideras que tiene algún inconveniente?";
      answer = "dfbdfbdfbdfb";
      break;
    case "optimizazion_codigo":
      questionText = "en qué te sueles fijar para optimizar tu código?";
      answer = "dfbdfbdfbdfb";
      break;
    case "testing":
      questionText = "qué herramientas utilizas para testear tu código?";
      answer = "dfbdfbdfbdfb";
      break;
  }
  return (<>
        <a id={idPage} >{idPage}</a>
        <p className={classes.question}>{questionText}</p>
        <p className={classes.answer}>{answer}</p>
      </>
  );
}

export default AnswersContainer;
