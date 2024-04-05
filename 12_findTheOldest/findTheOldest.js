const findTheOldest = function (people) {

     let oldest = people.map((person)=>{

        if(person.yearOfDeath == undefined){
            person.yearOfDeath = new Date().getFullYear()
        }

        let age = person.yearOfDeath - person.yearOfBirth
         
        return {
            ...person,
            age: age
        }

     }).sort((a, b) =>{    
        return b.age - a.age
    })


    
    return oldest[0]

};

// Do not edit below this line
module.exports = findTheOldest;
