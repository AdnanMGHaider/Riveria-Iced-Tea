import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.row1}>
        <ul className={classes.row1Column1}>
          <li>
            <a href="#">OUR STORY</a>
          </li>
          <li>
            <a href="#">OUR MISSION</a>
          </li>
          <li>
            <a href="#">OUR PRODUCTS</a>
          </li>
          <li>
            <a href="#">MEET THE TEAM</a>
          </li>
          <li>
            <a href="#">NEWS AND PRESS</a>
          </li>
          <li>
            <a href="#">RECIPIES</a>
          </li>
        </ul>
        <ul className={classes.row1Column2}>
          <li>
            <a href="#">CUSTOMER SUPPORT</a>
          </li>
          <li>
            <a href="#">TRACK YOUR ORDER</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="#">TERMS OF SERVICE</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
        </ul>
        <ul className={classes.row1Column3}>
          <li>
            <p>RIVERIA ORGANIC TEAS</p>
            <p>2431 Sunset Drive New Jersey 34277</p>
          </li>
          <li>
            <p className={classes.row1Column3GetInTouch}>GET IN TOUCH</p>
          </li>
          <li>
            <p>adnan.mgh92@gmail.com</p>
            <p>telephone: +8801735650417</p>
          </li>
        </ul>
      </div>
      <div className={classes.row2}>
        <p>All Rights Reserved.</p>
        <p>
          Website created by <strong>Adnan Haider</strong>
        </p>
        <p>©2022 RIVERIA</p>
      </div>
    </footer>
  );
}

export default Footer;
