/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;

    for(let i = 0; i < preferences.length; i++){

        let x = preferences[i] - 1;
        let y = preferences[x] - 1;
        let z = preferences[y] - 1;

        if(z === i && y !== x){
            preferences[i] = null;
            preferences[x] = null;
            preferences[y] = null;

            count++
        }


    }

    return count;
};
