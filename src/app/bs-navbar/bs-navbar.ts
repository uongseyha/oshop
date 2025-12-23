import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'bs-navbar',
  standalone: true,
  templateUrl: './bs-navbar.html',
  styleUrls: ['./bs-navbar.css'],
  imports: [RouterLink]
})
export class BsNavbar {}
