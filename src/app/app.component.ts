import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  constructor() {}
}
import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu: IonMenu;

  constructor(private router: Router) {}

  navigateToPage3() {
    this.router.navigateByUrl('/page3');
  }

  navigateToPage4() {
    this.router.navigateByUrl('/page4');
  }
}
import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) menu: IonMenu;

  constructor(private router: Router) {}

  navigateToPage1() {
    window.open('/page1', '_blank');
  }

  navigateToSearch() {
    this.router.navigateByUrl('/search');
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
