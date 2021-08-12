class Father {
    constructor(){
        this.fName = "Abdil";
    }
}

class Child extends Father {
    constructor(cName){
        super();
        this.childName = cName;
    }
}

const child1 = new Child("Asif");
console.log(child1);