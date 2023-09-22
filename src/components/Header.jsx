import { Navbar } from './Navbar'
import "../css/Header.css";

export default function Header({ navLinks }) {
    return (
        <header>
            <Navbar navLinks={navLinks} />
        </header>
    )
}
