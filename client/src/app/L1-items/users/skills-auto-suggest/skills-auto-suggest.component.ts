import { Component, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { UserService} from '../../../user.service';
import {filter_array, removeDuplication} from '../../../../services/object';
import {constants} from '../../../../constants/constants';
import { isPlatformBrowser } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-i-forme-skills-auto-suggest',
  templateUrl: './skills-auto-suggest.component.html',
  styleUrls: ['./skills-auto-suggest.component.css']
})
export class SkillsAutoSuggestComponent implements OnInit {
  @Input() selectedSkill: Array<object>;
  @Output() selectedItems: EventEmitter<any> = new EventEmitter<any>();

  errorMsg: string;
  controllerOptions: any = {};
  autoSuggestController;
  resultItemDisplay;object;
  years_exp_min_new = constants.years_exp_min_new;
  skills_years_exp;selectedSkillExpYear=[];value;
  referringData;

  constructor(private authenticationService: UserService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if(!this.selectedSkill) {
      console.log('in if ngon');
      this.selectedSkill = [];
    }

    this.controllerOptions = true;
    this.autoSuggestController = function (textValue, controllerOptions) {
      return this.authenticationService.autoSuggestSkills(textValue);
    };

    this.resultItemDisplay = function (data) {
      const skillsInput = data;
      let skillsOptions = [];
      for(let skill of skillsInput) {
        skillsOptions.push({_id : skill['skill']._id , name : skill['skill'].name, type : skill['skill'].type});
      }
      return filter_array(skillsOptions);
    }
  }

  itemSelected(skillObj){
    let objectMap = {};
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 500);
    }
    if(this.selectedSkill.find(x => x['name'] === skillObj.name)) {
      this.errorMsg = 'This skills has already been selected';
      return false;
    }
    else {
      objectMap = {_id:skillObj._id ,  name: skillObj.name, type: skillObj.type};
      if(skillObj) this.selectedSkill.push(objectMap);
      else this.selectedSkill.push({ name: skillObj.name, visa_needed: false});
    }
    this.selectedSkillExpYear.push(objectMap);
    console.log(this.selectedSkillExpYear);
    this.selectedItems.emit(this.selectedSkillExpYear);
    this.selfValidate();
  }

  selfValidate() {
    console.log('selfValidate');
    if(this.selectedSkill && this.selectedSkill.length <= 0) {
      console.log('in if');
      this.errorMsg = "Please select atleast one skill";
      return false;
    }
    if(!this.selectedSkill) {
      console.log('in if 2nd');
      this.errorMsg = "Please select atleast one skill";
      return false;
    }

    delete this.errorMsg;
    return true;
  }

  skillsExpYearOptions(event, value){
    console.log(this.selectedSkillExpYear);
    let updateItem = this.findObjectByKey(this.selectedSkillExpYear, 'name', value.name);
    let index = this.selectedSkillExpYear.indexOf(updateItem);
    console.log(index);

    if(index > -1) {
      this.value=value;
      this.selectedSkillExpYear.splice(index, 1);
      this.referringData = {
        _id: this.value._id,
        name : this.value.name,
        type : this.value.type,
        exp_year: parseInt(event.target.value)
      };
      this.selectedSkillExpYear.push(this.referringData);

    }
    else {
      this.value=value;
      this.referringData = {
        _id: this.value._id,
        name : this.value.name,
        type : this.value.type,
        exp_year: parseInt(event.target.value)
      };
      this.selectedSkillExpYear.push(this.referringData);
    }
    /*this.selectedSkill.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });*/

    console.log(this.selectedSkillExpYear);
    this.selectedItems.emit(this.selectedSkillExpYear);
  }

  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value)
        return array[i];
    }
    return null;
  }

}
