var ATS = ATS || {};
ATS.array = [2, 8, 99, 1, 0, 4, -5, 33, 6];

(function (array) {
    array.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log(array);
})(ATS.array);

(function (array) {
    console.log(array.slice(0, 5));
    console.log(array.slice(array.length - 5));
})(ATS.array);

(function (array) {
    var result = array.reduce(function (sum, currentItem) {
        if (currentItem % 2 === 0) {
            return sum + currentItem;
        }

        return sum;
    }, 0);

    console.log(result);
})(ATS.array);

ATS.array2 = [];

(function (array) {
    var i = 1;
    while (i <= 100) {
        array.push(i);
        i++;
    }

    console.log(ATS.array2);
})(ATS.array2);

(function (array) {
    var list = array.filter(function (item) {
        return item % 2 === 0;
    }).map(function (item) {
        return Math.pow(item, 2);
    });

    console.log(list);
})(ATS.array2);

