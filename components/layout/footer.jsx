import Link from "next/link";
import Icon from "../ui/icon";
import classes from "./footer.module.scss";

const Footer = () => {
  const socialLinks = [
    {
      icon: "facebook",
      link: "https://www.facebook.com/binhminh.tran.589",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/minh-tran-a5667a210/",
    },
    {
      icon: "github",
      link: "https://github.com/TrBinhMinh",
    },
  ];

  return (
    <footer className={classes.container}>
      <div>
        <Link className={classes.logo} href="/">
          &lt;Minh.dev&gt;
        </Link>
        <div className={classes["social-links"]}>
          {socialLinks.map((link) => (
            <a href={link.link} key={link.icon}>
              <Icon iconName={link.icon} />
            </a>
          ))}
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
