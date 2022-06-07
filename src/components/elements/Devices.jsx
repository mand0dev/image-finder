const size = {
    mobile: '768px',
    tablet: '992px',
    tabletL: '1024px',
    desktop: '1200px'
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletL: `(max-width: ${size.tabletL})`,
    desktop: `(min-width: ${size.desktop})`
}
