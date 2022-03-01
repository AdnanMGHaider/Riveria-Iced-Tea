import classes from "./Testimonials.module.css";
import { Fragment } from "react";
import Testimonial2 from "../../Assets/Images/Testimonial2.jpg";
import Testimonial1 from "../../Assets/Images/Testimonial1.jpg";
import Testimonial3 from "../../Assets/Images/Testimonial3.jpg";
import Testimonial4 from "../../Assets/Images/Testimonial4.jpg";
import Testimonial5 from "../../Assets/Images/Testimonial5.jpg";
import Testimonial6 from "../../Assets/Images/Testimonial6.jpg";

import TestimonialDetails from "./TestimonialDetails";

const PEOPLE_REVIEWS = [
  {
    id: "test1",
    personImgSrc: Testimonial1,
    nameOfPerson: "Adam Stine",
    quoteByPerson:
      "No more soda for me. Also I think I could be great brand ambassador for Riveria",
    altText: "Customer Review 1"
  },
  {
    id: "test2",
    personImgSrc: Testimonial2,
    nameOfPerson: "Alice Myers",
    quoteByPerson:
      "Every flavor is really unique and delicious and no other Iced tea in the market comes even close",
    altText: "Customer Review 2"
  },
  {
    id: "test3",
    personImgSrc: Testimonial3,
    nameOfPerson: "Pranav Roy",
    quoteByPerson: "I LOVE the Cherry Mint and Pineapple flavors",
    altText: "Customer Review 3"
  },
  {
    id: "test4",
    personImgSrc: Testimonial4,
    nameOfPerson: "Zoya Khalid",
    quoteByPerson:
      "I've recommended Riveria Iced teas to almost all my family members and friends.",
    altText: "Customer Review 4"
  },
  {
    id: "test5",
    personImgSrc: Testimonial5,
    nameOfPerson: "Ella Grace ",
    quoteByPerson: "You can pair Riveria iced teas with any type of meal.",
    altText: "Customer Review 5"
  },
  {
    id: "test6",
    personImgSrc: Testimonial6,
    nameOfPerson: "Keith Ross",
    quoteByPerson:
      "The Blueberry Mint and the Lemon flavors are just perfect for the summer",
    altText: "Customer Review 6"
  }
];

function Testimonials() {
  const peopleReviews = PEOPLE_REVIEWS.map((person) => (
    <TestimonialDetails
      id={person.id}
      key={person.id}
      img={person.personImgSrc}
      name={person.nameOfPerson}
      quote={person.quoteByPerson}
    />
  ));
  return (
    <Fragment>
      <h1 className={classes.testimonialHeading}>WE HAVE SOME ADMIRERS</h1>
      <ul className={classes.testimonialContainer}>{peopleReviews}</ul>
    </Fragment>
  );
}

export default Testimonials;
