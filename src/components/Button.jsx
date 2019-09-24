import React from 'react';

const Button = props => {
  const { text } = props;
  return (
    <div>
      <button type="button">{props.text}</button>
      <button type="button">{text}</button>
    </div>
  );
};

export default Button;
