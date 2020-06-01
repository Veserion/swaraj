import React from "react";

const SizedBox: React.FunctionComponent<{ width?: number, height?: number }> = ({width, height}) =>
    <div style={{width, height}}/>;

export default SizedBox
