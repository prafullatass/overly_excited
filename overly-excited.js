//Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.

*/
//using string functions only
const useSlice = (theWordArray, addCharater) => {
    for (let i = 0; i < theWordArray.length; i++) {
        substr = theWordArray.slice(0,i+1)
        if((i+1) % 3 === 0 )
             substr[i] = substr[i].concat(addCharater)
        console.log(substr.join(" "))
    }
}

useSlice(sentence, "!")



const addExcitement = (theWordArray, addCharater, numTimes)  => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        if((i+1) % 3 === 0)
            buildMeUp += `${theWordArray[i]}${addCharater.repeat(numTimes)} `
        else
          buildMeUp += theWordArray[i] + " "
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "!", 3)