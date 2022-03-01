import { Fragment } from "react";
import classes from "./TasteAndQuality.module.css";
import PurifiedWater from "../../Assets/SVG/PurifiedWater.svg";
import USDAOrganic from "../../Assets/SVG/USDAOrganic.svg";
import EthicallySourced from "../../Assets/SVG/EthicallySourced.svg";
import CaneSugar from "../../Assets/SVG/CaneSugar.svg";
import TeaPickers from "../../Assets/Images/TeaPickers.jpg";
import TeaLeavesInHand from "../../Assets/Images/TeaLeavesInHand.jpg";
import VectorSquare from "../../Assets/SVG/VectorSquare.svg";

function TasteAndQuality() {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.descriptionContainer}>
          <p className={classes.descriptionHeading}>
            WE MAKE SOME GREAT TASTING ICED TEA.
          </p>
          <p className={classes.description}>
            That being said, taste is just part of the story. We at RIVERIA
            believe that to create something truly SPECIAL, a lot of little
            things need to be done RIGHT.
          </p>
          <p className={classes.description}>
            From how we source our ingredients, to how it all ends up in your
            hands in the form of an ice cold can. We pay close attention to
            every step and every stage so that all the little things are done
            RIGHT.
          </p>
        </div>
        <div className={classes.teaPickersJpg}>
          <img src={TeaPickers} alt="Tea Pickers" />
        </div>

        <div className={classes.vectorSquare1}>
          <img src={VectorSquare} alt="Vector Design Element " />
        </div>
        <img
          className={classes.purifiedWaterSvg}
          src={PurifiedWater}
          alt="Purified Water"
        />
        <img
          className={classes.usdaOrganicSvg}
          src={USDAOrganic}
          alt="USDA Organic"
        />
        <img
          className={classes.ethicallySourcedSvg}
          src={EthicallySourced}
          alt="Ethically Sourced"
        />
        <img
          className={classes.caneSugarSvg}
          src={CaneSugar}
          alt="Cane Sugar"
        />
        <div className={classes.vectorSquare2}>
          <img src={VectorSquare} alt="Vector Design Element " />
        </div>
        <div className={classes.teaLeavesInHandJpg}>
          <img src={TeaLeavesInHand} alt="Tea Leaves in Hand " />
        </div>
      </div>
    </Fragment>
  );
}

export default TasteAndQuality;
