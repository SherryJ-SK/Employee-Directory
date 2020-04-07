import React from "react";

function Container(props) {
    return <div className="wrapper">{props.children}</div>;
};

export default Container;