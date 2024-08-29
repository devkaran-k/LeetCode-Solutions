/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(anotherVal) {
            if (val === anotherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(anotherVal) {
            if (val !== anotherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

// Example Usage:
try {
    expect(5).toBe(5); // true
    expect(5).notToBe(5); // throws "Equal"
} catch (error) {
    console.log(error.message); // Outputs the error message
}

