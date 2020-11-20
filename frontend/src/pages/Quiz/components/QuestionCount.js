import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCount.css'
function QuestionCount(props) {
  return (
    <div className="questionCount">
      <p>Pregunta <span>{props.counter}</span> de <span>{props.total}</span></p>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
