import { FunctionComponent } from 'react';
import  './footer.css';


export const Footer:FunctionComponent = () => {
    return (
        <div className={"footer"}>
            <img className={"iconsCarrotSmall"} alt="" src="icons / carrot - small.png" />
            <div className={"wereAGlobal"}>We're a global team of volunteers from various disciplines who believe AI poses an grave risk of extinction to humanity.</div>
            <div className={"aisafetycomAlignmentEcosystContainer"}>
                <p className={"aisafetycom"}>AIsafety.com</p>
                <p className={"alignmentEcosystemDevelopmen"}>Alignment Ecosystem Development</p>
            </div>
            <div className={"wereLookingFor"}>We’re looking for volunteers for lorem ipsum</div>
            <div className={"reachOut"}>Reach out</div>
            <div className={"partnerProjects"}>Partner projects</div>
            <div className={"helpOut"}>Help out</div>
            <div className={"footer-copyright"}>(ɔ) 2023 · This site is released under a CC BY-SA license</div>
            <div className={"aisafetyinfo"}>AIsafety.info</div>
            <div className={"line"} />
            <div className={"stylesecondaryColortealS"}>
                <div className={"small"}>Learn more about us</div>
            </div>
        </div>);
};
