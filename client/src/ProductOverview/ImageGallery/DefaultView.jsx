import React from 'react';

const outer = {
  position: 'relative',
  width: '700px',
  height: '600px',
};

const middle = {
  position: 'relative',
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
};

const rightArrow = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  right: '0',
  zIndex: '1',
};
const leftArrow = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  zIndex: '1',
};


export default function DefaultView({
  photos, index, xCoord, setIndex, setXCoord,
}) {
  const inner = {
    display: 'flex',
    position: 'absolute',
    transition: '600ms',
    left: xCoord,
  };

  const RightArrow = (
    <button
      style={rightArrow}
      onClick={() => {
        setIndex(index + 1);
        setXCoord(xCoord - 700);
      }}
      type="button"
    >
      ›
    </button>
  );

  const LeftArrow = (
    <button
      style={leftArrow}
      onClick={() => {
        setIndex(index - 1);
        setXCoord(xCoord + 700);
      }}
      type="button"
    >
      ‹
    </button>
  );

  return (
    <div id="gallery-outer" style={outer}>
      {index > 0 ? LeftArrow : ''}
      <div id="gallery-middle" style={middle}>
        <div id="gallery-inner" style={inner}>
          {photos.map((photo) => (
            <img
              alt="current style of product"
              width="700"
              key={photo.url}
              src={photo.url}
            />
          ))}
        </div>
      </div>
      {index < (photos.length - 1) ? RightArrow : ''}
    </div>
  );
}
