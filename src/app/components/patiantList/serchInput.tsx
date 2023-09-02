import React, { useState, useRef, useEffect } from "react";
import SerchButton from "./buttons/serchButton";
import FilterButton from "./buttons/filterButton";
import AddButton from "./buttons/addButton";

const SerchInput = () => {
    const [active, setActiv] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (active) {
            inputRef?.current?.focus();
        }
    }, [active]);
    return (
        <div className="patientList__serchInput">
            <div className="serch">
                <div
                    className="border"
                    style={{
                        border: active ? "1px solid #cdcdcd" : "0",
                        width: active ? "298px" : "40px",
                        borderRadius: "50px",
                    }}
                ></div>
                <label htmlFor="serch">
                    {" "}
                    <SerchButton
                        active={active}
                        onClick={() => {
                            setActiv((p) => !p);
                        }}
                    />
                </label>

                <input ref={inputRef} type="text" id="serch" />
            </div>
            <FilterButton active={active} />
            <AddButton
                active={active}
                onCancelSearch={() => {
                    setActiv((p) => !p);
                }}
            />
        </div>
    );
};

export default SerchInput;
