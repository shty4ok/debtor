import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Debts} from '../data';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

  debts: Debts;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDebtorArray();
  }

  getDebtorArray() {
    this.apiService.getData().subscribe(response => this.debts = response);
  }
}
