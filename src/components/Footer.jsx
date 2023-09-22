import { BrandInfoSummary } from './BrandInfoSummary'
import { FooterList } from './FooterList'


export function Footer({ footerLinkList }) {
    const listEntries = Object.entries(footerLinkList);

    return (
        <footer className="bd-footer py-2 py-md-2 mt-5 bg-body-tertiary ab">
            <div className="container py-2 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <BrandInfoSummary />
                    {listEntries.map(([header, list], i) => {
                        return (
                            <FooterList
                                listHeader={header}
                                key={i}
                                listElements={list}
                            />
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}
