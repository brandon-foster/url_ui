export const hasScheme = (str) => {
    const regex = /^https?:\/\//;
    return regex.test(str);
};
