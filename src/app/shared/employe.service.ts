import { Injectable } from '@angular/core';

@Injectable()
export class EmployeService {
  // адрес сервиса
  private url = "http://localhost:3000/api/employes";

  constructor() { }

}
