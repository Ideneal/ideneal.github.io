export function groupBy(array, selector) {
    return array.reduce((result, item) => {
        const key = (typeof selector === 'function') ? selector(item) : item[selector];
        (result[key] = result[key] || []).push(item)
        return result;
    }, {});
}