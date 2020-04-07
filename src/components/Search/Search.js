import React from "react";
import "./Search.css";

function Search(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search Employee"
                    className="mr-sm-2"
                    name="name"
                    value={props.name}
                    onChange={props.inputChange}
                />
            </form>
            {/* <p>Hello {props.name}</p> */}
        </div>
    );
}

export default Search;
