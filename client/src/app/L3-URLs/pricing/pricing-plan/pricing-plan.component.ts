import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../user.service';

@Component({
  selector: 'app-u-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit {
  viewBy;companyDoc;currentUser;showNavbar;

  constructor(private authenticationService: UserService, private router: Router) {}

  ngOnInit() {
    this.viewBy = 'general';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser && this.currentUser.type === 'candidate') this.viewBy = 'candidate';
    else if(this.currentUser && this.currentUser.type === 'company') {
      this.viewBy = 'company';
      this.showNavbar = true;
      let route: any;
      route = this.router.url;
      route = route.split('/');
      if(route[1] === 'pricing')
        this.showNavbar = false;

      this.authenticationService.getCurrentCompany(this.currentUser._id, false)
      .subscribe(
        data => {
          this.companyDoc = data;
        },
        error => {
          if(error['message'] === 500 || error['message'] === 401) {
            localStorage.setItem('jwt_not_found', 'Jwt token not found');
            localStorage.removeItem('currentUser');
            localStorage.removeItem('googleUser');
            localStorage.removeItem('close_notify');
            localStorage.removeItem('linkedinUser');
            localStorage.removeItem('admin_log');
            window.location.href = '/login';
          }
          if(error['message'] === 403) this.router.navigate(['/not_found']);
        }
      );
    }
    else{}
  }

}
