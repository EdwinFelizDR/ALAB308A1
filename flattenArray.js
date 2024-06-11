// take an array as input and returns a flattened version of it.
function flattenArray(arr) {
    let flattened = []; //initializes an empty array `flattened`
     //iterate all over all elements in the input array
    arr.forEach(item => {
        if (Array.isArray(item)) { //is the element an array
            flattened.push(...flattenArray(item)); //if the elements is an array calls `flattenArray`
        } else {
            flattened.push(item); //push a single element if not an array
        }
    });
 
    return flattened; //return the flattened array
 }
 
 // This function takes another function and a list
 // of arguments, and uses a linear loop rather than
 // traditional recursion to handle the function calls.
 //  
 // This prevents the stack overflow, while still
 // maintaining the declarative approach provided by
 // recursive functions.
 
 const trampoline = (fn,...args) => {
    let result = fn(...args);
    while (typeof result === 'function'){
       result = result()
    }
    return result;
 }
 
 // It takes an array (nestedArray) as input.
 const tflattenArray = trampoline(flattenArray)
 
 //example nested array with various levels of nesting.
 let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
 // The tflattenArray function is called with the nestedArray and storage the
 // result on flatArray.
 let flatArray = tflattenArray(nestedArray);
 console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7]