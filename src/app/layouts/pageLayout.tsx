import * as React from "react";
import { LayoutProps } from "./mainPageLayout";

const PageLayout = ({ children }: LayoutProps) => {
    return <div className="pagesLayout">{children}</div>;
};

export default PageLayout;
