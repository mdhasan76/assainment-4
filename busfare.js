function publicBusFare(man) {
    if ((typeof man) !== 'number') {
        return 'plase enter number type value';
    }
    const removeReserveBuses = man % 50;
    const removeReserveMicro = removeReserveBuses % 11;
    const totalRestManCost = removeReserveMicro * 250;
    return totalRestManCost;
}
const arr = [1, 2, 3]
console.log(publicBusFare(50));
console.log(publicBusFare('hasan'));
console.log(publicBusFare(arr));
console.log(publicBusFare(235));
// console.log(publicBusFare(365));