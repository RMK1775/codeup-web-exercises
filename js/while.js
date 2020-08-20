
let initialValue = 2;
while(initialValue <= 65536){
    console.log(initialValue + '\n');
    initialValue *= 2;
}

function conesForSaleToday() {
    var availableCones = Math.floor(Math.random() * 50) + 50;
    do {
        var customerRequest = Math.floor(Math.random() * 5) + 1;
        if (availableCones === 0) {
            console.log("Yay! I sold them all.")
            break;
        } else if (customerRequest > availableCones) {
            console.log("I can't sell you " + customerRequest + " cones because I only have " + allCones)
        } else {
            console.log(customerRequest + " cones sold")
            availableCones -= customerRequest
        }
    } while (availableCones >= 0)
}

conesForSaleToday();
