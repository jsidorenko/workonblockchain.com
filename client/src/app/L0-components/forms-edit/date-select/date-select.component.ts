import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-forme-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.css']
})
export class DateSelectComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  constructor() { }

  ngOnInit() {
  }

}
