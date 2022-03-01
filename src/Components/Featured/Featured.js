import classes from "./Featured.module.css";
import CNNLogo from "../../Assets/SVG/CNNLogo.svg";
import FoodNetworkLogo from "../../Assets/SVG/FoodNetworkLogo.svg";
import ForbesLogo from "../../Assets/SVG/ForbesLogo.svg";
import NewsweekLogo from "../../Assets/SVG/NewsweekLogo.svg";
import FreshCupLogo from "../../Assets/SVG/FreshCupLogo.svg";

function Featured() {
  return (
    <div>
      <h1 className={classes.featuredHeading}>WE'VE BEEN FEATURED ON</h1>
      <div className={classes.featuredContainer}>
        <img
          className={`${classes.featuredLogoItem} ${classes.featuredCNNLogo}`}
          src={CNNLogo}
          alt="Featured Logo 1"
        />
        <img
          className={`${classes.featuredLogoItem} ${classes.featuredFoodNetworkLogo}`}
          src={FoodNetworkLogo}
          alt="Featured Logo 2"
        />
        <img
          className={`${classes.featuredLogoItem} ${classes.featuredForbesLogo}`}
          src={ForbesLogo}
          alt="Featured Logo 3"
        />
        <img
          className={`${classes.featuredLogoItem} ${classes.featuredNewsweekLogo}`}
          src={NewsweekLogo}
          alt="Featured Logo 4"
        />
        <img
          className={`${classes.featuredLogoItem} ${classes.featuredFreshCupLogo}`}
          src={FreshCupLogo}
          alt="Featured Logo 5"
        />
      </div>
    </div>
  );
}

export default Featured;
