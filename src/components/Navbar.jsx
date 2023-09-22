import { SignInButton } from './SignInButton'

export function Navbar() {
    return (
        <nav className="nav-custom sticky-top">
            <a href="#" className="enlace me-auto">
                <img
                    src="/assets/attention-logo.png"
                    alt="imagen logo"
                    className="logo"
                />
                <img
                    src="./assets/logo-1.png"
                    alt="logo pequeño"
                    className="logo-1"
                />
            </a>
            <ul className="d-flex flex-row pt-4">
                <li>
                    <a href="#" className="text-decoration-none navbar-link">
                        Contacto
                    </a>
                </li>
                <SignInButton />
            </ul>
        </nav>
    )
}
