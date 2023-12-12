new Set([1,1,2,2,3,4])
//set(4){1,2,3,4}



// [...new Set("referee")].join("")
//'ref'




        //What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{[1,2,3]: true, [1,2,3]:false}

    //Map(2) {Array(3) => true, Array(3) => false}
    //key: (3) [1,2,3] value: true
    //key: (3) [1,2,3] value: false
    //size: 2




        //Write a function called hasDuplicate which accepts an array and 
        //returns true or false if that array contains a duplicate
        // hasDuplicate([1,3,2,1]) // true
        // hasDuplicate([1,5,-1,4]) // false
const hasDuplicate = (arr) => new Set(arr).size !== arr.length
    // [...new Set(arr)]




    //Write a function called vowelCount which accepts 
    //a string and returns a map where the keys are numbers 
    //and the values are the count of the vowels in the string.
const vowels = (lett) => {
    return "aeiou".includes(lett);
}
// const vowelCount = (str) => {
//     const vowelMap = new Map();
//     for(let lett of str){
//         if(vowels(lett.toLowerCase())){
//             vowelMap.set(lett.toLowerCase(), vowelMap.get(lett.toLowerCase())+1);
//         } else {
//             vowelMap.set(lett.toLowerCase(), 1)
//         }
//     }
//     return vowelMap;
// }
const vowelCount = (str) => {
        const vowelMap = new Map();
        for(let lett of str){
            let lCLett = lett.toLowerCase();
            if(vowels(lCLett)){
                if(vowelMap.has(lCLett)){
                vowelMap.set(lCLett, vowelMap.get(lCLett)+1);
            } else {
                vowelMap.set(lCLett, 1)
            }
        }
        
    } return vowelMap;
}


