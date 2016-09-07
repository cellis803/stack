function sum() {
    var sum = 0;

    for (var i in arguments) {
        if (typeof arguments[i] !== 'number') {
            throw new Exception();
        }
    }

    for (var i in arguments) {
        sum += arguments[i];
    }
    return sum;
}

exports.sum = sum;