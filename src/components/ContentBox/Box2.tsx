import React from "react";
import "./Box3.css"

interface ContentBoxProps{
    /**
     * Is this the primary ContentBox of the page?
     */
    primary?:boolean;
}
export const ContentB = ({primary}:ContentBoxProps) =>{
    return (
        <div className="main-container">
            <div className={["description", (primary?"primary":"")].join(" ")}>
                <p>New to AI Safety?</p>
                <span className="quick-read">
            Something about reading and quick
          </span>

                <div className="start-button">
                    <button>Start here</button>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb1280ae243173a29a11e362f292791a4f28e657912dedfdf8e488119ac6fac?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                        className="img-2"
                        alt="Start Image"
                    />
                </div>
            </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c2daf90ad8594e0b7c3748f83751e577ae52f13fcb7f897a573cb95458884c?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                    className="img"
                    alt="AI Safety Image"
                />

        </div>
    );
}