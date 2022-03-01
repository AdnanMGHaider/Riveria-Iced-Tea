import classes from "./TestimonialDetails.module.css";

function TestimonialDetails(props) {
  return (
    <li className={classes.testimonialCard}>
      <div className={classes.imgAndName}>
        <img
          className={classes.testimonialImg}
          src={props.img}
          alt="Testimonial person"
        />
        <h3 className={classes.testimonialName}>{props.name}</h3>
      </div>
      <p className={classes.testimonialQuote}>{props.quote}</p>
    </li>
  );
}

export default TestimonialDetails;
