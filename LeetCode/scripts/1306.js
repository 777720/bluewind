/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const dfs = (value) => {
        if (!value) {
            return false
        }
        if (arr[value] === 0) {
            return true;
        }
        return (value + arr[value] < arr.length) && dfs(value + arr[value]) || (value - arr[value] > 0) && dfs(value - arr[value]);
    }

    return dfs(start);
};


var canReach2 = function (arr, start) {
    const quene = [start];
    while (quene.length !== 0) {
        const target = quene.shift();
        if (arr[target] === 0) {
            return true
        }
        (target + arr[target] < arr.length) && quene.push(target + arr[target]);
        (target - arr[target] > 0) && quene.push(target - arr[target])
    }
    return false
}

console.log('[4,2,3,0,3,1,2], 5', canReach2([4,2,3,0,3,1,2], 5));
console.log('[4,2,3,0,3,1,2], 0', canReach2([4,2,3,0,3,1,2], 0));