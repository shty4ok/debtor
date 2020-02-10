import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  fg: FormGroup;
  @Output() onChanger = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      name: [''],
      count: [''],
      date: ['']
    });
  }

  ngOnInit(): void {
  }

  submit() {
  this.onChanger.emit(this.fg);
  }

}
