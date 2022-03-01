import { Fragment } from "react";
import classes from "./FindUs.module.css";
import WalmartLogo from "../../Assets/SVG/WalmartLogo.svg";
import CostcoLogo from "../../Assets/SVG/CostcoLogo.svg";
import SevenElevenLogo from "../../Assets/SVG/SevenElevenLogo.svg";
import WholeFoodLogo from "../../Assets/SVG/WholeFoodLogo.svg";
import KrogerLogo from "../../Assets/SVG/KrogerLogo.svg";
import StopAndShopLogo from "../../Assets/SVG/StopAndShopLogo.svg";
import WakefernLogo from "../../Assets/SVG/WakefernLogo.svg";
import PublixLogo from "../../Assets/SVG/PublixLogo.svg";
import WegmansLogo from "../../Assets/SVG/WegmansLogo.svg";
import MeijerLogo from "../../Assets/SVG/MeijerLogo.svg";

function FindUs() {
  return (
    <Fragment>
      <h1 className={classes.findUsHeading}>FIND US AT...</h1>
      <p className={classes.findUsParagraph}>
        We are not just on the internet. You can find our Iced Teas stocked at
        major retail locations all around the country.
      </p>
      <div className={classes.findUsLogoContainer}>
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsWalmartLogo}`}
          src={WalmartLogo}
          alt="Find Us Logo 1"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsCostcoLogo}`}
          src={CostcoLogo}
          alt="Find Us Logo 2"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsSevenElevenLogo}`}
          src={SevenElevenLogo}
          alt="Find Us Logo 3"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsWholeFoodLogo}`}
          src={WholeFoodLogo}
          alt="Find Us Logo 4"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsKrogerLogo}`}
          src={KrogerLogo}
          alt="Find Us Logo 5"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsStopAndShopLogo}`}
          src={StopAndShopLogo}
          alt="Find Us Logo 6"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsWakefernLogo}`}
          src={WakefernLogo}
          alt="Find Us Logo 7"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsPublixLogo}`}
          src={PublixLogo}
          alt="Find Us Logo 8"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsWegmansLogo}`}
          src={WegmansLogo}
          alt="Find Us Logo 9"
        />
        <img
          className={`${classes.findUsLogoItem} ${classes.findUsMeijerLogo}`}
          src={MeijerLogo}
          alt="Find Us Logo 10"
        />
      </div>
    </Fragment>
  );
}

export default FindUs;
