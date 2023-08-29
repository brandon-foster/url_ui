export function toShortUrl(hash) {
    const url = new URL(window.location.href);
    return `${url.origin}${process.env.REACT_APP_API_URL}/${hash}`;
};
