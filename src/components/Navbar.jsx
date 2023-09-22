import { SignInButton } from './SignInButton'


export function Navbar({ navLinks }) {
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
                <NavbarLinkList linkList={navLinks} />
                <SignInButton />
            </ul>
        </nav>
    )
}

export function NavbarLinkList({ linkList }) {
    return (
        <>
            {linkList.map(({ text, url }, i) => {
                return <NavbarLink linkText={text} url={url} key={i} />
            })}
        </>
    )
}

export function NavbarLink({ linkText, url }) {
    return (
        <>
            <li>
                <a href={url} className="text-decoration-none navbar-link">
                    {linkText}
                </a>
            </li>
        </>
    )
}
