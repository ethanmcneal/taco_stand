const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"


let changeTaco = tacos.map((taco) => {
    if(taco.id === 3) {
    return {...taco, name:'CHANGED'}
     } else {
        return taco
    }

})


console.log(changeTaco)
console.log(tacos)

// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)

tacosHTML = (tacoOBJ) => {
    const {name, about, price} = tacoOBJ
        return( `
            <div> 
            <h1> ${name} </h1>
            <h2> ${about} </h2>
            <p> ${price} </p>
            
            </div>`
        )
    }
console.log(tacosHTML(taco1))



// write a function that takes an tacoOBJ and return formatted price with

tacoPrice = (tacoOBJ) => {
    const {name, price} = tacoOBJ
    return (
        `${name} taco is $${price}.00`
    )
}
console.log(tacoPrice(taco2))
// .00 



// create a new array where all of the prices is formatted with .00

const tacoPrices = tacos.map((taco) => {
return {...taco, price:`$${taco.price}.00`}
})

console.log(tacoPrices)


// write a function that takes an array and logs each item in the array

// hint forEach

logTacoArray = tacos.forEach((taco) => {
    console.log(taco)

})





// use the find method to return the object with id:1

findTaco = tacos.find((taco) => {
    if(taco.id === 1) {
        return taco
    }
    })

    console.log(findTaco)



// return a new array with all prices greater than 19

expensiveTacos = tacos.filter((taco) => {
    if (taco.price >= 20) {
        return taco
    }
})

console.log(expensiveTacos)



// return a new array with a 'about' key where it is a combo of

// name price and about

moreDescriptiveTacos = tacos.map((taco) => {
    return {...taco, about:`${taco.name} taco is $${taco.price}.00 and it is ${taco.about}`}
})

console.log(moreDescriptiveTacos)



///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

readTacos = moreDescriptiveTacos.map((taco) => {
    return (`<div> 
        <h1> ${taco.name}</h1>
        <h2> $${taco.price}.00 </h2>
        <h2> ${taco.about} </h2>
    </div>`

    )
})

console.log(readTacos)

// Update (update a taco) 

updateTaco = (tacoID, nameChange) => {
    return tacos.map((taco) => {
        if (tacoID === taco.id) {
            return {...taco, name:`${nameChange}`}
        }
        else {return taco}
    
    })


}
console.log(updateTaco(2, 'steak'))


// Remove (delete a taco) 

deleteTaco = (tacoID) => {
    return tacos.filter((taco) => {
        if (tacoID !== taco.id) {return taco}
    })
}

console.log(deleteTaco(2))
// Create (add a taco) 


// I wanted to make this create function a little bit smarter, it makes sure that every param is defined before making
// the new taco, so that you don't have a taco without any of the required params. it is probably terrible readability
// but I like it, if it doesn't have a required param, it will tell you "undefined params" before giving you the error that 
// new tacos is undefined
// Im sure I could use the promise method to make this better

createTaco = (newID, newName, newPrice, newAbout) => {
    if (newID !== undefined && newName !== undefined && newPrice !== undefined && newAbout !== undefined) {
     newTacos = [...tacos, {id: newID, name:`${newName}`, price: newPrice, about: `${newAbout}`}] }
  else { return 'Undefined params'} 
 }

 console.log(createTaco(4, 'pork', 20, 'not that good'))
 console.log(newTacos)

// newTacos = [...tacos, {name:'pork', price:'22', about:'not that good'}]

// console.log(newTacos)


// bonus use reduce to return the sum of prices in tacos array
const reducer = (sum, injection) => sum + injection

tacoPriceArray = [20, 18, 30]

console.log(tacoPriceArray.reduce(reducer));


// bonus do in rails

// bonus create you own