import { Injectable } from '@angular/core';
import { Demande } from '../models/demande';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelebrationMariageService {

  url='http://localhost:8099/ws/demande';

  constructor(private http: HttpClient){}

  /**
     * enregistrer une demande.
     *
     * @param faire une demande.
     */
    enregistrer(demande : Demande): Observable<Demande>{
      return this.http.post<Demande>(this.url + '/enregistrer', demande)
    }
}
