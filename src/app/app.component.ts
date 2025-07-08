import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import { UserTableComponent } from "./components/user-table/user-table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
