import React from "react";
import "../EmployeeList/EmployeeList.css";

function ListHeader(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={() => props.changeOrder()}>
                        Name
                        <i className={props.iconShow}></i>
                    </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            {props.children}
        </table >
    )
};

export default ListHeader;
