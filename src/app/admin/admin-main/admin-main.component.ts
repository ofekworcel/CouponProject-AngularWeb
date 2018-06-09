import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }


}
