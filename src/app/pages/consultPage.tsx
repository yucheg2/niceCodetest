import React, { useState } from "react";
import ConsultItem from "../components/consultItem/consultItem";
import PageLayout from "../layouts/pageLayout";

const ConsultPage = () => {
    const [mock, setMock] = useState([
        {
            type: "online",
            date: "15.01.2019, 12:30-13:00",
            selected: true,
            confirmd: true,
        },
        {
            type: "online",
            date: "15.01.2019, 12:30-13:00",
            selected: false,
            confirmd: true,
        },
        {
            type: "personal",
            date: "15.01.2019, 12:30-13:00",
            selected: false,
            confirmd: false,
        },
    ]);
    const handleSelect = (id: number) => {
        setMock((p) =>
            p.map((v, ind) => {
                if (id === ind) {
                    v.selected = !v.selected;
                }
                return v;
            })
        );
    };
    return (
        <PageLayout>
            {mock.map((v, i) => (
                <ConsultItem
                    {...v}
                    key={v.date + i}
                    handleSelect={() => handleSelect(i)}
                />
            ))}
        </PageLayout>
    );
};

export default ConsultPage;
