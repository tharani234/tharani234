import React from "react";
import {useState,useEffect} from "react";
function Student_second(){
    const [student,setStudents]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/departments")
            .then(res=>res.json())
            .then(
                (result)=>{
                    setStudents(result);
                }
            );
    });
    return(
        <div>
            <h2>Second student data</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Location</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>Balaji</td>
                    <td>300</td>
                    <td>coimbatore</td>
                    <td>80000</td>
                </tr>
                <tr>
                    <td>Arun</td>
                    <td>287</td>
                    <td>chennai</td>
                    <td>85000</td>
                </tr>
                <tr>
                    <td>Hari</td>
                    <td>119</td>
                    <td>madurai</td>
                    <td>60000</td>
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
export default Student_second
