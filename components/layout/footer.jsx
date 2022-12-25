import Link from "next/link";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div>
        <Link className={classes.logo} href="/">
          &lt;Minh.dev&gt;
        </Link>
        <div>
          <span>Social media:</span> <a href="#">Social media</a>
        </div>
      </div>
      <address>
        <div>
          <span>Email:</span>{" "}
          <a href="mailto:bminh9900@gmail.com">bminh9900@gmail.com</a>
        </div>
        <div>
          <span>Phone number:</span>{" "}
          <a href="tel:+84338824186">(+84) 338-824-186</a>
        </div>
      </address>
      <div>Address</div>
    </footer>
  );
};

export default Footer;
