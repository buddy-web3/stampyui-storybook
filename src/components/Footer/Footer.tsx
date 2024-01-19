import { FunctionComponent } from 'react';
import  './footer.css';


export const Footer:FunctionComponent = () => {
    return (
        <div className={"footer"}>
            <img className={"footer-icon"} alt="" src="icons / carrot - small.png" />
            <div className={"footer-description"}>We're a global team of volunteers from various disciplines who believe AI poses an grave risk of extinction to humanity.</div>
            <div className={"footer-box"}>
                <p className={"footer-logo"}>AIsafety.com</p>
                <p className={"footer-ecosystem"}>Alignment Ecosystem Development</p>
            </div>
            <div className={"footer-volunteers"}>We’re looking for volunteers for lorem ipsum</div>
            <div className={"footer-reachout"}>Reach out</div>
            <div className={"footer-partners"}>Partner projects</div>
            <div className={"footer-help"}>Help out</div>
            <div className={"footer-copyright"}>(ɔ) 2023 · This site is released under a CC BY-SA license</div>
            <div className={"footer-brand"}>AIsafety.info</div>
            <div className={"footer-line"} />
            <div className={"footer-learnMore"}>
                <div className={"footer-small"}>Learn more about us</div>
            </div>
        </div>);
};
