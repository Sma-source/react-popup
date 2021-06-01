import React from "react";

const Popup = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {children}
        <div className="btn-contain">
          <button className="close-btn" onClick={() => setTrigger(false)}>
            Accepter
          </button>
          <button className="close-btn" onClick={() => setTrigger(false)}>
            Continuer sur le site sans accepter
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
