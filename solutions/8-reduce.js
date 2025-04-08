// BEGIN
const groupBy = (objects, prop) => {
    return objects.reduce((acc, obj) => {
        let key = obj[prop];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
};

export default groupBy;
// END