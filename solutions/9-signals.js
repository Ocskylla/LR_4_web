import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeEmailDomains = (emails) => {
  let result = {};
  for(let email of emails) {
    let domain = email.split('@')[1];
    if(freeEmailDomains.includes(domain)) {
      if (!result[domain]) {
        result[domain] = 1;
      } else {
        result[domain] += 1;
      }
    }
  }
  return result;
}
export default getFreeEmailDomains;
// END