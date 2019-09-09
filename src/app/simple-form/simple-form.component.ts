import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit, AfterViewInit {

  /**
  * Use static false
   * Static true using for dynamic components, setting to true will create your view in ngOnInit
  */
  @ViewChild('name', {static: false}) name: ElementRef;
  userModel = new User('vvv', 'sss', 'woman', '', '');

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.name);
  }

  saveUserData(form) {
    console.log(form);
    if (this.userModel.password === this.userModel.comparePass) console.log(this.userModel);
  }

}
