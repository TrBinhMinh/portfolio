import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <address>
        <a href="mailto:bminh9900@gmail.com">bminh9900@gmail.com</a>
        <a href="tel:+84338824186">(+84) 338-824-186</a>
        <a href="#">Social media</a>
      </address>
      <div>Address</div>
      <div>Address</div>
    </footer>
  );
};

export default Footer;
