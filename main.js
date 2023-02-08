
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {

    const filteredFlowers = []  // Do not modify


    // Write your algorithm first, and then your code. Feel free to remove this comment

// akdfah;ifuaerfzknvlharfaerf.ndchjkl...........now.......for this function. 
// I believe the best place to start is with a for loop based on the previous projects 
// and the need to iterate through the array to find the desired prices. 
// and include an if else statement to filter out the problems answer.  
// current code has failed.....not sure why......what is wrong......
// wrong >< orignally changed
// had an else statement that logged filtered flowers, still wrong. took it out, 
// still wrong. lost track of what i have changed.......but I think it's working




// This for loop iterates through the flowers array that is filled with flower objects. 
// the if statement then filters out the flowers with the values of less than 2.00 in the key price array
// finally getting pushed in the filteredFlowers array to be returned by the function
    for (const flower of flowers) {
        if (flower.price < 2.00) {
        filteredFlowers.push(flower)
        } 
    }
    

    return filteredFlowers  // Do not modify

}




/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


    // Write your algorithm first, and then your code. Feel free to remove this comment

// adfhadkuaerhafhafhaurfhareoihfhdhiadfh.......okay...maybe this one will Work.
// This one will require me to iterate over the flowers array and then again in the nested USDA array
// so a for loop. and a 
// ugh no work. don't know why...........
// latest form.....think it's working, not sure what i changed



//this for loop begins by iterating through the flower objects in the flowers array
//the if statement breaks the flower object down to the usdaZones key to find the values that are 3 and 8
//finally pushing those flower in to the filteredFlowers array to be returned by the function
    for ( const flower of flowers ) {
        if ( flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
            filteredFlowers.push(flower)
        } 
    } 

    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify



    // Write your algorithm first, and then your code. Feel free to remove this comment

// easier one since it only has one request??????? 
// so once again looping through the flowers array of objects in then again to find the 
// key of color with the array value of orange.
// noda......lets try the next one

// origincally did not define orange....trial 2




//this for loop loops throught the flower objects in the flowers array
//the if statement selects the colors array key of the flower object to find the value of "Orange"
//finally pushing the flower object that has that value in the filteredFlowers array to be returned by the function
    for ( const flower of flowers ) {
        if ( flower.colors.includes("Orange")){
            filteredFlowers.push(flower)
        }
    }
    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify


    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */

// failed all the others.....lets see.....
// this one reminds me of the last project from sections 1,2,3.....
// creating many nested for loops that have the HTML elements 
// surrounding the existing elements of the flowers array
// nothing has printed other than some syntax errors... 
// once those are fixed them nothing prints at all.


//SLOW THE FUCK DOWN AND TAKE IT ONE PIECE AT A TIME

//this for loop accesses the flower objects in the Flowers array.
//the first action(+=) adds the `<article>` to the flowersHTMLString string
//next (+=) adds the `<h1></h1>` aroudn each of the 'type' keys in the flower objects
//next (+=) adds the `<h2>Colors</h2>` to the flowersHTMLString
// this for loop iterates through the values in array of the color key adding `<section></section>`
//next (+=) adds the `<h2>USDA Zones</h2>` to the flowersHTMLString
// this for loop iterates through the values in array of the usdaZones key adding `<div></div>`
//closing off the string with the addition (+=) of `</article>` to the flowersHTMLString
    for (const flower of flowers) {
        flowersHTMLString += `<article>`
        flowersHTMLString += `<h1>${flower.type}</h1>`
        flowersHTMLString += `<h2>Colors</h2>`
        for (const color of flower.colors) {
            flowersHTMLString += `<section>${color}</section>`
        }
        flowersHTMLString += `<h2>USDA Zones</h2>`
        for (const zones of flower.usdaZones) {
            flowersHTMLString += `<div>${zones}</div>`
        }
        flowersHTMLString += `</article>`




    








            // for (const type of flower.type) {
            //     typeH1 = `<h1>${flower.type}</h1>`
            //     flowersHTMLString.push(typeH1)
            //         for (const color of flower.colors) {
            //             colorH2 = `<h2>${"Colors"}</h2>`
            //             flowersHTMLString.push(colorH2)
            //                 for ( const color of flower.colors ) {
            //                     colorSection = `<section>${flower.colors}</section>`
            //                     flowersHTMLString.join(`</section><section>`)
            //         for (const zone of flower.usdaZones) {
            //             zoneH2 = `<h2>${"USDA Zones"}</h2>`
            //             flowersHTMLString.push(zoneH2)
            //                 for ( const zone of flower.usdaZones ) {
            //                     zoneDiv = `<div>${flower.usdaZones}</div>`
            //                     flowersHTMLString.join(`</div><div>`)
            //                 }
            //             }
            //         }
            //     }
            // }
        }







    return flowersHTMLString  // Do not modify
}















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

