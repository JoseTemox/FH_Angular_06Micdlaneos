import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
         DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>
  <br>

  <app-css></app-css>
  <br>

  <app-clases></app-clases>
  <br>

  <p appResaltado ="orange">
    Hola Mundo
  </p>
  <br>

  <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(){
    console.log('ngOninit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentCnghecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewngChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
