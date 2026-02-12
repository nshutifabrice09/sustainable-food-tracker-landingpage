import { Component } from '@angular/core';
import { Auth } from '../../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
constructor(
  private router: Router,
  private auth: Auth  
) {}
}
