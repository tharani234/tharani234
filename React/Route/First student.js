import React from "react";
import {useState,useEffect} from "react";
function Student_one(){
    const [student,setStudents]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/employees")
            .then(res=>res.json())
            .then(
                (result)=>{
                    setStudents(result);
                }
            );
    });
    return(
        <div>
            <h2>First student data</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Location</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>Anu</td>
                    <td>228</td>
                    <td>chennai</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>Hema</td>
                    <td>108</td>
                    <td>madurai</td>
                    <td>50000</td>
                </tr>
                <tr>
                    <td>Atchaya</td>
                    <td>312</td>
                    <td>bangalore</td>
                    <td>25000</td>
                </tr>

                </thead>
            <tbody>
            {student.map(emp=>(
                <tr key={emp.Id}>
                    <td>{emp.name}</td>
                    <td>{emp.id}</td>
                    <td>{emp.location}</td>
                    <td>{emp.salary}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </div>
    );
}
export default Student_one
