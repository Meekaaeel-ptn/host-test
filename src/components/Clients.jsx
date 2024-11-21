// src/components/Clients.js
import React from "react";
import clientsData from "../data/clients.json";

function Clients() {
  return (
    <div>
      <h1>Clients</h1>
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Total Batches</th>
            <th>Violations</th>
            <th>Success Rate</th>
          </tr>
        </thead>
        <tbody>
          {clientsData.map((client) => (
            <tr key={client.clientId}>
              <td>{client.clientName}</td>
              <td>{client.contactEmail}</td>
              <td>{client.totalBatches}</td>
              <td>{client.violations}</td>
              <td>{client.successRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
