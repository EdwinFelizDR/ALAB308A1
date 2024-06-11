let globalCounter = 0;
function increment() {
    globalCounter = globalCounter + 1;
    console.log( globalCounter);
    increment();
    }

try{
    increment();
    }

catch(err){
    console.log("counter value error", globalCounter);
}