import React, { useState } from "react";
import "./index.scss";

import MainPageLayout from "../layouts/mainPageLayout";
import Patient from "../components/patient/patient";
import PatientList from "../components/patiantList/patientList";
import NavBar from "../navbar/navbar";
import NotesPage from "./notesPage";
import ConsultPage from "./consultPage";
import VideoPage from "./VideoPage";
import EventsPage from "./eventsPage";

const MainPage = () => {
    const [selectedPath, setSelectedPath] = useState<string>("notes");
    return (
        <MainPageLayout>
            <div className="mainPage">
                <PatientList />
                <div>
                    <Patient />
                    <NavBar
                        activPath={selectedPath}
                        handleChangePath={(p) => setSelectedPath(p)}
                    />
                    {selectedPath === "notes" && <NotesPage />}
                    {selectedPath === "consult" && <ConsultPage />}
                    {selectedPath === "video" && <VideoPage />}
                    {selectedPath === "event" && <EventsPage />}
                </div>
            </div>
        </MainPageLayout>
    );
};

export default MainPage;
