import React from "react";

const Popup = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
