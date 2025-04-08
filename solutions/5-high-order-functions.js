import _ from 'lodash';

// BEGIN
const takeOldest = (arr, count = 1)=>{
    let newArr = arr.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday));
    return newArr.slice(0, count);
}
export default takeOldest;
// END