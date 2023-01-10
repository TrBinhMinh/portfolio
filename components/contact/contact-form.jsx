import BaseButton from "../ui/base-button";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import classes from "./contact-form.module.scss";

const inputField = [
  { name: "name", type: "text", placeholder: "Enter your name" },
  { name: "email", type: "email", placeholder: "Enter your email" },
  { name: "linkedin", type: "url", placeholder: "Enter your Linkedin's URL" },
  { name: "message", type: "text", placeholder: "Enter your message" },
];

const ContactForm = () => {
  return (
    <form className={classes.form}>
      <fieldset className={classes["form--container"]}>
        <legend className={classes["form--container--heading"]}>
          For Work & Collaboration
        </legend>
        {inputField.map(({ name, type, placeholder }) => {
          let icon;

          switch (name) {
            case "name":
              icon = (
                <FaUserTie className={classes["form--container--box--icon"]} />
              );
              break;
            case "email":
              icon = (
                <FaEnvelope className={classes["form--container--box--icon"]} />
              );
              break;
            case "linkedin":
              icon = (
                <BsLinkedin className={classes["form--container--box--icon"]} />
              );
              break;
            case "message":
              icon = (
                <BsFillChatSquareTextFill
                  className={classes["form--container--box--icon"]}
                />
              );
              break;
            default:
              icon = (
                <FaUserTie className={classes["form--container--box--icon"]} />
              );
              break;
          }

          return (
            <div className={classes["form--container--box"]}>
              <div className={classes["form--container--box--label"]}>
                {icon}
                <label className={classes["form--container--box--label--text"]}>
                  {`Your ${name.at(0).toUpperCase()}${name.slice(1)}`}
                </label>
              </div>
              <input
                className={classes["form--container--box--input"]}
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                required={name !== "linkedin"}
              />
            </div>
          );
        })}
        <BaseButton
          className={classes["form--container--button"]}
          buttonType="submit"
        >
          Send
        </BaseButton>
      </fieldset>
    </form>
  );
};

export default ContactForm;
