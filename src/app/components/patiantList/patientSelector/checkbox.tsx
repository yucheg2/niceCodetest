import * as React from "react";

const Checkbox = ({
    id,
    checked,
    handleCheck,
}: {
    id: number;
    checked: 1 | 0;
    handleCheck: () => void;
}) => {
    return (
        <div
            style={{
                paddingTop: "5px",
                marginRight: "6px",
            }}
        >
            {" "}
            <input
                type="checkbox"
                name="all"
                id={"checkbox" + id}
                value={checked}
                onChange={handleCheck}
                style={{
                    display: "none",
                }}
            />
            <label htmlFor={"checkbox" + id}>
                {checked ? (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="18" height="18" rx="4" fill="#4198C5" />
                        <rect width="18" height="18" rx="4" stroke="#CDCDCD" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.94899 10.4186L6.14963 8.58088L5 9.75505L7.00133 11.7994L8.17667 13L13 5.95263L11.6679 5L7.94899 10.4186Z"
                            fill="white"
                        />
                    </svg>
                ) : (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="17"
                            height="17"
                            rx="3.5"
                            fill="white"
                            stroke="#CDCDCD"
                        />
                    </svg>
                )}
            </label>
        </div>
    );
};

export default Checkbox;
