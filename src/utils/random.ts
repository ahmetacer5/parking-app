export const randomInteger = (min = 1, max = 100000000): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
