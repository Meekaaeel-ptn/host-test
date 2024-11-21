// src/components/BatchProcessing.js


import React from "react";
import batchProcessingData from "../data/batchProcessing.json";

function BatchProcessing() {
  return (
    <div>
      <h1>Batch Processing</h1>
      <p>Current Date: {batchProcessingData.currentDate}</p>

      <h2>Batch Details</h2>
      <table>
        <thead>
          <tr>
            <th>Batch ID</th>
            <th>Client Name</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>SLA Violation</th>
          </tr>
        </thead>
        <tbody>
          {batchProcessingData.batchDetails.map((batch) => (
            <tr key={batch.batchId}>
              <td>{batch.batchId}</td>
              <td>{batch.clientName}</td>
              <td>{batch.status}</td>
              <td>{batch.startTime}</td>
              <td>{batch.endTime || "In Progress"}</td>
              <td>{batch.slaViolation ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BatchProcessing;
