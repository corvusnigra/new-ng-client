export class Employe {

    public firstName: string;
    public lastName: string;
    public salary: number;
    public birthday: string;
    public active: boolean;

    constructor(firstName, lastName, salary, birthday, active ){

        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.birthday = birthday;
        this.active = active;
    }

}
