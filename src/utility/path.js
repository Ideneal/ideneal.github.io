export function splitPathname(pathname) {
    const locations = pathname.substring(1).split('/');
    return locations.map((location, index) => {
        return {
            label: location,
            path: '/' + locations.slice(0, index + 1).join('/')
        }
    });
}