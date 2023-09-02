import React, { useState } from "react";

const DropDownMenu = ({ active }: { active: boolean }) => {
    return (
        <div className="dropDown__menu" style={{ opacity: active ? "1" : "0" }}>
            <button>Изменить</button>
            <button>Удалить</button>
        </div>
    );
};

export default DropDownMenu;
