const btn = document.getElementById("subBtn")

const getMean = (array) =>  {    
    return array.reduce((acc,cur) => acc + cur, 0) / array.length
};

const getMedian = (array) => {
    const sorted = array.sort((a,b) => a - b);    
    if ( sorted.length % 2 === 0){
        return (array[Math.floor(sorted.length / 2)] + array[Math.floor(sorted.length / 2) - 1]) / 2
    } else {
        return array[Math.floor(sorted.length / 2)]
    }
};

const getMode = (array) => {
    // make object to store counts per number
    const counts = {};    

    // save number and counts as key and value
    array.forEach((el) => counts[el] ? counts[el] += 1 : counts[el] = 1);
    
    // use set to filter unique values only
    if ( new Set(Object.values(counts)).size === 1){ // if set's length is 1
        return "all same" // means every number has same counts
    } else {        
        return Object.keys(counts).filter( // then filter counts key
            (el) => counts[el] === Object.values(counts).sort((a,b) => b - a)[0] // which as same value of first value in value array
        ).join(", ") // use join for more than two number remained.
    };
};


const getRange = (array) => {
    // array can't be a arg of Math.min. use spread operator ...array    
    return Math.max(...array) - Math.min(...array)
};

const getVariance = (array) => {
    // variance is (value - mean)**2.reduce(acc, cur => acc + cur, 0) / array.length
    const mean = getMean(array);
    return array.map((num) => (num - mean)**2).reduce((acc,cur) => acc + cur, 0) / array.length

};

const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    return Math.sqrt(variance);
}


const calculate = (e) => {
    e.preventDefault();

    //turn input values to array    
    const valueArray = document.querySelector("#numbers").value.split(/,\s*/g).map(el => Number(el)).filter(el => !isNaN(el));
    
    //call functions
    const mean = getMean(valueArray);
    const median = getMedian(valueArray);    
    const mode = getMode(valueArray);
    const range = getRange(valueArray);
    const variance = getVariance(valueArray);
    const standardDeviation = getStandardDeviation(valueArray);

    //render result
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
   
};

btn.addEventListener("click", calculate);