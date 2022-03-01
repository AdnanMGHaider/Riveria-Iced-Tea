import classes from "./AllIcedTeas.module.css";
import IcedTeaDetails from "../AllIcedTeas/IcedTea/IcedTeaDetails";

/*Image imports */
import Lemon from "../../Assets/Images/Lemon.png";
import PeachAndMango from "../../Assets/Images/Peach and Mango.png";
import BlueberryAndMint from "../../Assets/Images/Blueberry and Mint.png";
import CherryAndMint from "../../Assets/Images/Cherry and Mint.png";
import Pineapple from "../../Assets/Images/Pineapple.png";
import Raspberry from "../../Assets/Images/Raspberry.png";

/* SwiperJS related file imports*/
import { SwiperSlide } from "swiper/react";
import ProductCarousel from "../UI/ProductCarousel";

const PRODUCT_ITEMS = [
  {
    id: "itc-l",
    icedTeaImgSrc: Lemon,
    nameOfIcedTea: "LEMON",
    descriptionOfIcedTea:
      "Some things are just meant to be, like the classic love affair of tea and lemon. Keeping it simple, keeping it fresh without compromising on any of the taste",
    price: 27,
    altText: "Lemon flavoured iced tea image",
  },
  {
    id: "itc-pm",
    icedTeaImgSrc: PeachAndMango,
    nameOfIcedTea: "PEACH AND MANGO",
    descriptionOfIcedTea: "Experience the ice cold fusion of Mango and Peach and let these aromatic flavors make you swirl.",
    price: 27,
    altText: "Peach and Mango flavoured iced tea image",
  },
  {
    id: "itc-bm",
    icedTeaImgSrc: BlueberryAndMint,
    nameOfIcedTea: "BLUEBERRY AND MINT",
    descriptionOfIcedTea: "Taste a life full of celebration in every sip of this purple hued thirst quencher. Your summers will never be the same!",
    price: 27,
    altText: "Blueberry and Mint flavoured iced tea image",
  },
  {
    id: "itc-cm",
    icedTeaImgSrc: CherryAndMint,
    nameOfIcedTea: "CHERRY AND MINT",
    descriptionOfIcedTea: "Try this unique, immune boosting, antioxidants having, joy inducing blend of sour/sweet Cherries and cooling Mint",
    price: 27,
    altText: "Cherry and Mint flavoured iced tea image",
  },
  {
    id: "itc-p",
    icedTeaImgSrc: Pineapple,
    nameOfIcedTea: "PINEAPPLE",
    descriptionOfIcedTea:
      "When you have a super fruit that is as healthy as it is delicious, not having it as a part of our iced tea lineup felt like a crime. Sit back, relax and enjoy the Pineapply Goodness",
    price: 27,
    altText: "Pineapple flavoured iced tea image",
  },
  {
    id: "itc-r",
    icedTeaImgSrc: Raspberry,
    nameOfIcedTea: "RASPBERRY",
    descriptionOfIcedTea: "This delightful Raspberry flavoured iced tea perfectly walks the line between sweet and tangy. It's Very Raspberry Good!",
    price: 27,
    altText: "Raspberry flavoured iced tea image",
  },
];

function AllIcedTeas() {
  const productInfo = PRODUCT_ITEMS.map((product) => (
    <SwiperSlide>
      <IcedTeaDetails
        id={product.id}
        key={product.id}
        img={product.icedTeaImgSrc}
        altText={product.altText}
        name={product.nameOfIcedTea}
        description={product.descriptionOfIcedTea}
        price={product.price}
      />
    </SwiperSlide>
  ));
  return (
    <section className={classes.teas}>
      <h1 className={classes.teasHeading}>EXPLORE OUR ICED TEAS</h1>
      <ProductCarousel>
        <ul>{productInfo}</ul>
      </ProductCarousel>
    </section>
  );
}

export default AllIcedTeas;
