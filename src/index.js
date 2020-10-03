exports.min = function min(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0
    }
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }


    return array.sort(compareNumeric).shift()
}

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0
    }

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }


    return array.sort(compareNumeric).pop()
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length == 0) {
        return 0
    }

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    let temp = array.reduce((sum, current) => {
        return sum + current
    })
    return temp / array.length
}
