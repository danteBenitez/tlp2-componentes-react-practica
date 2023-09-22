export function FooterListElement({ element }) {
    return (
        <>
            <li className="mb-2">
                <a
                    className="text-decoration-none af"
                    href="/docs/5.3/getting-started/"
                >
                    {element}
                </a>
            </li>
        </>
    )
}
