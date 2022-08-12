import React from "react";
import '../styles/Table.css';

const Table = () => {
    return (
      <div className="col s12 l6 table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Alumno</th>
              <th>Asistió</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alvin</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Si</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Si</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default Table;