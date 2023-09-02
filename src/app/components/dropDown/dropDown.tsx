import React, { useState } from "react";
import "./index.scss";
import DropDownButton from "./dropDownBtn";
import DropDownMenu from "./dropDownMenu";

const DropDown = () => {
    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive((p) => !p);
    };
    return (
        <div className="dropDown">
            <DropDownButton active={active} toggleActive={toggle} />
            <DropDownMenu active={active} />
        </div>
    );
};

export default DropDown;
