import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var synapseThrow: any;
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../Model/user';
import { DataService } from "../data.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
        
    disable_account;
    marketing =true;
    currentUser: User;
    info: any = {};
    log;
    message;
	unread_msgs_emails = true;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router,private authenticationService: UserService,private dataservice: DataService) 
   { }

  ngOnInit() 
  {
       this.inform='';
	 // this.dataservice.currentMessage.subscribe(message => this.message = message);
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      //console.log(this.currentUser.type);
       if(this.currentUser && this.currentUser.type=='candidate')
       {
         
           this.authenticationService.getById(this.currentUser._id)
            .subscribe(
                data => 
                {
					if(data._creator.is_unread_msgs_to_send){
					   this.info.unread_msgs_emails = data._creator.is_unread_msgs_to_send;
				    }
					if(data.disable_account || data.marketing_emails)
                    {
                        this.info.marketing = data.marketing_emails;
                        this.info.disable_account= data.disable_account;
                    }
                });
     }
      
      else if(this.currentUser && this.currentUser.type=='company')
       {
            this.authenticationService.getCurrentCompany(this.currentUser._id)
            .subscribe(
                data => 
                {
				   if(data._creator.is_unread_msgs_to_send){
					   this.info.unread_msgs_emails = data._creator.is_unread_msgs_to_send;
				   }
				   if(data.disable_account || data.marketing_emails)
                    {
                        this.info.marketing = data.marketing_emails;
                        this.info.disable_account= data.disable_account;
                    }
                  
                },
                error => 
                {
                  
                });
       }
      
      else
       {
          this.router.navigate(['/not_found']);
          
       }
  }
    
    disable_msg;enable_msg;
    inform;
  account_setting()
  {
      this.inform='';
     /* if(this.info.disable_account==true)
      {
          this.disable_msg = "disable";
          this.enable_msg='';
          
      }
      if(this.info.disable_account==false)
      {
          this.enable_msg ="enable";
          this.disable_msg ='';
         
      }*/

      this.message = '';
      if(this.currentUser && this.currentUser.type=='candidate')
      {
    ////console.log(this.marketing);
     this.authenticationService.terms(this.currentUser._creator,this.info)
        .subscribe(
          data => 
          {
             if(data.error )
                {
                    this.log=data.error;
                }
               else
               {
                    this.inform = data;
                  //this.dataservice.changeMessage("Settings Updated Sucessfully");
                }
              
          });
      }
      
      if(this.currentUser && this.currentUser.type=='company')
      {
       this.authenticationService.company_terms(this.currentUser._creator,this.info)
            .subscribe(
                data => {

                    
                if(data.error )
                {
                    this.log=data.error;
                }
                
               else
               {
                    this.inform=data;
                  //this.dataservice.changeMessage("Settings Updated Sucessfully");
                }
                    
                },
                error => {
                  this.log = 'Something getting wrong';
                   
                });
       }
  }
  
  unread_msgs_emails_send(){
       this.inform='';
	  //console.log('set here');
	  if(this.currentUser)
      {
		this.authenticationService.set_unread_msgs_emails_status(this.currentUser._creator,this.info.unread_msgs_emails)
		.subscribe(
			data => 
			{
				if(data.error )
				{
					this.log=data.error;
				}
				else
				{
                    this.inform=data;
					//console.log(data);
				}
			},
			error => {
			  this.log = 'Something getting wrong';
			   
			}
		);
	  }
  }

}
