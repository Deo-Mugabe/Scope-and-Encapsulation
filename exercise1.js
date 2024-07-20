
String.prototype.filter = function(bannedWords) {
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};

// Test Exercise 1
console.log("This house is not nice!".filter(['not']));  // Output: "This house is nice!"
