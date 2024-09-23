const getMean = (array) => {
    return array.reduce((acc,cur) => acc + cur, 0) / array.length
}


const calculate = () => {
    //turn input values to array
    const valueArray = document.querySelector("#numbers").value.split(/,\s*/g)
    
    //call functions
    const mean = getMean(valueArray)
    

    //render result
    document.querySelector("#mean").textContent = mean;

    console.log("calcul", valueText);    
};