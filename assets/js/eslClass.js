//import Students from "./studentClass.js";

class Students{
    constructor(id,name,age,email,adress,phone){
        this.id =  id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.adress = adress;
        this.phone = phone;
    }

    get getId (){
        return this.id;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    get getEmail(){
        return this.email;
    }
    get getAdress(){
        return this.adress;
    }
    get getPhone(){
        return this.phone;
    }
    set setId (id){
        this.id = id;
    }
    set setName(name){
        this.name = name;
    }
    set setAge(age){
        this.age = age;
    }
    set setEmail(email){
        this.email = email;
    }
    set setAdress(adress){
        this.adress = adress;
    }
    set setPhone(phone){
        this.phone = phone;
    }



};

class ESL extends Students {
    constructor(id,name,age,email,adress,phone,level,gpa){
        super(id,name,age,email,adress,phone);
        this.level = level;
        this.gpa = gpa;
        this.enroll_courses = new Map();
    }

    gettingGpa(){
       for(let i of courses.values()){
           for(let x of this.enroll_courses.keys()){
               if(i == x){
                   return ESL1.name + "`s gpa in " + x + " is " + ESL1.gpa;
                   //console.log( ESL1.name + "'s gpa in " + x + " is " + ESL1.gpa);
               }
           }
       }
    }

    add_course(mapcourses,grade,idcourse){
        if( idcourse == "ESL"){
            this.enroll_courses.set(idcourse,grade);
        }else if(idcourse == "Tofel"){
            this.enroll_courses.set(idcourse,grade);
        }else if(idcourse == "Ielts"){
            this.enroll_courses.set(idcourse,grade);
        }

        return "The course has been added"
    }  

    gpaAverage(){
        let total = "";

        for(let i of this.enroll_courses.values()){
            total += i/this.enroll_courses.size;
        }

        return total
    }
}


const coursesEsl = new Map([["ESL","ESL"],["Tofel","Tofel"],["Ielts","Ielts"]]);



 let ESL1 = new ESL ("9090","Jose","27","test@gmail.com","ADRESS1","567899876","A1",6);
 ESL1.enroll_courses.set("ESL", ESL1.gpa);
 ESL1.enroll_courses.set("Ielts", 7);

 console.log(ESL1.gettingGpa());

 console.log(ESL1.add_course(courses,8,"Tofel"));

 console.log(ESL1.enroll_courses.values());

 console.log(ESL1.gpaAverage());

 //export default ESL;