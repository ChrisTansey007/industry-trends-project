import React from 'react';

function Modal({ title, children, onClose, headerColor = '#073B4C' }) {
  const lightText = headerColor !== '#FFD166' && headerColor !== '#06D6A0';
  const textClass = lightText ? 'text-white' : 'text-[#073B4C]';
  return (
    <>
      <div className="modal-backdrop open" onClick={onClose}></div>
      <div className="modal-container open bg-white rounded-xl shadow-2xl flex flex-col">
        <div className={`p-4 md:p-5 flex justify-between items-center rounded-t-xl ${textClass}`} style={{backgroundColor: headerColor}}>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <button className={`text-2xl font-bold leading-none hover:opacity-75 ${textClass}`} onClick={onClose}>×</button>
        </div>
        <div className="modal-content-area p-6 text-[#073B4C]">{children}</div>
      </div>
    </>
  );
}

export default Modal;
