import React from "react";

const BalancePanel = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold">Tu Saldo</h2>
      <p className="text-xl font-bold">$500.00</p>
      <p className="text-sm text-gray-600">Última Recarga: $200.00</p>
      <p className="text-sm text-gray-600">Último Viaje: $30.00</p>
    </div>
  );
};

export default BalancePanel;
