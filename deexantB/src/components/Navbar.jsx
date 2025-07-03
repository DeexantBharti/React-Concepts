import { useState } from "react";

export default function Navbar({ username }) {
  
const users = ['Deexant', 'Ravi', 'Aman'];

  return (
    <>
    <nav>Welcome to navbar</nav>
      <h4>Welcom, {username}</h4>
    
      <div>
        <ul>
          {users.map((u,index) => (
            <li> {u} </li>
          ))}
      </ul>
      </div>
  
      

      <h1>Table content for the amazingly biggest navbar</h1>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>23</td>
          </tr>
        </tbody>
      </table>

    </>
  );
}