const returnFirstTwoDrivers = (arr)=>{
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = (arr)=>{
    return [arr[arr.length-2], arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =(x)=>{
    return (num)=>{
        return x * num;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, fn)=>{
    return fn(drivers)
}