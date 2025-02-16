function distanceFromHqInBlocks(block) {
    const hq = 42;
    if (block < 42) {
        return 42 - block;
    } else {
        return block - 42;
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(pickupBlock, dropoffBlock) {
    if (pickupBlock < dropoffBlock) {
        return (dropoffBlock - pickupBlock) * 264;
    } else {
        return (pickupBlock - dropoffBlock) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet < 400) {
        return 0;
    } else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * .02;
    } else if (distanceInFeet < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}