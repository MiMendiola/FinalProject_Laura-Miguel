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


export default Students;