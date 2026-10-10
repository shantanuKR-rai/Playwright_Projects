const marks=[78, 45, 92, 33, 67, 88, 54, 29, 95, 71];
let total = 0;
let highest = marks[0];
let lowest = marks[0];
let passed = 0;
let failed = 0;
// Array for loop 
for(let i=0;i<10;i++){
    console.log(`Student${i+1}: ${marks[i]}`)
    total= total+marks[i];
    /**highest
     * marks
     */
    if(highest< marks[i+1]){
        highest= marks[i+1]
    }

    
}console.log(total); console.log(highest);