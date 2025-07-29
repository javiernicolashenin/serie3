// Código base inicial de aplicación web para administración de mantenimiento de vehículos

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Panel Principal</h1>
      <Card className="mb-4">
        <CardContent>
          <p>Bienvenido a la aplicación de mantenimiento de vehículos.</p>
        </CardContent>
      </Card>
    </div>
  );
}

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({ marca: "", modelo: "", patente: "" });

  useEffect(() => {
    // Simulación de carga de datos desde un backend
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  const handleAddVehicle = () => {
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    localStorage.setItem("vehicles", JSON.stringify(updatedVehicles));
    setNewVehicle({ marca: "", modelo: "", patente: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Mis Vehículos</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Marca"
          value={newVehicle.marca}
          onChange={(e) => setNewVehicle({ ...newVehicle, marca: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Modelo"
          value={newVehicle.modelo}
          onChange={(e) => setNewVehicle({ ...newVehicle, modelo: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Patente"
          value={newVehicle.patente}
          onChange={(e) => setNewVehicle({ ...newVehicle, patente: e.target.value })}
          className="border p-2 mr-2"
        />
        <Button onClick={handleAddVehicle}>Agregar</Button>
      </div>
      <ul className="space-y-2">
        {vehicles.map((v, i) => (
          <li key={i} className="border p-2 rounded">
            {v.marca} {v.modelo} - {v.patente}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Maintenance() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Mantenimientos</h2>
      {/* Aquí se listarán los mantenimientos programados */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-gray-100 p-4 shadow-md flex gap-4">
        <Link to="/" className="font-medium">Inicio</Link>
        <Link to="/vehicles" className="font-medium">Vehículos</Link>
        <Link to="/maintenance" className="font-medium">Mantenimientos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
