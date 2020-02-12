import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {DataDebtor} from "../data";

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

  addItem: DataDebtor;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDebtorArray();
  }

  getDebtorArray() {
    this.apiService.getData().subscribe(response => this.addItem = response);

  }
}
