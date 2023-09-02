import React from "react";
import "./index.scss";
import DropDown from "../dropDown/dropDown";

const Patient = () => {
    return (
        <div className="pacient">
            <div className="pacient__avatar">
                <img src="/img/pacients/Rectangle 3.png" alt="Pacient" />
            </div>
            <div className="pacient__info">
                <div className="pacient__name">Рожков Денис Петрович</div>
                <div className="pacient__age">30 лет, муж</div>
            </div>
            <div>
                <DropDown />
            </div>
        </div>
    );
};

export default Patient;
