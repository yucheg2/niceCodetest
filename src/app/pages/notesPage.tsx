import * as React from "react";
import PageLayout from "../layouts/pageLayout";
import DropDownButton from "../components/dropDown/dropDownBtn";
import DropDown from "../components/dropDown/dropDown";

const NotesPage = () => {
    return (
        <PageLayout>
            <div className="notesPage__info">
                <div className="notesPage__firstNode">
                    <p>
                        <span>20.12.2019</span> Физические упражнения
                        способствуют активизации мышечных сокращений, кровотока
                        в тканях, снимают отечность, повышают энергетические
                        возможности мышц. Улучшенное питание мышечной ткани
                        ускоряет замещение различных посттравматических дефектов
                        в самих мышцах, костной ткани, связках и сухожилиях.
                    </p>
                    <div>
                        <DropDown />
                    </div>
                </div>
                <div className="notesPage__secondNode">
                    <div>
                        <p>
                            <span>20.12.2019</span> Улучшенное питание мышечной
                            ткани ускоряет замещение различных
                            посттравматических дефектов в самих мышцах, костной
                            ткани, связках и сухожилиях.
                        </p>
                        <div>
                            <DropDown />
                        </div>
                    </div>
                    <div className="notesPage__map">
                        <img src="/img/posts/Rectangle 101.png" alt="map" />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default NotesPage;
