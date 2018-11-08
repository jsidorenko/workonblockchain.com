import { Component, OnInit ,ElementRef, Input,AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var synapseThrow: any;
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../user.service';
import {User} from '../../Model/user';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormControl, FormArray, FormGroup,Validators } from '@angular/forms';
import { DataService } from "../../data.service";
import {environment} from '../../../environments/environment';
const URL = environment.backend_url;
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-candidate-profile',
  templateUrl: './edit-candidate-profile.component.html',
  styleUrls: ['./edit-candidate-profile.component.css']
})
export class EditCandidateProfileComponent implements OnInit,AfterViewInit {

  currentUser: User;
  info: any = {}; log;
  selectedValue = [];
  selectedcountry = [];
  expYear=[];
  jobselected=[];
  salary;
  expected_salaryyy;
  availability_day;
  base_currency;
  experimented_platform = [];
  commercially_worked = [];
  platform=[];
  expYear_db=[];
  referringData;
  value;
  why_work;
  commercial_expYear=[];
  db_valye=[];
  db_lang;
  platforms_designed=[];
  platforms=[];
  plat_db_valye=[];
  platformreferringData;
  designed_expYear_db=[];
  EducationForm: FormGroup;
  ExperienceForm: FormGroup;
  language=[];
  currentdate;
  currentyear;
  expYearRole=[];
  start_month;
  start_year;
  companyname;
  positionname;
  locationname;
  description;
  startdate;
  startyear;
  enddate;
  endyear;
  currentwork;
  uniname;
  degreename;
  fieldname;
  edudate;
  eduyear;
  eduData;
  jobData;
  Intro;
  current_currency;
  LangexpYear=[];
  lang_expYear_db=[];
  lang_db_valye=[];
  img_src;
  lang_log;
  exp_lang_log;
  intro_log;
  uni_name_log;
  degree_log;
  field_log;
  eduYear_log;
  company_log;
  position_log;
  location_log;
  start_date_log;
  end_date_log;
  exp_count=0;
  edu_count=0;
  why_work_log;
  country_log;
  roles_log;
  currency_log;
  salary_log;
  interest_log;
  avail_log;
  current_sal_logg;
  current_currency_logg;
  first_name_log;
  last_name_log;
  contact_name_log;
  nationality_log;
  nationality = ['Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dominican', 'Dutch', 'Dutchman', 'Dutchwoman', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'Netherlander', 'New Zealander', 'Ni-Vanuatu', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian or Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'];

  current_work_check=[];
  current_work=
    [
      {name:'I currently work there', value:'current', checked:false}
    ]
  countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar, {Burma}', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

  constructor(private dataservice: DataService,private datePipe: DatePipe,private _fb: FormBuilder,private http: HttpClient,private route: ActivatedRoute,private router: Router,private authenticationService: UserService, private el: ElementRef)
  {
  }

  private education_data(): FormGroup[]
  {
    return this.eduData
      .map(i => this._fb.group({ uniname: i.uniname , degreename : i.degreename,fieldname:i.fieldname,eduyear:i.eduyear} ));
  }

  private history_data(): FormGroup[]
  {
    return this.jobData
      .map(i => this._fb.group({ companyname: i.companyname , positionname : i.positionname, locationname:i.locationname, description:i.description,startdate:i.startdate, start_date:this.monthNumToName(this.datePipe.transform(i.startdate, 'MM') )/*this.datePipe.transform(i.startdate, 'MM') */, startyear: this.datePipe.transform(i.startdate, 'yyyy') , enddate :i.enddate , end_date:this.monthNumToName(this.datePipe.transform(i.enddate, 'MM')) , endyear:this.datePipe.transform(i.enddate, 'yyyy') , currentwork: i.currentwork} ));
  }

  monthNumToName(monthnum) {
    return this.calen_month[monthnum-1] || '';
  }


  otherSkills =
    [
      {name:'P2P protocols', value:'P2P protocols', checked:false},
      {name:'Distributed computing and networks', value:'Distributed computing and networks', checked:false},
      {name:'Security', value:'Security', checked:false},
      {name:'Formal verification', value:'Formal verification', checked:false},
      {name:'Cryptography', value:'Cryptography', checked:false},
      {name:'Game theory', value:'Game theory', checked:false},
      {name:'Economics', value:'Economics', checked:false},
      {name:'Smart contract audits', value:'Smart contract audits', checked:false},
      {name:'Zero Knowlege Proofs', value:'Zero Knowlege Proofs', checked:false},
    ]
  otherFormalSkills =
    [
      {name:'P2P protocols', value:'P2P protocols', checked:false},
      {name:'Distributed computing and networks', value:'Distributed computing and networks', checked:false},
      {name:'Security', value:'Security', checked:false},
      {name:'Formal verification', value:'Formal verification', checked:false},
      {name:'Cryptography', value:'Cryptography', checked:false},
      {name:'Game theory', value:'Game theory', checked:false},
      {name:'Economics', value:'Economics', checked:false},
      {name:'Smart contract audits', value:'Smart contract audits', checked:false},
      {name:'Zero Knowlege Proofs', value:'Zero Knowlege Proofs', checked:false},
    ]


  skillDbArray=[];
  skillDb;
  skill_expYear_db=[];
  formalDbArray=[];
  formalSkillDb;
  formal_expYear_db=[];
  ngOnInit()
  {
    this.info.base_country = -1
    this.info.nationality = -1;
    this.current_currency = -1;
    this.base_currency = -1;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.EducationForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });

    this.ExperienceForm = this._fb.group({
      ExpItems: this._fb.array([this.initExpRows()])
    });
    if(this.currentUser && this.currentUser.type=='candidate')
    {

      this.options.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })

      this.dropdown_options.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })

      this.area_interested.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })

      this.commercially.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      this.designed.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      this.experimented.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })

      this.language_opt.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      this.authenticationService.getById(this.currentUser._id)
        .subscribe(data =>
          {
            if(data)
              this.info.email = data._creator.email;
            if(data.contact_number  || data.nationality || data.first_name || data.last_name || data._creator.candidate)
            {

              this.info.contact_number = data.contact_number;
              this.info.github_account = data.github_account;
              this.info.exchange_account = data.stackexchange_account;
              this.info.nationality = data.nationality;
              this.info.first_name =data.first_name;
              this.info.last_name =data.last_name;

              if(data.image != null )
              {
                this.info.image_src =  data.image ;
                let x = this.info.image_src.split("/");

                let last:any = x[x.length-1];

                this.img_src = last;
              }

              if(data._creator.candidate && data._creator.candidate.base_country)
              {
                this.info.base_country = data._creator.candidate.base_country;
              }
              if(data._creator.candidate && data._creator.candidate.base_city){
                this.info.city = data._creator.candidate.base_city;
              }


            }

            if(data._creator.candidate && data._creator.candidate.blockchain && data._creator.candidate.blockchain.commercial_skills && data._creator.candidate.blockchain.commercial_skills.length>0)
            {
              this.commercialSkillsExperienceYear = data._creator.candidate.blockchain.commercial_skills;
              for (let key of data._creator.candidate.blockchain.commercial_skills)
              {
                for(var i in key)
                {

                  for(let option of this.otherSkills)
                  {

                    if(option.value === key[i])
                    {
                      option.checked=true;
                      this.skillDbArray.push(key[i]);
                      this.skillDb= ({value: key[i]});
                      this.commercialSkills.push(this.skillDb);

                    }
                    else
                    {

                    }

                  }

                  for(let option of this.exp_year)
                  {

                    if(option.value === key[i])
                    {
                      option.checked=true;
                      this.skill_expYear_db.push(key[i]);

                    }

                  }

                }
              }
            }


            if(data._creator.candidate && data._creator.candidate.blockchain && data._creator.candidate.blockchain.formal_skills && data._creator.candidate.blockchain.formal_skills.length>0)
            {
              this.formal_skills = data._creator.candidate.blockchain.formal_skills;
              for (let key of data._creator.candidate.blockchain.formal_skills)
              {
                for(var i in key)
                {

                  for(let option of this.otherFormalSkills)
                  {

                    if(option.value === key[i])
                    {
                      option.checked=true;
                      this.formalDbArray.push(key[i]);
                      this.formalSkillDb= ({value: key[i]});
                      this.formal_skills_exp.push(this.formalSkillDb);

                    }
                    else
                    {

                    }

                  }

                  for(let option of this.exp_year)
                  {

                    if(option.value === key[i])
                    {
                      option.checked=true;
                      this.formal_expYear_db.push(key[i]);

                    }

                  }

                }
              }
            }

            if(data.locations && data.roles && data.interest_area &&  data.expected_salary && data.availability_day && data.expected_salary_currency)
            {

              for (let country1 of data.locations)
              {

                for(let option of this.options)
                {

                  if(option.value == country1)
                  {
                    option.checked=true;
                    this.selectedcountry.push(country1);

                  }

                }

              }

              for(let interest of data.interest_area)
              {

                for(let option of this.area_interested)
                {

                  if(option.value == interest)
                  {
                    option.checked=true;
                    this.selectedValue.push(interest);

                  }

                }

              }

              for (let area of data.roles)
              {

                for(let option of this.dropdown_options)
                {
                  if(option.value == area)
                  {
                    option.checked=true;
                    this.jobselected.push(area);

                  }

                }

              }

              this.expected_salaryyy = data.expected_salary;

              this.availability_day = data.availability_day;
              if(data.expected_salary_currency)
                this.base_currency = data.expected_salary_currency;
            }

            if(data.commercial_platform || data.experimented_platform || data.why_work || data.platforms)
            {
              this.why_work=data.why_work;

              if(data.commercial_platform)
              {
                this.commercial_expYear =data.commercial_platform;
                for (let key of data.commercial_platform)
                {
                  for(var i in key)
                  {


                    for(let option of this.commercially)
                    {

                      if(option.value == key[i])
                      {
                        option.checked=true;
                        this.db_valye.push(key[i]);
                        this.db_lang= ({value: key[i]});
                        this.commercially_worked.push(this.db_lang);

                      }
                      else
                      {

                      }

                    }

                    for(let option of this.exp_year)
                    {

                      if(option.value == key[i])
                      {
                        option.checked=true;
                        this.expYear_db.push(key[i]);

                      }

                    }

                  }
                }

              }


              if(data.platforms)
              {
                this.platforms = data.platforms;
                for (let key of data.platforms)
                {
                  for(var i in key)
                  {


                    for(let option of this.designed)
                    {

                      if(option.value == key[i])
                      {
                        option.checked=true;
                        this.plat_db_valye.push(key[i]);
                        this.db_lang= ({value: key[i]});
                        this.platforms_designed.push(this.db_lang);

                      }
                      else
                      {

                      }

                    }

                    for(let option of this.exp_year)
                    {

                      if(option.value == key[i])
                      {
                        option.checked=true;


                        this.designed_expYear_db.push(key[i]);


                      }

                    }

                  }
                }
              }


              if(data.experimented_platform)
              {
                this.experimented_platform = [];
                for (let plat of data.experimented_platform)
                {

                  for(let option of this.experimented)
                  {

                    if(option.value == plat.value)
                    {
                      option.checked=true;
                      this.experimented_platform.push(option);

                    }

                  }

                }
              }
            }

            if(data.work_history && data.education_history|| data.programming_languages&&data.current_salary && data.current_currency)
            {



              this.jobData = data.work_history;

              for(let data1 of data.work_history)
              {
                this.current_work_check.push(data1.currentwork);

              }

              this.ExperienceForm = this._fb.group({
                ExpItems: this._fb.array(
                  this.history_data()
                )
              });

              this.eduData = data.education_history;
              this.EducationForm = this._fb.group({
                itemRows: this._fb.array(
                  this.education_data()
                )
              });
              if(data.programming_languages)
              {
                this.LangexpYear = data.programming_languages;
                for (let key of data.programming_languages)
                {
                  for(var i in key)
                  {


                    for(let option of this.language_opt)
                    {

                      if(option.value == key[i])
                      {
                        option.checked=true;
                        this.lang_db_valye.push(key[i]);
                        this.db_lang= ({value: key[i]});
                        this.language.push(this.db_lang);
                      }
                      else
                      {

                      }

                    }

                    for(let option of this.exp_year)
                    {

                      if(option.value == key[i])
                      {
                        option.checked=true;
                        this.lang_expYear_db.push(key[i]);

                      }

                    }

                  }
                }
              }

              this.salary = data.current_salary;
              this.Intro =data.description;
              if(data.current_currency)
                this.current_currency =data.current_currency;

            }
          },
          error =>
          {
            if(error.message === 500 || error.message === 401)
            {
              localStorage.setItem('jwt_not_found', 'Jwt token not found');
              localStorage.removeItem('currentUser');
              localStorage.removeItem('googleUser');
              localStorage.removeItem('close_notify');
              localStorage.removeItem('linkedinUser');
              localStorage.removeItem('admin_log');
              window.location.href = '/login';
            }

            if(error.message === 403)
            {
              this.router.navigate(['/not_found']);
            }
          });
    }
  }

  ngAfterViewInit(): void
  {
    window.scrollTo(0, 0);
  }


  currency=
    [
      "£ GBP" ,"€ EUR" , "$ USD"
    ]

  experience=
    [
      {name:'0-1', value:'0-1', checked:false},
      {name:'1-2', value:'1-2', checked:false},
      {name:'2-4', value:'2-4', checked:false},
      {name:'4-6', value:'4-6', checked:false},
      {name:'6+', value:'6+', checked:false}
    ]

  options =
    [
      {country_code:'000' , name:'Remote', value:'remote', checked:false},
      {country_code:'001' ,name:'Paris', value:'Paris', checked:false},
      {country_code:'001' ,name:'London', value:'London', checked:false},
      {country_code: '001' ,name:'Dublin', value:'Dublin', checked:false},
      {country_code: '001' ,name:'Amsterdam', value:'Amsterdam', checked:false},
      {country_code: '001' ,name:'Berlin', value:'Berlin', checked:false},
      {country_code: '001' ,name:'Barcelona', value:'Barcelona', checked:false},
      {country_code: '002' ,name:'Munich', value:'Munich', checked:false},
      {country_code: '002' ,name:'San Francisco', value:'San Francisco', checked:false},
      {country_code: '002' ,name:'New York', value:'New York', checked:false},
      {country_code: '002' ,name:'Los Angeles', value:'Los Angeles', checked:false},
      {country_code: '002' ,name:'Boston', value:'Boston', checked:false},
      {country_code: '003' ,name:'Chicago', value:'Chicago', checked:false},
      {country_code: '004' ,name:'Austin', value:'Austin', checked:false},
      {country_code: '004' ,name:'Zug', value:'Zug', checked:false},
      {country_code: '004' ,name:'Zurich', value:'Zurich', checked:false},
      {country_code: '004' ,name:'Edinburgh', value:'Edinburgh', checked:false},
      {country_code: '004' ,name:'Copenhagen', value:'Copenhagen', checked:false},
      {country_code: '004' ,name:'Stockholm', value:'Stockholm', checked:false},
      {country_code: '004' ,name:'Madrid', value:'Madrid', checked:false},
      {country_code: '004' ,name:'Toronto', value:'Toronto', checked:false},
      {country_code: '004' ,name:'Sydney', value:'Sydney', checked:false},

    ]

  dropdown_options =
    [
      {name:'Backend Developer', value:'Backend Developer', checked:false},
      {name:'Frontend Developer', value:'Frontend Developer', checked:false},
      {name:'UI Developer', value:'UI Developer', checked:false},
      {name:'UX Designer', value:'UX Designer', checked:false},
      {name:'Fullstack Developer', value:'Fullstack Developer', checked:false},
      {name:'Blockchain Developer', value:'Blockchain Developer', checked:false},
      {name:'Smart Contract Developer', value:'Smart Contract Developer', checked:false},
      {name:'Architect', value:'Architect', checked:false},
      {name:'DevOps', value:'DevOps', checked:false},
      {name:'Software Tester', value:'Software Tester', checked:false},
      {name:'CTO', value:'CTO', checked:false},
      {name:'Technical Lead', value:'Technical Lead', checked:false},
      {name:'Product Manager', value:'Product Manager', checked:false},
      {name:'Intern Developer', value:'Intern Developer', checked:false},
      {name:'Researcher ', value:'Researcher ', checked:false},
      {name:'Mobile app developer', value:'Mobile app developer', checked:false},
      {name:'Data scientist', value:'Data scientist', checked:false},
      {name:'Security specialist ', value:'Security specialist', checked:false},
    ]

  area_interested=
    [
      {name:'Enterprise blockchain', value:'Enterprise blockchain', checked:false},
      {name:'Public blockchain', value:'Public blockchain', checked:false},
      {name:'Blockchain infrastructure', value:'Blockchain infrastructure', checked:false},
      {name:'Smart contract development', value:'Smart contract development', checked:false},
      {name:'Decentralized applications (dapps)', value:'Decentralized applications (dapps)', checked:false},
      {name:"I don't know", value:"I don't know", checked:false},
    ]



  year=
    [
      "2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994"
    ]

  month= ["Now","1 month","2 months","3 months","Longer than 3 months"]


  commercially=
    [
      {name:'Bitcoin', value:'Bitcoin', checked:false},
      {name:'Ethereum', value:'Ethereum', checked:false},
      {name:'Ripple', value:'Ripple', checked:false},
      {name:'Stellar', value:'Stellar', checked:false},
      {name:'Hyperledger Fabric', value:'Hyperledger Fabric', checked:false},
      {name:'Hyperledger Sawtooth', value:'Hyperledger Sawtooth', checked:false},
      {name:'Quorum', value:'Quorum', checked:false},
      {name:'Corda', value:'Corda', checked:false},
      {name:'EOS', value:'EOS', checked:false},
      {name:'NEO', value:'NEO', checked:false},
      {name:'Waves', value:'Waves', checked:false},
      {name:'Steemit', value:'Steemit', checked:false},
      {name:'Lisk', value:'Lisk', checked:false},
      {name:'Quantum', value:'Quantum', checked:false},
      {name:'Tezos', value:'Tezos', checked:false},
      {name:'Cardano', value:'Cardano', checked:false},
      {name:'Litecoin', value:'Litecoin', checked:false},
      {name:'Monero', value:'Monero', checked:false},
      {name:'ZCash', value:'ZCash', checked:false},
      {name:'IOTA', value:'IOTA', checked:false},
      {name:'NEM', value:'NEM', checked:false},
      {name:'NXT', value:'NXT', checked:false},

    ]

  designed=
    [
      {name:'Bitcoin', value:'Bitcoin', checked:false},
      {name:'Ethereum', value:'Ethereum', checked:false},
      {name:'Hyperledger Fabric', value:'Hyperledger Fabric', checked:false},
      {name:'Hyperledger Sawtooth', value:'Hyperledger Sawtooth', checked:false},
      {name:'Quorum', value:'Quorum', checked:false},
      {name:'Corda', value:'Corda', checked:false},
      {name:'Waves', value:'Waves', checked:false},
      {name:'NEO', value:'NEO', checked:false},
      {name:'EOS', value:'EOS', checked:false},
      {name:'Lisk', value:'Lisk', checked:false},
      {name:'Quantum', value:'Quantum', checked:false},
      {name:'Cardano', value:'Cardano', checked:false},
      {name:'NEM', value:'NEM', checked:false},
      {name:'NXT', value:'NXT', checked:false},
    ]

  experimented=
    [
      {name:'Bitcoin', value:'Bitcoin', checked:false},
      {name:'Ethereum', value:'Ethereum', checked:false},
      {name:'Ripple', value:'Ripple', checked:false},
      {name:'Hyperledger Fabric', value:'Hyperledger Fabric', checked:false},
      {name:'Corda', value:'Corda', checked:false},
      {name:'EOS', value:'EOS', checked:false},
      {name:'Waves', value:'Waves', checked:false},
      {name:'Steemit', value:'Steemit', checked:false},
      {name:'Lisk', value:'Lisk', checked:false},
      {name:'Quantum', value:'Quantum', checked:false},
      {name:'Tezos', value:'Tezos', checked:false},
      {name:'Cardano', value:'Cardano', checked:false},
      {name:'Litecoin', value:'Litecoin', checked:false},
      {name:'Monero', value:'Monero', checked:false},
      {name:'ZCash', value:'ZCash', checked:false},
      {name:'IOTA', value:'IOTA', checked:false},
      {name:'NEM', value:'NEM', checked:false},
      {name:'NXT', value:'NXT', checked:false},
      {name:'Dash', value:'Dash', checked:false},
      {name:'Doge', value:'Doge', checked:false},
    ]

  exp_year=
    [
      {name:'0-1', value:'0-1', checked:false},
      {name:'1-2', value:'1-2', checked:false},
      {name:'2-4', value:'2-4', checked:false},
      {name:'4-6', value:'4-6', checked:false},
      {name:'6+', value:'6+', checked:false}
    ]

  onExpOptions(obj)
  {

    let updateItem = this.experimented_platform.find(this.findIndexToUpdate, obj.value);
    let index = this.experimented_platform.indexOf(updateItem);
    if(index > -1)
    {
      this.experimented_platform.splice(index, 1);

    }
    else
    {
      obj.checked =true;
      this.experimented_platform.push(obj);
    }


  }


  oncommerciallyOptions(obj)
  {

    let updateItem = this.commercially_worked.find(this.findIndexToUpdate_funct, obj.value);
    let index = this.commercially_worked.indexOf(updateItem);
    if(index > -1)
    {
      this.commercially_worked.splice(index, 1);
      let updateItem2 = this.findObjectByKey(this.commercial_expYear, 'platform_name', obj.value);
      let index2 = this.commercial_expYear.indexOf(updateItem2);

      if(index2 > -1)
      {

        this.commercial_expYear.splice(index2, 1);
      }
    }
    else
    {
      obj.checked =true;
      this.commercially_worked.push(obj);
    }


  }

  onPlatformOptions(obj)
  {

    let updateItem = this.platforms_designed.find(this.findIndexToUpdate_funct, obj.value);
    let index = this.platforms_designed.indexOf(updateItem);
    if(index > -1)
    {
      this.platforms_designed.splice(index, 1);
      let updateItem2 = this.findObjectByKey(this.platforms, 'platform_name', obj.value);
      let index2 = this.platforms.indexOf(updateItem2);

      if(index2 > -1)
      {

        this.platforms.splice(index2, 1);
      }
    }
    else
    {
      obj.checked =true;
      this.platforms_designed.push(obj);
    }


  }



  onComExpYearOptions(e, value)
  {


    let updateItem = this.findObjectByKey(this.commercial_expYear, 'platform_name', value);

    let index = this.commercial_expYear.indexOf(updateItem);

    if(index > -1)
    {

      this.commercial_expYear.splice(index, 1);
      this.value=value;
      this.referringData = { platform_name :this.value, exp_year: e.target.value};
      this.commercial_expYear.push(this.referringData);

    }
    else
    {
      this.value=value;
      this.referringData = { platform_name :this.value, exp_year: e.target.value};
      this.commercial_expYear.push(this.referringData);

    }


  }


  onPlatformYearOptions(e, value)
  {

    let updateItem = this.findObjectByKey(this.platforms, 'platform_name', value);
    let index = this.platforms.indexOf(updateItem);

    if(index > -1)
    {

      this.platforms.splice(index, 1);
      this.value=value;
      this.platformreferringData = { platform_name:this.value, exp_year: e.target.value};
      this.platforms.push(this.platformreferringData);

    }
    else
    {
      this.value=value;
      this.platformreferringData = { platform_name:this.value, exp_year: e.target.value};
      this.platforms.push(this.platformreferringData);
    }


  }

  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }

    }
    return null;
  }

  calen_month= ["January","Februray","March","April","May","June","July","August","September","October","November","December"]


  language_opt=
    [
      {name:'Java', value:'Java', checked:false},{name:'C', value:'C', checked:false},
      {name:'C++', value:'C++', checked:false},{name:'C#', value:'C#', checked:false},
      {name:'Python', value:'Python', checked:false},{name:'Visual Basic .NET', value:'Visual Basic .NET', checked:false},
      {name:'PHP', value:'PHP', checked:false},{name:'JavaScript', value:'JavaScript', checked:false},
      {name:'Delphi/Object Pascal', value:'Delphi/Object Pascal', checked:false},{name:'Swift', value:'Swift', checked:false},
      {name:'Perl', value:'Perl', checked:false},{name:'Ruby', value:'Ruby', checked:false},
      {name:'Assembly language', value:'Assembly language', checked:false},{name:'R', value:'R', checked:false},
      {name:'Visual Basic', value:'Visual Basic', checked:false},{name:'Objective-C', value:'Objective-C', checked:false},
      {name:'Go', value:'Go', checked:false},{name:'MATLAB', value:'MATLAB', checked:false},
      {name:'PL/SQL', value:'PL/SQL', checked:false},{name:'Scratch', value:'Scratch', checked:false},
      {name:'Solidity', value:'Solidity', checked:false},{name:'Serpent', value:'Serpent', checked:false},
      {name:'LLL', value:'LLL', checked:false},{name:'Nodejs', value:'Nodejs', checked:false},
      {name:'Scala', value:'Scala', checked:false},{name:'Rust', value:'Rust', checked:false},
      {name:'Kotlin', value:'Kotlin', checked:false},{name:'Haskell', value:'Haskell', checked:false},

    ]


  roles_opt =
    [
      {name:'Backend Developer', value:'Backend Developer', checked:false},
      {name:'BI Engineer', value:'BI Engineer', checked:false},
      {name:'Big Data Engineer', value:'Big Data Engineer', checked:false},
      {name:'CTO', value:'CTO', checked:false},
      {name:'Lead Developer', value:'Lead Developer', checked:false},
      {name:'Database Administrator', value:'Database Administrator', checked:false},
      {name:'Security Engineer', value:'Security Engineer', checked:false},
      {name:'Frontend Developer', value:'Frontend Developer', checked:false},
    ]

  onLangExpOptions(obj)
  {
    let updateItem = this.language.find(this.findIndexToUpdate_funct, obj.value);
    let index = this.language.indexOf(updateItem);
    if(index > -1)
    {
      this.language.splice(index, 1);
      let updateItem2 = this.findObjectByKey(this.LangexpYear, 'language', obj.value);
      let index2 = this.LangexpYear.indexOf(updateItem2);

      if(index2 > -1)
      {

        this.LangexpYear.splice(index2, 1);
      }
    }
    else
    {
      obj.checked =true;
      this.language.push(obj);
    }

    //console.log(this.language);

  }


  findIndexToUpdate_funct(obj)
  {
    return obj.value === this;
  }

  findIndexToUpdate(type) {
    ////console.log("funct");
    return type == this;
  }

  onJobSelected(e)
  {
    //this.yearselected= event.target.value;
    if(e.target.checked)
    {
      this.jobselected.push(e.target.value);
      ////console.log("if");
    }
    else{

      let updateItem = this.jobselected.find(this.findIndexToUpdate, e.target.value);

      let index = this.jobselected.indexOf(updateItem);

      this.jobselected.splice(index, 1);
    }
    //this.position = event.target.value;
  }

  initItemRows()
  {
    return this._fb.group({
      uniname: [''],
      degreename:[''],
      fieldname:[''],
      eduyear:[]
    });

  }
  initItemRows_db()
  {
    return this._fb.group({
      uniname: [this.uniname],
      degreename:[this.degreename],
      fieldname:[this.fieldname],
      edudate:[this.edudate],
      eduyear:[this.eduyear]
    });


  }

  initExpRows_db()
  {
    return this._fb.group({
      companyname: [this.companyname],
      positionname:[this.positionname],
      locationname: [this.locationname],
      description: [this.description] ,
      startdate:[this.startdate],
      startyear:[this.startyear],
      enddate:[this.enddate],
      endyear:[this.endyear],
      currentwork:[this.currentwork],
      currentenddate:[this.currentdate],
      currentendyear:[this.currentyear]
    });
  }


  initExpRows()
  {
    ////console.log(this.currentdate);
    return this._fb.group({
      companyname:[''],
      positionname:[''],
      locationname: [''],
      description: [''] ,
      startdate:[],
      startyear:[],
      end_date:[],
      endyear:[],
      start_date:[],
      enddate:[],
      currentwork:[false],

    });
  }


  addNewExpRow()
  {
    // control refers to your formarray
    const control = <FormArray>this.ExperienceForm.controls['ExpItems'];
    // add new formgroup
    control.push(this.initExpRows());
  }

  deleteExpRow(index: number)
  {
    // control refers to your formarray
    const control = <FormArray>this.ExperienceForm.controls['ExpItems'];
    // remove the chosen row
    control.removeAt(index);
  }

  get DynamicWorkFormControls()
  {

    return <FormArray>this.ExperienceForm.get('ExpItems');
  }
  addNewRow()
  {
    // control refers to your formarray
    //this.EducationForm.value.itemRows = "";
    const control = <FormArray>this.EducationForm.controls['itemRows'];
    // add new formgroup
    control.push(this.initItemRows());
  }

  deleteRow(index: number)
  {

    // control refers to your formarray
    const control = <FormArray>this.EducationForm.controls['itemRows'];
    // remove the chosen row
    control.removeAt(index);
  }

  get DynamicEduFormControls() {

    return <FormArray>this.EducationForm.get('itemRows');
  }

  onLangExpYearOptions(e, value)
  {



    let updateItem = this.findObjectByKey(this.LangexpYear, 'language', value);
    ////console.log(updateItem);
    let index = this.LangexpYear.indexOf(updateItem);

    if(index > -1)
    {

      this.LangexpYear.splice(index, 1);
      this.value=value;
      this.referringData = { language:this.value, exp_year: e.target.value};
      this.LangexpYear.push(this.referringData);
      ////console.log(this.LangexpYear);

    }
    else
    {
      ////console.log("not exists");
      this.value=value;
      this.referringData = { language:this.value, exp_year: e.target.value};
      this.LangexpYear.push(this.referringData);
      ////console.log(this.LangexpYear);

    }


  }
  onRoleYearOptions(e, value)
  {
    this.value=value;
    this.referringData = { platform_name:this.value, exp_year: e.target.value};
    this.expYearRole.push(this.referringData);
    ////console.log(this.expYearRole);
  }

  work_start_data(e)
  {
    this.start_month = e.target.value ;
  }
  work_start_year(e)
  {
    this.start_year= e.target.value;
  }

  onAreaSelected(e)
  {
    //this.jobselected= e.target.value;

    if(e.target.checked)
    {
      this.selectedValue.push(e.target.value);
      ////console.log("if");
    }
    else{
      ////console.log("else");
      let updateItem = this.selectedValue.find(this.findIndexToUpdate, e.target.value);

      let index = this.selectedValue.indexOf(updateItem);

      this.selectedValue.splice(index, 1);
    }

  }

  updateCheckedOptions(e)
  {
    //this.interest = e.target.value;

    if(e.target.checked)
    {
      this.selectedcountry.push(e.target.value);
      ////console.log("if");
    }
    else{
      ////console.log("else");
      let updateItem = this.selectedcountry.find(this.findIndexToUpdate, e.target.value);

      let index = this.selectedcountry.indexOf(updateItem);

      this.selectedcountry.splice(index, 1);
    }

  }
  ////////////////////////save edit profile data//////////////////////////////////
  start_monthh;
  experiencearray=[];
  experiencejson;
  monthNameToNum(monthname) {
    this.start_monthh = this.calen_month.indexOf(monthname);
    this.start_monthh = "0"  + (this.start_monthh);
    return this.start_monthh ?  this.start_monthh : 0;
  }
  startmonthIndex;
  endmonthIndex;
  start_date_format;
  end_date_format;
  educationjson;
  education_json_array=[];
  commercial_log;
  platform_log;
  base_country_log;
  city_log;
  commercial_skill_log;
  formal_skills_log;
  candidate_profile(profileForm: NgForm)
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.info.first_name)
    {
      this.first_name_log="Please enter first name";

    }
    if(!this.info.last_name)
    {
      this.last_name_log="Please enter last name";

    }
    if(!this.info.contact_number)
    {
      this.contact_name_log ="Please enter contact number";
    }

    if(this.info.nationality === -1)
    {
      this.nationality_log ="Please choose nationality";
    }

    if(this.info.base_country === -1)
    {
      this.base_country_log ="Please choose base country";
    }

    if(!this.info.city)
    {
      this.city_log ="Please enter base city";
    }

    if(this.selectedcountry.length <=0)
    {
      this.country_log = "Please select at least one location";
    }

    if(this.jobselected.length<=0)
    {
      this.roles_log = "Please select at least one role";
    }


    if(this.base_currency === -1)
    {
      this.currency_log = "Please choose currency";
    }

    if(!this.expected_salaryyy)
    {
      this.salary_log = "Please enter expected yearly salary";
    }

    if(this.selectedValue.length <= 0)
    {
      this.interest_log = "Please select at least one area of interest";
    }

    if(!this.availability_day)
    {
      this.avail_log = "Please select employment availability";
    }
    if(!this.salary)
    {
      this.current_sal_logg = "Please enter current base salary";

    }

    if(this.current_currency === -1)
    {
      this.current_currency_logg = "Please choose currency";
    }
    if(!this.why_work)
    {
      this.why_work_log = "Please fill why do you want to work on blockchain?";
    }

    if(this.commercially_worked.length !== this.commercial_expYear.length )
    {
      this.commercial_log = "Please fill year of experience";
    }
    if(this.platforms_designed.length !== this.platforms.length)
    {
      this.platform_log = "Please fill year of experience";
    }


    if(this.LangexpYear.length !==  this.language.length)
    {

      this.exp_lang_log="Please fill year of experience";
    }
    if(!this.Intro)
    {

      this.intro_log="Please fill 2-5 sentence bio"
    }

    if(this.commercialSkills.length !== this.commercialSkillsExperienceYear.length)
    {
      this.commercial_skill_log = "Please fill year of experience";
    }

    if(this.formal_skills_exp.length !== this.formal_skills.length)
    {
      this.formal_skills_log = "Please fill year of experience";
    }


    if(this.EducationForm.value.itemRows.length >= 1)
    {

      for (var key in this.EducationForm.value.itemRows)
      {
        if(!this.EducationForm.value.itemRows[key].uniname)
        {
          this.uni_name_log = "Please fill university";
        }

        if(!this.EducationForm.value.itemRows[key].degreename)
        {
          this.degree_log = "Please fill degree";
        }

        if(!this.EducationForm.value.itemRows[key].fieldname)
        {
          this.field_log = "Please fill field of study";
        }

        if(!this.EducationForm.value.itemRows[key].eduyear)
        {
          this.eduYear_log = "Please fill graduation year";
        }
        if(this.EducationForm.value.itemRows[key].uniname && this.EducationForm.value.itemRows[key].degreename && this.EducationForm.value.itemRows[key].fieldname && this.EducationForm.value.itemRows[key].eduyear)
        {

          this.edu_count = parseInt(key) + 1;
        }

      }

    }
    if(this.ExperienceForm.value.ExpItems.length >=1)
    {
      this.exp_count =0;
      for (var key in this.ExperienceForm.value.ExpItems)
      {
        if(!this.ExperienceForm.value.ExpItems[key].companyname)
        {
          this.company_log = "Please fill company";
        }

        if(!this.ExperienceForm.value.ExpItems[key].positionname)
        {
          this.position_log = "Please fill position";
        }


        if(!this.ExperienceForm.value.ExpItems[key].locationname)
        {
          this.location_log = "Please fill location";

        }

        if(!this.ExperienceForm.value.ExpItems[key].start_date || !this.ExperienceForm.value.ExpItems[key].startyear)
        {
          this.start_date_log = "Please fill start date ";
        }

        if(!this.ExperienceForm.value.ExpItems[key].end_date || !this.ExperienceForm.value.ExpItems[key].endyear && this.ExperienceForm.value.ExpItems[key].companyname==false)
        {
          this.end_date_log = "Please fill end date ";
        }

        if(this.ExperienceForm.value.ExpItems[key].companyname && this.ExperienceForm.value.ExpItems[key].positionname &&
          this.ExperienceForm.value.ExpItems[key].locationname && this.ExperienceForm.value.ExpItems[key].start_date &&
          this.ExperienceForm.value.ExpItems[key].startyear && this.ExperienceForm.value.ExpItems[key].end_date &&
          this.ExperienceForm.value.ExpItems[key].endyear && this.ExperienceForm.value.ExpItems[key].currentwork==false)
        {
          this.exp_count = parseInt(key) + 1;

        }


        if(this.ExperienceForm.value.ExpItems[key].companyname && this.ExperienceForm.value.ExpItems[key].positionname &&
          this.ExperienceForm.value.ExpItems[key].locationname && this.ExperienceForm.value.ExpItems[key].start_date &&
          this.ExperienceForm.value.ExpItems[key].startyear &&  this.ExperienceForm.value.ExpItems[key].currentwork==true)
        {
          this.ExperienceForm.value.ExpItems[key].enddate = new Date();
          this.exp_count = parseInt(key) + 1;

        }

      }


    }


    if(this.info.first_name && this.info.last_name && this.info.contact_number && this.info.nationality!=-1 &&
      this.info.city && this.info.base_country != -1 && this.expected_salaryyy && this.current_currency !=-1 && this.selectedcountry.length>0 && this.jobselected.length>0 && this.base_currency!=-1 && this.salary && this.selectedValue.length > 0 && this.availability_day &&
      this.why_work && this.commercially_worked.length === this.commercial_expYear.length && this.platforms_designed.length === this.platforms.length
      && this.language &&this.LangexpYear.length ===  this.language.length && this.Intro && this.edu_count === this.EducationForm.value.itemRows.length && this.exp_count === this.ExperienceForm.value.ExpItems.length
      && this.formal_skills_exp.length === this.formal_skills.length && this.commercialSkills.length === this.commercialSkillsExperienceYear.length
    )
    {
      this.updateProfileData(profileForm.value);
    }

  }

  file_size=1048576;
  image_log;

  updateProfileData(profileForm)
  {
    this.experiencearray=[];
    this.education_json_array=[];
    for (var key in this.ExperienceForm.value.ExpItems)
    {
      this.startmonthIndex = this.monthNameToNum(this.ExperienceForm.value.ExpItems[key].start_date);
      this.endmonthIndex = this.monthNameToNum(this.ExperienceForm.value.ExpItems[key].end_date);
      this.start_date_format  = new Date(this.ExperienceForm.value.ExpItems[key].startyear, this.startmonthIndex);
      this.end_date_format = new Date(this.ExperienceForm.value.ExpItems[key].endyear, this.endmonthIndex);
      if(this.ExperienceForm.value.ExpItems[key].currentwork == true )
      {
        this.end_date_format = new Date();
      }
      this.experiencejson = {companyname : this.ExperienceForm.value.ExpItems[key].companyname , positionname : this.ExperienceForm.value.ExpItems[key].positionname,locationname : this.ExperienceForm.value.ExpItems[key].locationname,description : this.ExperienceForm.value.ExpItems[key].description,startdate : this.start_date_format,enddate : this.end_date_format , currentwork : this.ExperienceForm.value.ExpItems[key].currentwork};
      this.experiencearray.push(this.experiencejson);

    }

    for ( var key in this.EducationForm.value.itemRows)
    {
      this.EducationForm.value.itemRows[key].eduyear =  parseInt(this.EducationForm.value.itemRows[key].eduyear);
      this.educationjson = {uniname : this.EducationForm.value.itemRows[key].uniname , degreename :  this.EducationForm.value.itemRows[key].degreename
        ,fieldname : this.EducationForm.value.itemRows[key].fieldname , eduyear : this.EducationForm.value.itemRows[key].eduyear  };
      this.education_json_array.push(this.educationjson) ;
    }
    this.authenticationService.edit_candidate_profile(this.currentUser._creator,profileForm,this.education_json_array , this.experiencearray)
      .subscribe(
        data => {
          if(data.success && this.currentUser)
          {
            let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#aa');
            let fileCount: number = inputEl.files.length;
            let formData = new FormData();
            if (fileCount > 0 )
            {

              if(inputEl.files.item(0).size < this.file_size)
              {
                formData.append('photo', inputEl.files.item(0));

                this.http.post(URL+'users/image', formData ,  {
                  headers: new HttpHeaders().set('Authorization', this.currentUser.jwt_token)
                }).map((res) => res).subscribe(
                  (success) =>
                  {
                    this.router.navigate(['/candidate_profile']);
                  },
                  (error) => console.log(error))
              }
              else
              {
                this.image_log = "Image size should be less than 1MB";
              }
            }
            else
            //window.location.href = '/candidate_profile';

              this.router.navigate(['/candidate_profile']);
          }

          if(data.error)
          {
            this.dataservice.changeMessage(data.error);
          }

        },
        error => {
          this.dataservice.changeMessage(error);
          this.log = 'Something getting wrong';
          if(error.message === 500)
          {
            localStorage.setItem('jwt_not_found', 'Jwt token not found');
            localStorage.removeItem('currentUser');
            localStorage.removeItem('googleUser');
            localStorage.removeItem('close_notify');
            localStorage.removeItem('linkedinUser');
            localStorage.removeItem('admin_log');
            window.location.href = '/login';
          }

        });

  }

  commercialSkills=[];
  commercialSkillsExperienceYear=[];

  oncommercialSkillsOptions(obj)
  {

    let updateItem = this.commercialSkills.find(this.findIndexToUpdate_funct, obj.value);
    let index = this.commercialSkills.indexOf(updateItem);
    if(index > -1)
    {
      this.commercialSkills.splice(index, 1);
      let updateItem2 = this.findObjectByKey(this.commercialSkillsExperienceYear, 'skill',  obj.value);
      let index2 = this.commercialSkillsExperienceYear.indexOf(updateItem2);

      if(index2 > -1)
      {

        this.commercialSkillsExperienceYear.splice(index2, 1);
      }
    }
    else
    {
      obj.checked =true;
      this.commercialSkills.push(obj);
    }

  }

  onComSkillExpYearOptions(e, value)
  {
    this.selectedValue = e.target.value;
    let updateItem = this.findObjectByKey(this.commercialSkillsExperienceYear, 'skill', value);
    let index = this.commercialSkillsExperienceYear.indexOf(updateItem);

    if(index > -1)
    {

      this.commercialSkillsExperienceYear.splice(index, 1);
      this.value = value;
      this.referringData = { skill : this.value, exp_year: e.target.value};
      this.commercialSkillsExperienceYear.push(this.referringData);

    }
    else
    {
      this.value=value;
      this.referringData = { skill : this.value, exp_year: e.target.value};
      this.commercialSkillsExperienceYear.push(this.referringData);

    }

  }

  formal_skills_exp=[];
  formal_skills=[];
  onFormalOptions(obj)
  {

    let updateItem = this.formal_skills_exp.find(this.findIndexToUpdate_funct, obj.value);
    let index = this.formal_skills_exp.indexOf(updateItem);
    if(index > -1)
    {
      this.formal_skills_exp.splice(index, 1);
      let updateItem2 = this.findObjectByKey(this.formal_skills, 'skill',  obj.value);
      let index2 = this.formal_skills.indexOf(updateItem2);

      if(index2 > -1)
      {

        this.formal_skills.splice(index2, 1);
      }
    }
    else
    {
      obj.checked =true;
      this.formal_skills_exp.push(obj);
    }

  }

  onFormalExpYearOptions(e, value)
  {
    this.selectedValue = e.target.value;
    let updateItem = this.findObjectByKey(this.formal_skills, 'skill', value);
    let index = this.formal_skills.indexOf(updateItem);

    if(index > -1)
    {

      this.formal_skills.splice(index, 1);
      this.value = value;
      this.referringData = { skill : this.value, exp_year: e.target.value};
      this.formal_skills.push(this.referringData);

    }
    else
    {
      this.value=value;
      this.referringData = { skill : this.value, exp_year: e.target.value};
      this.formal_skills.push(this.referringData);

    }

  }


}