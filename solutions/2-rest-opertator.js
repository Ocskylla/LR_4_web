import _ from 'lodash';

// BEGIN
const average =(...params)=>{
    if(params.length===0) return null;
    return _.sum(params)/params.length;
};
export default average;
// END