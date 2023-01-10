import Link from "next/link";
import { useRouter } from "next/router";
import BaseButton from "../ui/base-button";
import Icon from "../ui/icon";
import classes from "./footer.module.scss";

const Footer = () => {
  const { push } = useRouter();

  const thisYear = new Date().getFullYear();

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

  const submitHandler = (e) => {
    e.preventDefault();
    push("/contact");
  };

  return (
    <footer className={classes.container}>
      <div className={classes["section-main"]}>
        <Link className={classes["section-main--logo"]} href="/">
          &lt;Minh.dev&gt;
        </Link>
        <div className={classes["section-main--social-links"]}>
          {socialLinks.map((link) => (
            <a href={link.link} key={link.icon} target="_blank">
              <Icon iconName={link.icon} />
            </a>
          ))}
        </div>
        <p className={classes["section-main--copyright"]}>
          Copyright &#169; <span>{thisYear}</span> by Tran Binh Minh. All rights
          reserved.
        </p>
      </div>
      <address className={classes["section-info-address"]}>
        <h3 className={classes["section-info-address--heading"]}>
          Contact Me At
        </h3>
        <div className={classes["section-info-address--email"]}>
          <span>Email:</span>{" "}
          <a href="mailto:tbminh2309@gmail.com">tbminh2309@gmail.com</a>
        </div>
        <div className={classes["section-info-address--numbers"]}>
          <span>Phone number:</span> <a href="#">#</a>
        </div>
      </address>
      <form className={classes["section-cta"]} onSubmit={submitHandler}>
        <label htmlFor="email" className={classes["section-cta--label"]}>
          Contact us!
        </label>
        <input
          className={classes["section-cta--input"]}
          type="email"
          placeholder="Enter email here"
          name="email"
          id="email"
          autoComplete="email"
        />
        <BaseButton buttonType="submit">Submit</BaseButton>
      </form>
    </footer>
  );
};

export default Footer;
