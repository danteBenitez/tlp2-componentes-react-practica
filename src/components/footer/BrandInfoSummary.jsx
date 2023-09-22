export function BrandInfoSummary() {
    return (
        <div className="col-lg-3 mb-3">
            <a
                className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                href="/"
            >
                <img
                    src="./assets/logo-1.png"
                    alt="logo pequeño"
                    className="logo-f"
                />
                <span className="fs-5">Attention</span>
            </a>
            <ul className="list-unstyled small">
                <li className="mb-2">
                    Diseñado y construido con todo el amor del mundo por el{' '}
                    <a
                        className="text-decoration-none af"
                        href="/docs/5.3/about/team/"
                    >
                        Attention team.
                    </a>
                </li>
                <li className="mb-2">© Copyright 2023</li>
            </ul>
        </div>
    )
}
