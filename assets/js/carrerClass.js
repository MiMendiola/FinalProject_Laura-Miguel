//import Students from "./studentClass.js";

class Carrer extends Students {
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


const coursesCarrers = new Map([["Web Development","WD"],["User Interface","UI"],["User experience","UX"],["Hospitality Management","HM"],["Digital Marketing","DM"]]);






