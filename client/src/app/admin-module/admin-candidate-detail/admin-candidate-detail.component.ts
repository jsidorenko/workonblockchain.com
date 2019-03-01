import { Component, OnInit,ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../user.service';
import {User} from '../../Model/user';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-admin-candidate-detail',
  templateUrl: './admin-candidate-detail.component.html',
  styleUrls: ['./admin-candidate-detail.component.css']
})
export class AdminCandidateDetailComponent implements OnInit {

  id;user_id;
  first_name;last_name;description;companyname;degreename;
  interest_area;why_work;availability_day;
  countries;history;education;
  experimented;languages;current_currency;current_salary;image_src;
  imgPath;nationality;contact_number;
  credentials: any = {};
  admin_log;
  candidate_status;
  set_status;
  status_reason_rejected;
  status_reason_deferred;
  set_candidate_status = [
    {value:'approved', name:'Approved'},
    {value:'rejected', name:'Rejected'},
    {value:'deferred', name:'Deferred'},
    {value:'other', name:'Other'}
  ];

  set_candidate_status_rejected = [
    {value:'garbage', name:'Garbage'},
    {value:'recruiter', name:'Recruiter'},
    {value:'not technical', name:'Not Technical'},
    {value:'other', name:'Other'}
  ];

  set_candidate_status_deferred = [
    {value:'profile incomplete', name:'Profile Incomplete'},
    {value:'not looking for job', name:'Not Looking for Job'},
    {value:'job found', name:'Job Found'},
    {value:'not responded', name:'Not Responded'},
    {value:'other', name:'Other'}
  ];

  constructor(private http: HttpClient,private el: ElementRef,private route: ActivatedRoute,private authenticationService: UserService,private router: Router)
  {
    this.route.queryParams.subscribe(params => {
      this.user_id = params['user'];
    });


  }
  currentUser: User;
  info=[];
  approve;verify;is_verify;information;refeered;
  work_history;education_history;
  date_sort_desc = function (date1, date2)
  {
    if (date1.enddate > date2.enddate) return -1;
    if (date1.enddate < date2.enddate) return 1;
    return 0;
  };

  education_sort_desc = function (year1, year2)
  {
    if (year1.eduyear > year2.eduyear) return -1;
    if (year1.eduyear < year2.eduyear) return 1;
    return 0;
  };

  commercial;
  roles;
  platforms;
  email;
  response;
  referred_name;
  referred_link;
  detail_link;
  commercial_skills;
  formal_skills;
  created_date;
  selectedValueArray=[];
  visaRequiredArray = [];
  noVisaArray = [];
  ngOnInit()
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.admin_log = JSON.parse(localStorage.getItem('admin_log'));
    this.credentials.user_id = this.user_id;

    this.response = "";
    this.referred_link = "";
    this.referred_name = "";
    this.error = "";
    this.set_status = -1;
    this.status_reason_rejected = -1;
    this.status_reason_deferred = -1;


    if(this.user_id && this.admin_log && this.currentUser)
    {
      if(this.admin_log.is_admin == 1)
      {
        this.authenticationService.getById(this.user_id)
          .subscribe(
            data => {

              this.candidate_status = data['candidate'].status[0];
              if(this.candidate_status.status === 'created' || this.candidate_status.status === 'wizard completed' || this.candidate_status.status === 'updated' || this.candidate_status.status === 'updated by admin'){
              }
              else{
                this.set_status = this.candidate_status.status;
              }
              if(this.set_status === 'Rejected' || this.set_status === 'rejected'){
                this.status_reason_rejected = this.candidate_status.reason;
                $("#sel1-reason-rejected").css("display", "block");
              }
              if(this.set_status === 'Deferred' || this.set_status === 'deferred'){
                this.status_reason_deferred = this.candidate_status.reason;
                $("#status_reason_deferred").css("display", "block");
              }
              this.info.push(data);
              this.verify =data['is_verify'];
              if(data['candidate'].availability_day === '1 month') this.availability_day = '1 month notice period';
              else if(data['candidate'].availability_day === '2 months') this.availability_day = '2 months notice period';
              else if(data['candidate'].availability_day === '3 months') this.availability_day = '3 months notice period';
              else if(data['candidate'].availability_day === 'Longer than 3 months') this.availability_day = '3+ months notice period';
              else this.availability_day =data['candidate'].availability_day;

              if(data['candidate'].work_history) {
                this.work_history = data['candidate'].work_history;
                this.work_history.sort(this.date_sort_desc);
              }

              if(data['candidate'].education_history) {
                this.education_history = data['candidate'].education_history;
                this.education_history.sort(this.education_sort_desc);
              }

              if(data['candidate'].locations)
              {
                let citiesArray = [];
                let countriesArray = [];
                for (let country1 of data['candidate'].locations)
                {
                  let locObject : any = {}
                  if (country1['remote'] === true) {
                    this.selectedValueArray.push({name: 'Remote' , visa_needed : false});
                  }

                  if (country1['country']) {
                    locObject.name = country1['country'];
                    locObject.type = 'country';
                    if(country1['visa_needed'] === true) locObject.visa_needed = true;
                    else locObject.visa_needed = false;
                    countriesArray.push(locObject);
                    countriesArray.sort(function(a, b){
                      if(a.name < b.name) { return -1; }
                      if(a.name > b.name) { return 1; }
                      return 0;
                    });
                  }
                  if (country1['city']) {
                    let city = country1['city'].city + ", " + country1['city'].country;
                    locObject.name = city;
                    locObject.type = 'city';
                    if(country1['visa_needed'] === true) locObject.visa_needed = true;
                    else locObject.visa_needed = false;
                    citiesArray.push(locObject);
                    citiesArray.sort(function(a, b){
                      if(a.name < b.name) { return -1; }
                      if(a.name > b.name) { return 1; }
                      return 0;
                    });

                  }

                }

                this.countries = citiesArray.concat(countriesArray);
                this.countries = this.countries.concat(this.selectedValueArray);
                if(this.countries.find((obj => obj.name === 'Remote'))) {
                  let remoteValue = this.countries.find((obj => obj.name === 'Remote'));
                  this.countries.splice(0, 0, remoteValue);
                  this.countries = this.filter_array(this.countries);

                }

                if(this.countries && this.countries.length > 0) {

                  for(let loc of this.countries) {
                    if(loc.visa_needed === true)
                      this.visaRequiredArray.push(loc);
                    if(loc.visa_needed === false)
                      this.noVisaArray.push(loc);
                  }
                }

              }

              this.interest_area =data['candidate'].interest_areas;
              if(this.interest_area) this.interest_area.sort();
              this.roles  = data['candidate'].roles;
              if(this.roles) this.roles.sort();

              this.languages= data['candidate'].programming_languages;
              if(this.languages && this.languages.length>0){
                this.languages.sort(function(a, b){
                  if(a.language < b.language) { return -1; }
                  if(a.language > b.language) { return 1; }
                  return 0;
                })
              }

              if(data['candidate'] && data['candidate'].status){
                this.created_date = data['candidate'].status[data['candidate'].status.length-1].timestamp;
              }

              if(data['candidate'] && data['candidate'].blockchain) {

                if(data['candidate'].blockchain.commercial_skills) {
                  this.commercial_skills = data['candidate'].blockchain.commercial_skills;
                  this.commercial_skills.sort(function(a, b){
                    if(a.skill < b.skill) { return -1; }
                    if(a.skill > b.skill) { return 1; }
                    return 0;
                  })
                }

                if(data['candidate'].blockchain.commercial_platforms){
                  this.commercial = data['candidate'].blockchain.commercial_platforms;
                  if(this.commercial && this.commercial.length>0){
                    this.commercial.sort(function(a, b){
                      if(a.platform_name < b.platform_name) { return -1; }
                      if(a.platform_name > b.platform_name) { return 1; }
                      return 0;
                    })
                  }
                }
                if(data['candidate'].blockchain.experimented_platforms){
                  this.experimented = data['candidate'].blockchain.experimented_platforms;
                  if(this.experimented && this.experimented.length>0){
                    this.experimented.sort(function(a, b){
                      if(a < b) { return -1; }
                      if(a > b) { return 1; }
                      return 0;
                    })
                  }
                }
                if(data['candidate'].blockchain.smart_contract_platforms) {
                  this.platforms=data['candidate'].blockchain.smart_contract_platforms;
                  if(this.platforms && this.platforms.length>0){
                    this.platforms.sort(function(a, b){
                      if(a.platform_name < b.platform_name) { return -1; }
                      if(a.platform_name > b.platform_name) { return 1; }
                      return 0;
                    })
                  }
                }
                if(data['candidate'].blockchain.commercial_skills) {
                  this.commercial_skills = data['candidate'].blockchain.commercial_skills;
                  this.commercial_skills.sort(function(a, b){
                    if(a.skill < b.skill) { return -1; }
                    if(a.skill > b.skill) { return 1; }
                    return 0;
                  })
                }
                if(data['candidate'].blockchain.formal_skills){
                  this.formal_skills = data['candidate'].blockchain.formal_skills;
                  this.formal_skills.sort(function(a, b){
                    if(a.skill < b.skill) { return -1; }
                    if(a.skill > b.skill) { return 1; }
                    return 0;
                  })
                }

              }


              if(data['image'] != null )
              {

                this.imgPath =  data['image'];

              }

              if(this.approve === 1)
              {
                this.is_approved = "Aprroved";
              }

              else
              {
                this.is_approved = "";
              }

              if(data['referred_email'])
              {
                this.authenticationService.getReferenceDetail(data['referred_email'])
                  .subscribe(
                    refData => {
                      if(refData['candidateDoc']){
                        if(refData['candidateDoc']['first_name'] && refData['candidateDoc']['last_name'])
                          this.referred_name = refData['candidateDoc']['first_name'] + " " + refData['candidateDoc']['last_name'];
                        else
                          this.referred_name = refData['candidateDoc']._id ;


                        this.detail_link = '/admin-candidate-detail';
                        this.referred_link = refData['candidateDoc']._id;
                      }
                      else if(refData['companyDoc']){
                        if(refData['companyDoc'].first_name && refData['companyDoc'].last_name)
                          this.referred_name = refData['companyDoc'].first_name + " " + refData['companyDoc'].last_name;
                        else
                          this.referred_name = refData['companyDoc']._id ;

                        this.detail_link = '/admin-company-detail';
                        this.referred_link = refData['companyDoc']._creator._id;
                      }
                      else
                      {
                        this.referred_name = refData['refDoc'].email;
                      }

                    },
                    error => {
                      if(error['status'] === 404 && error['error']['message'] && error['error']['requestID'] && error['error']['success'] === false)
                      {
                        this.error = error['error']['message'];
                      }
                      else if(error['status'] === 400 && error['error']['message'] && error['error']['requestID'] && error['error']['success'] === false)
                      {
                        this.error = error['error']['message'];
                      }
                      else
                      {
                        this.error = error['error']['message'];
                      }

                    }
                  );
              }

            },

            error =>
            {
              if(error['status'] === 404 && error['error']['message'] && error['error']['requestID'] && error['error']['success'] === false) {
                this.router.navigate(['/not_found']);
              }

            });
      }
      else
      {
        this.router.navigate(['/not_found']);

      }
    }
    else
    {
      this.router.navigate(['/not_found']);

    }
  }

  ngAfterViewInit(){
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    }, 200);
  }

  changeStatus(event){
    if(event === 'Rejected' || event === 'rejected'){
      $("#sel1-reason-deferred").css('display', 'none');
      $("#sel1-reason-rejected").css('display', 'block');
    }
    if(event === 'Deferred' || event === 'deferred'){
      $("#sel1-reason-rejected").css('display', 'none');
      $("#sel1-reason-deferred").css('display', 'block');
    }
  }

  is_approve;is_approved;
  error;
  success;
  approveClick(event , approveForm: NgForm) {
    this.error = '';
    this.success = '';
    let reason = '';
    if (approveForm.value.set_status === -1 || approveForm.value.set_status === 'wizard completed' || approveForm.value.set_status === 'created') {
      this.error = 'Please select a status';
    }
    else if (approveForm.value.status_reason_rejected === -1 || approveForm.value.status_reason_deferred === -1) {
      this.error = 'Please select a reason';
    }
    else{
      if (approveForm.value.set_status === "Rejected" || approveForm.value.set_status === "rejected") {
        if (approveForm.value.status_reason_rejected) {
          this.saveApproveData(approveForm.value.id, approveForm.value.set_status, approveForm.value.status_reason_rejected);
        }
        else {
          this.error = 'Please select a reason';
        }
      }
      else if (approveForm.value.set_status === "Deferred" || approveForm.value.set_status === "deferred") {
        if (approveForm.value.status_reason_deferred) {
          this.saveApproveData(approveForm.value.id, approveForm.value.set_status, approveForm.value.status_reason_deferred);
        }
        else {
          this.error = 'Please select a reason';
        }
      }
      else {
        this.saveApproveData(approveForm.value.id, approveForm.value.set_status, '');
      }
    }
  }

  saveApproveData(id:any, set_status:string, reason:string) {
    this.authenticationService.approve_candidate(id, set_status, reason)
      .subscribe(
        data => {
          if (data['success'] === true) {
            this.candidate_status.status = set_status;
            this.candidate_status.reason = reason;
            this.success = 'Candidate status changed successfully';
          }
        },
        error => {
          if (error['status'] === 400 && error['error']['message'] && error['error']['requestID'] && error['error']['success'] === false) {
            this.error = error['error']['message'];
          }
          if (error['status'] === 404 && error['error']['message'] && error['error']['requestID'] && error['error']['success'] === false) {
            this.error = error['error']['message'];
          }
          else {
            this.error = "Something getting wrong";
          }
        });
  }

  filter_array(arr) {
    var hashTable = {};
    return arr.filter(function (el) {
      var key = JSON.stringify(el);
      var match = Boolean(hashTable[key]);
      return (match ? false : hashTable[key] = true);
    });
  }
}
