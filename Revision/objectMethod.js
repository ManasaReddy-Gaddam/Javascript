const testObject = {
    name : 'abhilash',
    age : 25,
    greet : function() {
        console.log(this);
    }
}
testObject.greet();