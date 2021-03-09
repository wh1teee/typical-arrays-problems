exports.min = function min (array) {
    return checkArrayValidation(array) ? Math.min(...array) : 0;
};

exports.max = function max (array) {
    return checkArrayValidation(array) ? Math.max(...array) : 0;

};

exports.avg = function avg (array) {
    return checkArrayValidation(array) ? array.reduce((acc, curr) => acc + curr, 0) / array.length : 0;
};

const checkArrayValidation = (array) => {
    return Array.isArray(array) && array.length
}
