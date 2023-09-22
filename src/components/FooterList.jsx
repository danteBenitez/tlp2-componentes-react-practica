import { FooterListElement } from './FooterListElement'

export function FooterList({ listHeader, listElements }) {
    return (
        <div className="col-6 col-lg-2 mb-3">
            <h5>{listHeader} </h5>
            <ul className="list-unstyled">
                {listElements.map((elmt, i) => {
                    return <FooterListElement element={elmt} key={i} />
                })}
            </ul>
        </div>
    )
}
