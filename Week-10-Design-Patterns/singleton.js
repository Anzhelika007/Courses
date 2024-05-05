var Singleton = function(){
  if(Singleton.__instance) {
    return Singleton.__instance;
  }
  Singleton.__instance = this;
};


var obj1 = new Singleton();
console.log(Singleton.prototype);
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
console.log(obj2.test)
obj2.test; // => 1