function publicBusFare(man) {
    if ((typeof man) !== 'number') {
        return 'plase enter number type value';
    }
    const removeReserveBuses = man % 50;
    const removeReserveMicro = removeReserveBuses % 11;
    const totalRestManCost = removeReserveMicro * 250;
    return totalRestManCost;
}