function isBestFriend(object1, object2) {
    if ((typeof object1) != 'object' || (typeof object2) != 'object') {
        return 'Please Enter Object type Input';

    }
    else if (Array.isArray(object1) == true || (Array.isArray(object2)) == true) {
        return 'Please Enter Object type Input';
    }

    else {
        if (object1['name'] === object2['friend'] && object2['name'] === object1['friend']) {
            return true;
        }
        else {
            return false;
        }
    }
}

const obj1 = {
    name: 'doe',
    friend: 'alex'
}
const arr = [1, 3, 4];
// console.log(Array.isArray(arr));
const obj2 = {
    name: 'alex',
    friend: 'doe'
}
const obj3 = {
    name: 'alex',
    friend: 'tom'
}
console.log(isBestFriend(obj1, arr))
console.log(isBestFriend(obj1, obj2))
console.log(isBestFriend(obj1, obj3))