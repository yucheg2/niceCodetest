import React, { useState } from "react";
import SerchInput from "./serchInput";
import "./index.scss";
import PotientCard from "./PotientCards/potientCard";
import PatientSelector from "./patientSelector/patientSelector";

const PatientList = () => {
    const [selectMode, setSelectMode] = useState(false);
    const [mock, setMock] = useState([
        {
            src: "/img/pacients/Oval.png",
            name: "Кравцова Александра",
            checked: false,
            svg: (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.8812 0.641118C15.7427 0.486119 15.5243 0.444557 15.3434 0.523619L0.280984 7.11732C0.11411 7.19044 0.00442342 7.35388 0.000360952 7.53638C-0.00370152 7.71856 0.0984852 7.88669 0.262234 7.96731L3.85877 9.73605L4.75501 15.1129C4.78407 15.3169 4.94438 15.481 5.15313 15.5107C5.30313 15.5322 5.45219 15.4794 5.55532 15.3732L8.39467 12.5338L12.4465 15.4282C12.5765 15.5207 12.744 15.541 12.8915 15.4826C13.0393 15.4241 13.1474 15.2944 13.1787 15.1385L15.9912 1.04486C16.019 0.905179 15.983 0.755492 15.8812 0.641118ZM4.23002 8.87387L1.5816 7.57138L12.0446 2.9911L4.23002 8.87387ZM5.69688 10.2673L5.26094 12.447L4.79064 9.62511L10.5397 5.29733L5.82469 10.0282C5.75844 10.0945 5.71438 10.1807 5.69688 10.2673ZM5.98219 13.6204L6.47406 11.162L7.62124 11.9813L5.98219 13.6204ZM12.4012 14.2435L6.87843 10.2989L14.7681 2.38298L12.4012 14.2435Z"
                        fill="#4198C5"
                    />
                </svg>
            ),
            underline: true,
        },
        {
            src: "/img/pacients/Rectangle 3.png",
            name: "Рожков Денис",
            checked: false,
            selected: true,
        },
        {
            src: "/img/pacients/Oval.png",
            name: "Кравцова Александра",
            checked: false,
            svg: (
                <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.58069 2.86795C10.2252 1.71068 11.8562 1.71068 12.5007 2.86795L12.5008 2.86802L19.8609 16.0888L19.861 16.0889C20.4823 17.2047 19.7253 18.6646 18.4009 18.6646H3.68047C2.3561 18.6646 1.59909 17.2047 2.22041 16.0889L2.22046 16.0888L9.58064 2.86802L9.58069 2.86795ZM10.5791 3.424L3.21896 16.6448L3.21892 16.6449C2.98705 17.0612 3.29835 17.5217 3.68047 17.5217H18.4009C18.7831 17.5217 19.0943 17.0612 18.8625 16.6449L18.8624 16.6448L11.5023 3.424C11.2935 3.04914 10.7879 3.04914 10.5791 3.424ZM11.0417 7.27547C11.5129 7.27547 11.894 7.68697 11.8801 8.18223L11.7415 13.2659C11.7311 13.6665 11.4193 13.9833 11.0382 13.9833C10.6571 13.9833 10.3453 13.6628 10.3349 13.2659L10.1998 8.18223C10.1894 7.68697 10.567 7.27547 11.0417 7.27547ZM10.1562 15.5527C10.1562 16.0589 10.5478 16.4704 11.0293 16.4704C11.5109 16.4704 11.9024 16.0589 11.9024 15.5527C11.9024 15.0465 11.5109 14.635 11.0293 14.635C10.5478 14.635 10.1562 15.0465 10.1562 15.5527Z"
                        fill="#EC8532"
                    />
                </svg>
            ),
        },
        {
            src: "/img/pacients/Oval2.png",
            name: "Диброва Алевтина",
            checked: false,
        },
        { src: "/img/Path 2.png", name: "Иванов Дмитрий", checked: false },
        {
            src: "/img/pacients/Oval3.png",
            name: "nosikov@list.ru",
            checked: false,
        },
        {
            src: "/img/pacients/Oval4.png",
            name: "Форс Александр",
            checked: false,
        },
        {
            src: "/img/pacients/Oval5.png",
            name: "Ахмедова Артур",
            checked: false,
        },
        {
            src: "/img/pacients/Oval6.png",
            name: "Блажевич Игорь",
            checked: false,
        },
        {
            src: "/img/pacients/Oval7.png",
            name: "Валиева Руфина",
            checked: false,
        },
        {
            src: "/img/pacients/Oval8.png",
            name: "Волошина Виктория",
            checked: false,
        },
        {
            src: "/img/pacients/Oval8.png",
            name: "Волошина Виктория",
            checked: false,
        },
    ]);

    const handleCheckAll = () => {
        if (mock.some((v) => v.checked === false)) {
            setMock((p) => p.map((v) => ({ ...v, checked: true })));
        } else {
            setMock((p) => p.map((v) => ({ ...v, checked: false })));
        }
    };
    const handleCheck = (id: number) => {
        setMock((p) => {
            const newArr = [...p];
            newArr[id].checked = !newArr[id].checked;
            return newArr;
        });
    };
    const getAllChec = () => (mock.some((v) => v.checked === false) ? 0 : 1);
    return (
        <div className="patientList">
            <SerchInput />
            <PatientSelector
                handleAllCheck={handleCheckAll}
                handleSelectMode={() => {
                    setSelectMode((p) => !p);
                }}
                allChecked={getAllChec()}
                selectMode={selectMode}
                patientLength={
                    selectMode
                        ? mock.reduce((acc, v) => {
                              if (v.checked) {
                                  acc++;
                              }
                              return acc;
                          }, 0)
                        : mock.length
                }
            />
            {mock.map((user, id) => {
                return (
                    <PotientCard
                        selectMode={selectMode}
                        id={id}
                        {...user}
                        checked={mock[id].checked ? 1 : 0}
                        handleCheck={() => handleCheck(id)}
                        key={user.src + id}
                    />
                );
            })}
        </div>
    );
};

export default PatientList;
