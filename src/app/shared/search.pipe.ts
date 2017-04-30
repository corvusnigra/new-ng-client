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
            if (search) {
                return employees.filter(employe => {
                    return employe.lastName.toLowerCase().indexOf(search) !== -1;
                });
            }
        }
    }
}