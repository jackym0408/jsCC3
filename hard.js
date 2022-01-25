function p1(){
    const pii = {
    name: "jackeline",
    ssn: 0000,
}
    return{ 
        getName: function() {
            return pii.name;
        }
    }

};

const brian = p1(); //why other name?

console.log(brian.getName());