import React from 'react';
import PropTypes from 'prop-types';

const IsOnline = ({message, bgColor, txColor, wd, ht}) => {
  const online = window.online;
  return (
    <div style={{
      display: `${online ? 'block' : 'none'}`,
      position: 'fixed',
      top: '0',
      background: bgColor || 'red',
      color: txColor || 'white',
      width: wd || '100%',
      height: ht || '50px',
      }}>
      {message}
    </div>
  )
};

IsOnline.propTypes = {
  message: PropTypes.string.isRequired,
  styles: PropTypes.string,
};


export default IsOnline;
