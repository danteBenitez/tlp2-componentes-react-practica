import { NavbarLink } from "./NavbarLink";

export function NavbarLinkList({ linkList }) {
  return (
    <>
      {linkList.map(({ text, url }, i) => {
        return <NavbarLink linkText={text} url={url} key={i} />;
      })}
    </>
  );
}
