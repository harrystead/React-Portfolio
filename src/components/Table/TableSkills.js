import React from "react";
import { Table } from "react-bootstrap";

const TableSkills = () => {
  return (
    <div className="table-skills">
        <h2>Skills</h2>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Front-End</th>
            <th>Back-End</th>
            <th>Process</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>Node | Express</td>
            <td>Object-Oriented Programming</td>
          </tr>
          <tr>
            <td>Vanilla JavaScript</td>
            <td>MySQL | Sequelize</td>
            <td>Test-Driven Development</td>
          </tr>
          <tr>
            <td>CSS | Bootstrap</td>
            <td>MongoDB</td>
            <td>Agile Development</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableSkills;
