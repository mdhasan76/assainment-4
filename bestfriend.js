// Q-4 Chack Is best friend
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