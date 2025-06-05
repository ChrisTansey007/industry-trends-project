import React from 'react';
import colors from '../constants/colors';

function Modal({ title, children, onClose, headerColor = colors.darkBlue, onPrev, onNext }) {
  const lightText = headerColor !== colors.yellow && headerColor !== colors.green;
  const textColor = lightText ? colors.white : colors.darkBlue;
  return (
    <>
      <div className="modal-backdrop open" onClick={onClose}></div>
      <div className="modal-container open dark-card rounded-xl shadow-2xl flex flex-col">
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
          {(onPrev || onNext) && (
            <div className="flex justify-between mt-6">
              {onPrev ? (
                <button onClick={onPrev} className="px-3 py-1 rounded bg-gray-200">Previous</button>
              ) : <span />}
              {onNext && (
                <button onClick={onNext} className="px-3 py-1 rounded bg-gray-200">Next</button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
