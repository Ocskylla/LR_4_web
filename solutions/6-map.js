// BEGIN
const getChildren = (map) =>{
    let result = [];
    for (let t of map){
        result.push(t.children);
    }
    return result.flat();
}
export default getChildren;
// END