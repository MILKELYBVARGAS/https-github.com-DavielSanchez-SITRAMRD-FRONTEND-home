import React from "react";

const ChangeCardButton = () => {
  const handleChangeCard = () => {
    alert("Cambiando tarjeta...");
  };

  return <button onClick={handleChangeCard}>Cambiar Tarjeta</button>;
};

export default ChangeCardButton;
