import { Component, inject } from '@angular/core';
import { CompetitionService } from '../../sevices/competition.service';
import { Observable } from 'rxjs';
import { CompetitionModel } from '../../model/competition.model';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  src = inject(CompetitionService);

  competitionList$: Observable<CompetitionModel[]> = new Observable<
    CompetitionModel[]
  >();

  constructor() {
    this.competitionList$ = this.src.getCompetition();
  }
}
