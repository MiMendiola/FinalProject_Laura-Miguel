import Students from "./studentClass.js";
import {ESLMap} from "./programs.js";

class ESL extends Students {
    
    constructor(id,name,age,email,adress,phone,level,program,currentCourse){
        super(id,name,age,email,adress,phone);
        this.level = level;
        if(!ESLMap.get(program.id))
        {
            throw new Error("This program doesn't exist in ESL! :P");
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

export default ESL; 