// BEGIN
const getGirlFriends = (users) => {
    let result = [];
    for (let user of users) {
        for (let friend of user.friends) {
            if (friend.gender === 'female') {
                result.push(friend);
            }
        }
    }
    return result.flat();
};

export default getGirlFriends;
// END