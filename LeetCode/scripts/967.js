// 967 连续差相同的数字

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let result = [];
    const dfs = (val) => {

        if (val.length === n) {
            result.indexOf(val) === -1 ? result.push(val) : null;
            return;
        }
        const valInt = parseInt(val)
        const valLast = parseInt(val.charAt(val.length - 1));
        const targetLeft = valLast - k
        const targetRight = valLast + k
        if (targetLeft >= 0  &&  targetLeft < 10 ) {
            dfs(`${valInt}${targetLeft}`)
        }
        if (targetRight >= 0  &&  targetRight < 10) {
            dfs(`${valInt}${targetRight}`)
        }     
    }
    for(let i = 1; i < 10;  i++) {
        dfs(`${i}`)
    }

    return result

};


console.log('3,7', numsSameConsecDiff(3, 7))
console.log('2,1', numsSameConsecDiff(2, 1))
console.log('2,0', numsSameConsecDiff(2, 0))
