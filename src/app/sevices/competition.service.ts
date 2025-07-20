import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../Constant/constant';
import { CompetitionModel } from '../model/competition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient) {}

  getCompetition(): Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>(
      Constant.API_URL + 'GetAllCompetition'
    );
  }

  createCompetition(obj: CompetitionModel) {
    return this.http.post(Constant.API_URL + 'competition', obj);
  }
}
