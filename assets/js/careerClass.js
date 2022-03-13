import Students from "./studentClass.js";
import {CareerMap} from "./programs.js";

class Career extends Students {

    constructor(id,name,age,email,adress,phone,level,program,currentCourse){
        super(id,name,age,email,adress,phone);
        this.level = level;
        if(!CareerMap.get(program.id))
        {
            throw new Error("This program doesn't exist in Career! :P");
        }
        this.program=program;
        const courseIndex=program.Courses.indexOf(currentCourse);
        if(courseIndex<0){
            throw new Error("This course doesn't exist in the current program");
        }
        this.currentCourse = currentCourse;
        this.currentCourseIndex=courseIndex;
        this.gpaArray=[];
        super.enrollCourse(currentCourse)
    }
    settingGpa(gpa){
        this.gpaArray[this.currentCourseIndex]=gpa;
    }
    settingCurrentCourse(course){
        const courseIndex=this.program.Courses.indexOf(course);
        if(courseIndex<0){
            throw new Error("This course doesn't exist in the current program");
        }
        this.currentCourse = course;
        this.currentCourseIndex=courseIndex;
        this.enrollCourse(course);
    }
    gpaAverage(){
        let totalCourses = this.enrolled_courses.size;
        let totalGPA = 0
        for(let gpa of this.gpaArray){
            if(gpa){
                totalGPA+=gpa;
            }
        }
        return totalGPA/totalCourses
    }
}

const career1= new Career(1,"Laura",26,"laura@mail.com","algun lugar de Canada","101010",1,CareerMap.get("WD"),"HTML");

career1.settingGpa(90);

console.log(career1);

career1.settingCurrentCourse("CSS");
career1.settingGpa(100);

career1.settingCurrentCourse("JS");
career1.settingGpa(80);

console.log(career1.gpaAverage());

export default Career;