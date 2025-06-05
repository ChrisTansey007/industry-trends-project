import React from 'react';
import colors from '../constants/colors';

function Modal({ title, children, onClose, headerColor = colors.darkBlue }) {
  const lightText = headerColor !== colors.yellow && headerColor !== colors.green;
  const textColor = lightText ? colors.white : colors.darkBlue;
  return (
    <>
      <div className="modal-backdrop open" onClick={onClose}></div>
      <div className="modal-container open bg-white rounded-xl shadow-2xl flex flex-col">
        <div
          className="p-4 md:p-5 flex justify-between items-center rounded-t-xl"
          style={{ backgroundColor: headerColor, color: textColor }}
        >
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <button
            className="text-2xl font-bold leading-none hover:opacity-75"
            onClick={onClose}
            style={{ color: textColor }}
          >
            ×
          </button>
        </div>
        <div className="modal-content-area p-6" style={{ color: colors.darkBlue }}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
