export function NavbarLink({ linkText, url }) {
  return (
    <>
      <li>
        <a href={url} className="text-decoration-none navbar-link">
          {linkText}
        </a>
      </li>
    </>
  );
}
