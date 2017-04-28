export class Employe {
    public id: string;
    public firstName: string;
    public lastName: string;
    public salary: number;
    public birthday: string;
    public active: boolean;

    constructor(id, firstName, lastName, salary, birthday, active ){
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.birthday = birthday;
        this.active = active;
    }

}
