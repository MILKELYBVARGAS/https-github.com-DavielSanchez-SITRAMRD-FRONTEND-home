import React, { useState } from "react";

const Filters = () => {
  const [street, setStreet] = useState("");

  return (
    <div className="filters">
      <label>Seleccionar Calle:</label>
      <select value={street} onChange={(e) => setStreet(e.target.value)}>
        <option value="">--Seleccionar--</option>
        <option value="Avenida Principal">Avenida Principal</option>
        <option value="Calle Secundaria">Calle Secundaria</option>
        <option value="Boulevard Central">Boulevard Central</option>
      </select>
    </div>
  );
};

export default Filters;
