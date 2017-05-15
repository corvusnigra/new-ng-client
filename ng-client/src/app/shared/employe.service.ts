import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Employe} from "./employe";
import {Http, Response} from "@angular/http";

@Injectable()
export class EmployeService {
    // адрес сервиса
    private url = "http://localhost:3000/api/employees";

    constructor(private http: Http) {
    }

    // GET
    public getEmployees(): Observable<Employe[]> {
        let employees = this.http.get(this.url)
            .map(this.extractEmployees)
            .catch(this.handleError);
        return employees;
    }

    public getEmploye(id: string): Observable<Employe> {
        let employe = this.http.get(this.url + '/' + id)
            .map(this.extractEmploye)
            .catch(this.handleError);
        return employe;
    }


// POST
    public addEmploye(employe: Employe): Observable<Employe> {
        return this.http.post(this.url, employe)
            .catch(this.handleError);
    }

// PUT

    public updateEmploye(employe: Employe): Observable<Employe> {
        return this.http.put(this.url + '/' + employe.id, employe)
            .catch(this.handleError);
    }


    // DELETE
    public deleteEmploye(employe: Employe) {
        return this.http.delete(this.url + "/" + employe.id)
            .catch(this.handleError);
    }


    private extractEmploye(response: Response) {
        let res = response.json();
        let employe: Employe;

        employe = new Employe(
            res._id,
            res.firstName,
            res.lastName,
            res.salary,
            res.birthday,
            res.active
        )
        return employe;
    }


    private extractEmployees(response: Response) {
        let res = response.json();
        let employees: Employe[] = [];
        for (let i = 0; i < res.length; i++) {
            employees.push(new Employe(
                res[i]._id,
                res[i].firstName,
                res[i].lastName,
                res[i].salary,
                res[i].birthday,
                res[i].active
            ));
        }
        return employees;
    }


    private handleError(error: any, cought: Observable<any>): any {
        let message = "";

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }

        console.error(message);

        return Observable.throw(message);
    }

}
