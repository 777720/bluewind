/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let length = flowerbed.length;
    let max = 0
    for(let i = 0; i < length; i++) {
        if (max >= n) {
            return true;
        }
        if (flowerbed[i] === 0) {
            if ((i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
                console.log('flowerbed[i]', flowerbed[i], i);
                flowerbed[i] = 1;
                ++ max
            }
        }
    }
    if (max >= n) {
        return true;
    } else {
        return false;
    }
};

// console.log(canPlaceFlowers([1,0, 0 ,0, 0 ,1], 2));
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));