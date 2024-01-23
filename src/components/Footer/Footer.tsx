import { FunctionComponent } from 'react';
import  './footer.css';


export const Footer:FunctionComponent = () => {
    return (
        <div className={"footer"}>
            <div className={"footer-grid"}>
                <div>
                    <p className={"footer-brand"}>AIsafety.com</p>
                    <div className={"footer-description"}>We're a global team of volunteers from various disciplines who believe AI poses an grave risk of extinction to humanity.</div>
                    <div className={"footer-learnMore"}>
                        <div className={"footer-small"}>Learn more about us</div>
                    </div>
                </div>

                <div>
                    <div className={"footer-help"}>Help out</div>
                    <div className={"footer-volunteers"}>We’re looking for volunteers for lorem ipsum</div>
                    <div className={"footer-reachout"}>
                        <span>Reach out </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/411c7babc22fb468fbfb60b64c0fc6caf63c93f7b26f615934615e41c46e6c09?apiKey=f1073757e44b4ccd8d59791af6c41a77&"
                            className="img"
                        />
                    </div>
                </div>
                <div>
                    <div className={"footer-partners"}>Partner projects</div>
                        <p className={"footer-logo"}>AIsafety.com</p>
                        <p className={"footer-ecosystem"}>Alignment Ecosystem Development</p>
                </div>
            </div>
            <div className={"footer-copyright"}>(ɔ) 2023 · This site is released under a CC BY-SA license</div>

            {/*<img className={"footer-icon"} alt="" src="icons / carrot - small.png" />*/}
            {/*<div className={"footer-description"}>We're a global team of volunteers from various disciplines who believe AI poses an grave risk of extinction to humanity.</div>*/}
            {/*<div className={"footer-box"}>*/}
            {/*    <p className={"footer-logo"}>AIsafety.com</p>*/}
            {/*    <p className={"footer-ecosystem"}>Alignment Ecosystem Development</p>*/}
            {/*</div>*/}
            {/*<div className={"footer-volunteers"}>We’re looking for volunteers for lorem ipsum</div>*/}
            {/*<div className={"footer-reachout"}>Reach out</div>*/}
            {/*<div className={"footer-partners"}>Partner projects</div>*/}
            {/*<div className={"footer-help"}>Help out</div>*/}
            {/*<div className={"footer-copyright"}>(ɔ) 2023 · This site is released under a CC BY-SA license</div>*/}
            {/*<div className={"footer-brand"}>AIsafety.info</div>*/}
            {/*<div className={"footer-line"} />*/}
            {/*<div className={"footer-learnMore"}>*/}
            {/*    <div className={"footer-small"}>Learn more about us</div>*/}
            {/*</div>*/}
        </div>);
};
