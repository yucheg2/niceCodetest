import * as React from "react";
import "./index.scss";
import AddButton from "../components/patiantList/buttons/addButton";

const NavBar = ({
    activPath,
    handleChangePath,
}: {
    activPath: string;
    handleChangePath: (path: string) => void;
}) => {
    return (
        <div className="navbar">
            <nav>
                <a
                    className={
                        "navbar__link" +
                        (activPath === "notes" ? " active" : "")
                    }
                    onClick={() => handleChangePath("notes")}
                >
                    Заметки
                </a>
                <div>|</div>
                <a
                    className={
                        "navbar__link" +
                        (activPath === "consult" ? " active" : "")
                    }
                    onClick={() => handleChangePath("consult")}
                >
                    Консультации
                </a>
                <div>|</div>
                <a
                    className={
                        "navbar__link" +
                        (activPath === "video" ? " active" : "")
                    }
                    onClick={() => handleChangePath("video")}
                >
                    Видео
                </a>
                <div>|</div>
                <a
                    className={
                        "navbar__link" +
                        (activPath === "event" ? " active" : "")
                    }
                    onClick={() => handleChangePath("event")}
                >
                    Мероприятия
                </a>
            </nav>
            <div className="navbar__addButton">
                <div>
                    {" "}
                    {activPath === "notes" && <span>Новая заметка</span>}
                    {activPath === "consult" && <span>Записать</span>}
                    {(activPath === "video" || activPath === "event") && (
                        <span>Рекомендовать</span>
                    )}
                </div>
                <AddButton />
            </div>
        </div>
    );
};

export default NavBar;
