import React from 'react';
import '../styles/FancyText.css';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'fancy-text-title' : 'fancy-text'}>
      {text}
    </div>
  );
}

export default FancyText;
