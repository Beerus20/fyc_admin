import React from "react";
import "./index.css";

const Client = () => {
  return (
    <div className="gestionnaire_page">
      <table>
        <thead>
          <tr>
            <th>Nom du client</th>

            <th>Date d'inscription</th>

            <th>Nom du villa</th>

            <th>Montant payer</th>
          </tr>
        </thead>
      </table>
      <tbody></tbody>
    </div>
  );
};

export default Client;
