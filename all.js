// Q-1 Radian To Degree Convert
function radianToDegree(radian) {
    if ((typeof radian) != 'number') {
        return "plase enter Number type Value"
    }
    const degree = radian * 57.2958;
    return parseFloat(degree.toFixed(2));
}


// Q-2 isJavaScriptFile
function isJavaScriptFile(string) {
    if ((typeof string) != 'string') {
        return "please enter text"
    }
    const validFile = string.endsWith('.js');
    return validFile;
}

// Q-3 Oil Cost 
function oilPrice(diesel, petrol, octane) {
    if ((typeof diesel != 'number') || (typeof petrol) != 'number' || (typeof octane != 'number')) {
        return 'Plase enter Number type Value';
    }
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const dieselCost = diesel * dieselPrice;
    const petrolCost = petrol * petrolPrice;
    const octaneCost = octane * octanePrice;

    const totalCost = dieselCost + petrolCost + octaneCost;
    return totalCost;
}

// Q-4 Bus Fare rest man Cost 
function publicBusFare(man) {
    if ((typeof man) !== 'number') {
        return 'plase enter number type value';
    }
    const removeReserveBuses = man % 50;
    const removeReserveMicro = removeReserveBuses % 11;
    const totalRestManCost = removeReserveMicro * 250;
    return totalRestManCost;
}
// Q-5 Chack Is best friend
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
