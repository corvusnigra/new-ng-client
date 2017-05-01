import { Pipe, PipeTransform } from '@angular/core';
import {Employe} from "./employe";

@Pipe({
    name: 'search',
    pure: false
})

export class SearchPipe implements PipeTransform {
    transform( employees: Employe[], category: string ): any {
        if (employees == null) {
            return null;
        }
        if (category && category !== ' ' && Array.isArray(employees) ) {
            let search  =  category.trim().toLowerCase();
            if (search.length > 2) {
                return employees.filter(employe => {
                    let lastName = employe.lastName.toLowerCase();
                    let firstName = employe.firstName.toLowerCase();
                    // let fullName = `${firstName}${lastName}`.toLowerCase();
                    if (lastName.indexOf(search) !== -1 || firstName.indexOf(search) !== -1 ) {
                        return true;
                    }
                });
            }
        }
    }
}