import React from "react";

interface ContentBoxProps {
    /**
     * Is this the principal ContentBox of the page?
     */
    primary?:boolean

}

import { FunctionComponent } from 'react';
import  './box.css';


export const  ContentBoxxx = ({primary, MaskGroup}:ContentBoxProps)=> {
    return (
        <div className={"group"}>
            <div className={"rectangle"} />
            {/*{MaskGroup?(MaskGroup):null}*/}
            <img className={"maskGroupIcon"} alt="" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c2daf90ad8594e0b7c3748f83751e577ae52f13fcb7f897a573cb95458884c?apiKey=f1073757e44b4ccd8d59791af6c41a77&" />
            <div className={"newToAiContainer"}>
                <p className={"newToAi"}>New to AI Safety?</p>
                <p className={"somethingAboutReading"}>Something about reading and quick</p>
            </div>
            <div className={"button"}>
                <div className={"small"}>Start here</div>
                <img className={"iconsArrowRight"} alt="" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb1280ae243173a29a11e362f292791a4f28e657912dedfdf8e488119ac6fac?apiKey=f1073757e44b4ccd8d59791af6c41a77&" />
            </div>
        </div>);
};


export  const  ContentBox = ({primary}:ContentBoxProps)=> {
    return (
        <div className="main-container">
            <header className="header">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/23c2daf90ad8594e0b7c3748f83751e577ae52f13fcb7f897a573cb95458884c?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                    className="img"
                    alt="AI Safety Image"
                />
                <div className={["description", (primary?"primary":"")].join(" ")}>
                    <p>New to AI Safety?</p>
                    <span className="quick-read">
            Something about reading and quick
          </span>
                </div>
                <div className="start-button">
                    <button>Start here</button>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb1280ae243173a29a11e362f292791a4f28e657912dedfdf8e488119ac6fac?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                        className="img-2"
                        alt="Start Image"
                    />
                </div>
            </header>
            <style jsx>{`
        .main-container {
          box-shadow: 0px 16px 40px 0px rgba(175, 183, 194, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .header {
          //border-radius: 6px;
          //background-color: var(--colors-teal-600, #1a817c);
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 348px;
          width: 100%;
          align-items: start;
          padding: 50px 80px 50px 57px;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .description {
          position: relative;
          color: var(--colors-teal-200, #a6d9d7);
          letter-spacing: -0.57px;
          margin-top: 14px;
          width: 439px;
          max-width: 100%;
          font: 600 38px/49px Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .description p{
          margin: 0;
        }
        .description.primary p:first-child{
          color:white;
        }
        .description.primary p{
          color: var(--colors-teal-200, rgba(166, 217, 215, 1));
         }
        .description.primary span{
          color: var(--colors-teal-200, rgba(166, 217, 215, 1));
         }
        .description {
          color: var(--text-black, #1B2B3E);
        }
        .quick-read {
          position: relative;
        }

        .start-button {
          position: relative;
          justify-content: center;
          border-radius: 6px;
          box-shadow: 0px 16px 40px 0px rgba(32, 44, 89, 0.05);
          background-color: var(--white, #fff);
          display: flex;
          gap: 4px;
          margin: 33px 0 7px;
          padding: 13px 69px 13px 48px;
        }

        @media (max-width: 991px) {
          .start-button {
            padding: 0 20px;
          }
        }

        .start-button button {
          color: var(--colors-teal-500, #1d9089);
          text-align: center;
          letter-spacing: -0.18px;
          font: 600 18px/31px Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 16px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
      `}</style>
        </div>
    );
}