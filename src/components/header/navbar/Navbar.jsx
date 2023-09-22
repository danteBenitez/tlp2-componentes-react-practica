import { SignInButton } from "../../SignInButton";
import { NavbarLinkList } from "./NavbarLinkList";

export function Navbar({ navLinks }) {
  return (
    <nav className="nav-custom sticky-top">
      <a href="#" className="enlace me-auto">
        <img
          src="/assets/attention-logo.png"
          alt="imagen logo"
          className="logo"
        />
        <img src="./assets/logo-1.png" alt="logo pequeño" className="logo-1" />
      </a>
      <ul className="d-flex flex-row pt-4">
        <NavbarLinkList linkList={navLinks} />
        <SignInButton />
      </ul>
    </nav>
  );
}
