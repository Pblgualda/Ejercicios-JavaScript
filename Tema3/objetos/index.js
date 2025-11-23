//1

class Person{
    stomach = [];
    name;
    age;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;        
    }

    eat(food)
    {
        if(this.stomach.length<9)
        {
            this.stomach.push(food);
            console.log("Has comido "+food);
        }
        else
        {            
            console.log("el estomago esta lleno, no puedes comer más");
        }
    }

    poop()
    {
        this.stomach = [];
    }
}

let persona1 = new Person("Pablo",18);
persona1.eat("Pizza");

//2

class Car{
    model;
    milesPerGallon;
    tank;
    odometer;
    constructor(model,milesPerGallon){
        this.odometer=0;
        this.tank=0;
        this.milesPerGallon=milesPerGallon;
        this.model=model;
    }

    fill(gallons){
        this.tank=this.tank+gallons;
    }

    drive(distance){
        if(this.tank<=0)
            {
                return "i ran out of fuel at "+this.odometer+" miles";
            }
        this.odometer=this.odometer+distance;
        this.tank=this.tank-(this.milesPerGallon/distance);
    }
}

let coche = new Car("Seat",20);
coche.fill(20);
coche.drive(20);

//3

class Lambdasian{
    name;
    age;
    location;
    constructor(objeto){
        this.name=objeto.name;
        this.age=objeto.age;
        this.location=objeto.location;
    }

    speak(){
        return "Hello, my name is "+this.name+", I am from "+this.location;
    }
}

class personav2{
    name;
    age;
    location;
    constructor(name,age,location){
        this.name=name;
        this.age=age;
        this.location=location;
    }
}

let persona2 = new personav2("Pablo",18,"Granada");
let Vlambdasian = new Lambdasian(persona2);

console.log(Vlambdasian.speak());

//4

class Instructor extends Lambdasian{
    speciality;
    favLanguage;
    catchPhrase;
    constructor(objeto,objeto2){
        super(objeto);
        this.speciality=objeto2.speciality;
        this.favLanguage=objeto2.favLanguage;
        this.catchPhrase=objeto2.catchPhrase;
    }
    demo(subject){
        return "Today we are learning about "+subject;

    }
    grade(student,subject){
        return student.name+" receives a perfect score on "+subject;

    }
}

class Student extends Lambdasian{
    previousBackground;
    className;
    favSubjects;
    constructor(objeto3){
        super(objeto1);
        this.className=objeto3.className;
        this.previousBackground=objeto3.previousBackground;
        this.favSubjects=objeto3.favSubjects;
    }
    listSubjects(){
        
    }

    PRAssigment(subject){
        return this.name+" has submitted a PR for "+subject;

    }

    sprintChallenge(subject){
        return this.name+" has begun sprint challenge on "+subject;
    }
}

//6

class projectManager extends Instructor
{
    gradClassName;
    favInstructor;
    constructor(objeto4){
         
    }
}

//7

