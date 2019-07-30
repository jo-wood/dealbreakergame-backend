module.exports = {
  newSortMatchesArray: function(userMatchLog) {
    //console.log(userMatchLog);
    //convert to array to sort based on match percent
    var sortedArray = [];
    for (let userID in userMatchLog) {
        sortedArray.push([userID, userMatchLog[userID]]);
    }
    //console.log('Converted-ARRAY: ', sortedArray);
    sortedArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    //convert back to object
    let resultObjectArray = []
    for(let userLog of sortedArray) {
        let tempObj = {};
        tempObj[userLog[0]] = userLog[1];
        resultObjectArray.push(tempObj);
    }
    //console.log('ResultObject: ', resultObjectArray);
    //small issue it is an object with this return and not a array that can be sorted and incrimented
    return resultObjectArray;
  }
}
