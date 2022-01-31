/* eslint-disable no-unused-vars */
function createCalculator(){
   return {
        total: 0,
        value: function(){return this.total;},
        subtract: function(num) { this.total -= num; this.value();},
        add:function (num){this.total += num; this.value();},
        clear: function() {this.total = 0;},
        
   }
}


function addSquareMethod(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i].square = function () {return this.total * this.total;};
    }
    return arr;
}
// the answer for addSquare is a bit much for my brain.it adds a function key to every object in an array
const humanCalculatorProto = {
        value: function(){return this.total;},
        subtract: function(num) { this.total -= num; this.value();},
        add:function (num){this.total += num; this.value();},
        clear: function() {this.total = -10;},
        total: -10,
}
    

function createHumanCalculator(){
       let humanCalculator = Object.create(humanCalculatorProto);
       return humanCalculator;
}