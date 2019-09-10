import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormComponent} from './reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should support preset data', () => {
    const user = {
      userName: 'testUser',
      email: 'testUser@gmail.com',
      subscribe: true
    };
    component.registrationForm.patchValue(user);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#name').value).toEqual(user.userName);
    expect(compiled.querySelector('#email').value).toEqual(user.email);
    expect(compiled.querySelector('#subscribe').value).toBeTruthy();
  });

  it('shouldn\'t pass forbidden user name', () => {
    const user = {userName: 'password'};
    component.registrationForm.patchValue(user);
    expect(component.registrationForm.valid).toBeFalsy();
  });
});
