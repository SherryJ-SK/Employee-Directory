import React from "react";
import "./EmployeeList.css";

function EmployeeList(props) {
    return (
        <tbody className="tableList">
            <tr>
                <td>
                    <img className="image" alt={props.name} src={props.image} />
                </td>
                <td>{props.name}</td>
                <td>{props.phone}</td>
                <td>
                    <a href={props.email}>{props.email}</a>
                </td>
                <td>{props.date}</td>
            </tr>
        </tbody>
    )
};

export default EmployeeList;
