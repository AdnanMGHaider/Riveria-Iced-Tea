import classes from "./Hero.module.css";
import LandingPage from "../../Assets/Images/LandingPageBgImage.png";
import GreenBrushStroke from "../../Assets/SVG/GreenBrushStroke.svg";

function Hero() {
  const styles = {
    backgroundImage: `url(${LandingPage}) `
  };
  return (
    <div style={styles} className={classes.heroBgImg}>
      <div className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.headingAndButton}>
            <h1>
              LIFE ISN'T ALL SUNSHINE AND RAINBOWS.
              <br /> OUR{" "}
              <span className={classes.greenStrokeContainer}>
                ICED TEAS {/* <span className={classes.greenBrushStroke}> */}
                <img
                  className={classes.greenBrushStroke}
                  src={GreenBrushStroke}
                  alt="decoration"
                />
                {/* </span> */}
              </span>{" "}
              ARE.
            </h1>
            <a href="#" className={classes.button}>
              SHOP NOW!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
