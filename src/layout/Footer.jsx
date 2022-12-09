import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div>
        <p>Email address</p>
        <p>Social media</p>
      </div>
      <div>Address</div>
      <div>Address</div>
    </footer>
  );
};

export default Footer;
