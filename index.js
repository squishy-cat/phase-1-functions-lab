// Code your solution in this file!
function distanceFromHqInBlocks (pickupBlock) {
    return Math.abs(pickupBlock - 42); 
}

function distanceFromHqInFeet (pickupFeet) {
    return (Math.abs(pickupFeet - 42) * 264);
}

function distanceTravelledInFeet (startBlock, endBlock) {
    return (Math.abs(endBlock - startBlock) * 264);
}

function calculatesFarePrice (start, destination) {
    let distanceTravelled = Math.abs(start - destination) * 264;
    if (distanceTravelled < 400) {
        return 0;
    } else if (distanceTravelled > 400, distanceTravelled < 2000) {
        return (distanceTravelled - 400) * .02;
    } else if (distanceTravelled > 2000, distanceTravelled < 2500) {
        return 25;
    }else if (distanceTravelled > 2500) {
        return 'cannot travel that far';
    }
}