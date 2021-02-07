// 781， 森林中的兔子
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let sum = 0;
    let map = new Map();
    answers.forEach(item => {

        if (item === 0) {
            map.set(`${item}`, map.get(`${item}`) + 1)
            sum ++
        }
        if (map.get(`${item}`) !== undefined) {
            map.set(`${item}`,map.get(`${item}`) - 1)
            if (map.get(`${item}`) === 0) {
                map.delete(`${item}`); 
            }
        }
        if (map.get(`${item}`) === undefined) {
            sum += item + 1;
            map.set(`${item}`, item + 1);
        }
    })

    return sum;


};

console.log('[1, 1, 2]', numRabbits([1, 1, 2]));
console.log('[10, 10, 10]', numRabbits([10, 10, 10]));
