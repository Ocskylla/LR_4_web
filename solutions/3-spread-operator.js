// BEGIN
const convert = (...dates) =>{
    let res = [];
    for(let [year, month, day] of dates){
        let newDate = new Date(year, month, day);
        res.push(newDate.toDateString());
    }
    return res;
}
export default convert;
// END