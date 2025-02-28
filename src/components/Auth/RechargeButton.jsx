import React from "react";

const RechargeButton = () => {
  const handleRecharge = () => {
    alert("Recargando saldo...");
  };

  return <button onClick={handleRecharge}>Recargar Balance</button>;
};

export default RechargeButton;
