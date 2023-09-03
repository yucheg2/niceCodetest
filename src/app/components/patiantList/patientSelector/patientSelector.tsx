import * as React from "react";
import "./index.scss";

const PatientSelector = ({
    patientLength,
    selectMode,
    handleSelectMode,
    allChecked,
    handleAllCheck,
}: {
    patientLength: number;
    selectMode: boolean;
    handleSelectMode: () => void;
    handleAllCheck: () => void;
    allChecked: number;
}) => {
    return (
        <div className="patientSelector">
            <div
                className="patientSelector__checkbox"
                style={{
                    left: selectMode ? "0" : "-60px",
                }}
            >
                <div>
                    <input
                        type="checkbox"
                        name="all"
                        id="checkbox"
                        value={allChecked}
                        onChange={handleAllCheck}
                    />
                    <label
                        htmlFor="checkbox"
                        style={{ opacity: selectMode ? "1" : "0" }}
                    >
                        {allChecked ? (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    rx="4"
                                    fill="#4198C5"
                                />
                                <rect
                                    width="18"
                                    height="18"
                                    rx="4"
                                    stroke="#CDCDCD"
                                />
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
                    <div style={{ marginRight: "10px" }}>Все</div>
                    <div
                        className="patientSelector__number"
                        style={{
                            backgroundColor: selectMode ? "#4198C5" : "#616f82",
                        }}
                    >
                        {allChecked ? 213 : patientLength}
                    </div>
                </div>
            </div>
            <div
                className="patientSelector__selectActions"
                style={{ right: selectMode ? "10px" : "-145px" }}
            >
                <div
                    className="patientSelector__select"
                    style={{ opacity: selectMode ? "0" : "1" }}
                    onClick={handleSelectMode}
                >
                    Выбрать
                </div>
                <div
                    className="patientSelector__act"
                    style={{ opacity: selectMode ? "1" : "0" }}
                >
                    Действия
                </div>
                <div
                    className="patientSelector__cancel"
                    onClick={handleSelectMode}
                    style={{ opacity: selectMode ? "1" : "0" }}
                >
                    Отменить
                </div>
            </div>
        </div>
    );
};

export default PatientSelector;
