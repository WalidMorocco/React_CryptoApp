import React from 'react';

export const Thumbnail = ({ description, image, width = 50 }) => {
  return (
    <div className="thumbnail">
      <img alt={description} src={image} height={width} />
    </div>
  );
};
