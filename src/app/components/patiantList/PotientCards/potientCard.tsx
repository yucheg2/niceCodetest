import * as React from "react";
import "./index.scss";
import Checkbox from "../patientSelector/checkbox";

const PotientCards = ({
    src,
    name,
    svg,
    underline,
    selected,
    checked,
    handleCheck,
    selectMode,
    id,
}: {
    id: number;
    src: string;
    name: string;
    svg?: React.ReactNode;
    underline?: boolean;
    selected?: boolean;
    selectMode: boolean;
    checked: 1 | 0;
    handleCheck: () => void;
}) => {
    return (
        <div
            className={"potientCard" + (selected ? " selected" : "")}
            style={{
                borderLeft: underline ? "5px solid #4198C5" : "0",
                paddingLeft: underline ? "5px" : "10px",
            }}
        >
            <div
                style={{
                    width: selectMode ? "auto" : "0",
                    overflow: "hidden",
                }}
            >
                <Checkbox id={id} checked={checked} handleCheck={handleCheck} />
            </div>
            <div className="potientCard__avatar">
                <img src={src} alt="potient" />
            </div>
            <div className="potientCard__name">{name}</div>

            {svg && <div>{svg}</div>}
        </div>
    );
};

export default PotientCards;
