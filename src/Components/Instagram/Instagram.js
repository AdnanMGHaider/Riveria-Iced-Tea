import classes from "./Instagram.module.css";
import Instagram1 from "../../Assets/Images/Instagram1.jpg";
import Instagram2 from "../../Assets/Images/Instagram2.jpg";
import Instagram3 from "../../Assets/Images/Instagram3.png";
import Instagram4 from "../../Assets/Images/Instagram4.jpg";
import Instagram5 from "../../Assets/Images/Instagram5.jpg";
import Instagram6 from "../../Assets/Images/Instagram6.jpg";
import Instagram7 from "../../Assets/Images/Instagram7.jpg";

function Instagram() {
  return (
    <div>
      <h1 className={classes.instagramHeading}>LOOK US UP ON INSTAGRAM</h1>
      <p className={classes.instagramHandle}>@RiveriaIcedTeas</p>
      <div className={classes.instagramGridContainer}>
        <img
          src={Instagram1}
          className={`${classes.instagramGridItem} ${classes.item1}`}
          alt="tea picker"
        />
        <img
          src={Instagram2}
          className={`${classes.instagramGridItem} ${classes.item2}`}
          alt="cold iced tea glass"
        />
        <img
          src={Instagram3}
          className={`${classes.instagramGridItem} ${classes.item3}`}
          alt="3 Riveria cans"
        />
        <img
          src={Instagram4}
          className={`${classes.instagramGridItem} ${classes.item4}`}
          alt="tea picker 2"
        />
        <img
          src={Instagram5}
          className={`${classes.instagramGridItem} ${classes.item5}`}
          alt="man jumping"
        />
        <img
          src={Instagram6}
          className={`${classes.instagramGridItem} ${classes.item6}`}
          alt="lemon"
        />
        <img
          src={Instagram7}
          className={`${classes.instagramGridItem} ${classes.item7}`}
          alt="Iced tea in a glass"
        />
      </div>
    </div>
  );
}

export default Instagram;
