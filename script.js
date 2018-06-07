class cat {
    constructor(name,color) {
        this._name = name;
        this._color = color;
        this._sleep = 10;
    }
    
    get name() {
        console.log(`this is my cat her name is ${this._name}`);
        return this._name;
    }

    get color() {
        console.log(`my cat coco has three colors ${this._color}`);
        return this._color;
    } 

    eat(slumberInc) {
        this._sleep += slumberInc;
        console.log(`${this._name} ate a big meal of tuna. It is now sleeping for ${this._sleep}.`);    
    }
}

var newcat = new cat("coco","white, brown and gray");
console.log(newcat.name);
console.log(newcat.color);
newcat.eat(2);