import * as React from "react";

const AddButton = ({
    active,
    onCancelSearch,
}: {
    active?: boolean;
    onCancelSearch?: () => void;
}) => {
    return (
        <button
            className="addButton"
            onClick={active ? onCancelSearch : () => {}}
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: active ? "rotate(45deg)" : "rotate(0deg" }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99792 6.04032H13.0262C13.564 6.04032 14 6.4763 14 7.01411C14 7.55192 13.564 7.9879 13.0262 7.9879H7.99792V12.9875C7.99792 13.5467 7.54461 14 6.98543 14C6.42625 14 5.97294 13.5467 5.97294 12.9875V7.9879H0.97379C0.435981 7.9879 0 7.55192 0 7.01411C0 6.4763 0.435981 6.04032 0.973791 6.04032H5.97294V1.01249C5.97294 0.453305 6.42625 0 6.98543 0C7.54461 0 7.99792 0.453306 7.99792 1.01249V6.04032Z"
                    fill="#616F82"
                />
            </svg>
        </button>
    );
};

export default AddButton;
