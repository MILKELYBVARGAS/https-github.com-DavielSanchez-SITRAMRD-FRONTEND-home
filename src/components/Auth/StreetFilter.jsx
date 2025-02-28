import React, { useState } from "react";

const StreetFilter = () => {
  const [selectedStreet, setSelectedStreet] = useState("");

  return (
    <div className="mb-4">
      <label className="block font-semibold">Seleccionar Calle:</label>
      <select
        className="border p-2 w-full rounded-md"
        value={selectedStreet}
        onChange={(e) => setSelectedStreet(e.target.value)}
      >
        <option value="">Seleccione una calle</option>
        <option value="Av. Central">Av. Central</option>
        <option value="Calle 10">Calle 10</option>
        <option value="Paseo del Sol">Paseo del Sol</option>
      </select>
    </div>
  );
};

export default StreetFilter;
