import React from 'react';
import Button from '../../atomic/button';

const LabelButton = ({ label, buttonText, onClick }) => (
  <div>
    <div>{label}</div>
    <Button
      type="button"
      text={buttonText}
      onClick={onClick}
    />
  </div>
);

export default LabelButton;
