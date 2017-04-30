import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {Employe} from "./employe";

@Pipe({
    name: 'search',
    pure: false
})

@Injectable()
export class SearchPipe implements PipeTransform {
    transform( employees: Employe[], category: string ): any {
        if (employees == null) {
            return null;
        }
        if (category && Array.isArray(employees)){
            return employees.filter(employe => {
                return employe.lastName.toLowerCase().indexOf(category) !== -1;
            });
        }
    }
}