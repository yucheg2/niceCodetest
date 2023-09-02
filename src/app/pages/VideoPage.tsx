import * as React from "react";
import PageLayout from "../layouts/pageLayout";

const VideoPage = () => {
    return (
        <PageLayout>
            <div className="videoPage__item">
                <img src="/img/videos/Rectangle.png" alt="video" />
                <div className="videoPage__info">
                    <span className="videoName">
                        Крабик, ходьба в бок в приседе с двумя резинками Кра…
                    </span>
                    <span className="authorName">Астахова Е.В.</span>
                </div>
            </div>
            <div className="videoPage__item">
                <img src="/img/videos/Rectangle (1).png" alt="video" />
                <div className="videoPage__info">
                    <span className="videoName">
                        Разминка для локтевого сустава
                    </span>
                    <span className="authorName">Астахова Е.В.</span>
                </div>
                <span className="videoPage__date">15.01.2019 - 22.01.2019</span>
            </div>
            <div className="videoPage__item">
                <img src="/img/videos/Rectangle (2).png" alt="video" />
                <div className="videoPage__info">
                    <span className="videoName">
                        Разминка для локтевого суставаРазминка для локтевого..
                    </span>
                    <span className="authorName">Астахова Е.В.</span>
                </div>
                <span className="videoPage__date">15.01.2019 - 22.01.2019</span>
            </div>
        </PageLayout>
    );
};

export default VideoPage;
