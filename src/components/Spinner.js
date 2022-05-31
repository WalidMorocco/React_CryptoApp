import React from 'react';

const Spinner = () => {
  return (
    <div class="atom-spinner">
      <div class="spinner-inner">
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-line"></div>
        <div class="spinner-circle">
          &#9679;
        </div>
      </div>
    </div>
  );
};

export default Spinner;
