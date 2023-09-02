import React from "react";
import TopBar from "../components/topbar/topbar";
import "./index.scss";

export interface LayoutProps {
    children: React.ReactNode;
}

const MainPageLayout = ({ children }: LayoutProps) => {
    return (
        <div className="mainLayout">
            <TopBar />
            <div className="mainLayout__page">{children}</div>
        </div>
    );
};

export default MainPageLayout;
