import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  fg: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.fg = this.fb.group({
      name: [''],
      count: [''],
      date: ['']
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.apiService.postData(this.fg.value).subscribe((data) => {
    });
  }
}
