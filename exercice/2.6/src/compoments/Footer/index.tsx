import "./Footer.css";
import type { ReactNode } from "react";

interface FooterProps {
  urlLogo: string;
  children?: ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer">
      <img src={props.urlLogo} alt="logo" className="logo"/>
      <div>{props.children}</div>
    </footer>
  );
};

export default Footer;
