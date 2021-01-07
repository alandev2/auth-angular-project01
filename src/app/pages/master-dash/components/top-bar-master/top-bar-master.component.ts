import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-master',
  templateUrl: './top-bar-master.component.html',
  styleUrls: ['./top-bar-master.component.css']
})
export class TopBarMasterComponent {
  @Output('onSelect') evt = new EventEmitter();
  constructor(private router: Router) { }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth'])
  }
}
