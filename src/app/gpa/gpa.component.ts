/*
============================================
; Title:  gpa.component.ts
; Author: Professor Krasso
; Modified by: Kevin Jones
; Date: 29 June 2021
; Description: GPA component TS file
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  //@ts-ignore
  @Input() gpaTotal: number;
  constructor() {}

  ngOnInit(): void {}
}
