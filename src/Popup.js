import React from "react";

const Popup = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="wrapper">
      <div className="popup">
        {children}
        <h3 className="title-popup">Le site respecte votre vie privée</h3>
        <p className="text-popup">
          Ce site utilise des cookies. Vous avez la possibilité de déterminer
          les cookies que vous autorisez ou refusez.
        </p>
        <div className="btn">
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
