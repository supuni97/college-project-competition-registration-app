import { Component, inject, OnInit } from '@angular/core';
import { CompetitionModel } from '../../model/competition.model';
import { FormsModule } from '@angular/forms';
import { CompetitionService } from '../../sevices/competition.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-competition',
  imports: [FormsModule, DatePipe],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css',
})
export class CompetitionComponent implements OnInit {
  newObj: CompetitionModel = new CompetitionModel();

  competitionSrv = inject(CompetitionService);

  gridList: CompetitionModel[] = [];

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.competitionSrv.getCompetition().subscribe({
      next: (result) => {
        this.gridList = result;
      },
      error: () => {
        alert('API Error');
      },
    });
  }
  onSave() {
    this.competitionSrv.createCompetition(this.newObj).subscribe({
      next: () => {
        alert('Competition created');
      },
      error: () => {
        alert('API Error');
      },
    });
  }
}
