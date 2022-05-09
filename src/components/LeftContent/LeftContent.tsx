import React from 'react';
import Menu from 'components/Menu/Menu';
import classes from "./LeftContent.module.scss";
import AnswersContainer from 'components/AnswersContainer/AnswersContainer';

const LeftContent = () => {
  let questions = ["typescript", "redux", "autenticacion", "storage", "promise_all", "rxjs", "optimizazion_codigo", "testing"];
  return (
      <section className={classes.container}>
          <Menu questions={questions} />
          <div className={classes.content}  >
            {questions.map((el, index)=> <article key={index} className={classes.answer}><AnswersContainer idPage={el} /></article>)}
           </div>
      </section>
  );
}

export default LeftContent;
