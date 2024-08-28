/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};


let f = createHelloWorld();
f([{},null,42]); 
f(); 

 