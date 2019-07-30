module.exports = {
  sortedUserMatches: function(userMatchLog) {
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
    console.log('SORTED-ARRAY: ', sortedArray);
    //convert back to object
    let resultObject = {}
    for(let userLog of sortedArray) {
        let userID = userLog[0];
        resultObject[userID] = userLog[1];
    }
    console.log('ResultObject: ', resultObject);
    //small issue it is an object with this return and not a array that can be sorted and incrimented
    return resultObject;
  }
}
