import "../../css/Header.css";
import { Navbar } from "./navbar/Navbar";

export default function Header({ navLinks }) {
  return (
    <header>
      <Navbar navLinks={navLinks} />
    </header>
  );
}
