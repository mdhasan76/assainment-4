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