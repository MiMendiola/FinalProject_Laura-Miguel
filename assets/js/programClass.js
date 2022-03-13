class Program{
    constructor(id,name,courses){
        this.id=id;
        this.name=name;
        this.courses=courses;
    }
    get Id(){
        return this.id;
    }
    //Id is readonly
    get Name(){
        return this.name;
    }
    set Name(newName){
         this.name=newName;
    }
    get Courses(){
        return this.courses;
    }
    set Courses( newCourses){
        this.courses=newCourses;
    }
}
export default Program;