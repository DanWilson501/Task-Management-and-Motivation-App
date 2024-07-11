import React from 'react';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'fancy-text-title' : 'fancy-text'}>
      {text}
    </div>
  );
}

export default FancyText;
