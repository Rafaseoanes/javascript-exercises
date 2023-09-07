const removeFromArray = function(arrayToChange, ...toRemove) {

    // for(let i = 0; i < arrayToChange.length; i++){
    //     if(arrayToChange[i] === toRemove[i]){
            
    //     }
    // }

    ([1,2, 3], 3, 2, 1)

    return arrayToChange.filter(elementoActual =>{
     
        return !toRemove.includes(elementoActual);
     
    })
   
};

// Do not edit below this line
module.exports = removeFromArray;
