import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents(); //facultatif
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    
  });

  it('should user use name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;// Ou fixture.componentInstance
    //let userService = fixture.debugElement.injector.get(UserService);
    let userService = TestBed.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is Logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    //let userService = fixture.debugElement.injector.get(UserService);
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should not display the user name if user is not Logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    //let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should not fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    //let dataService = fixture.debugElement.injector.get(DataService);
    //let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    //fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });


  it('should fetch data successfully if called asynchronously', async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => { //whenstable c'est à dire quand les taches asynchrones sont finies
      expect(app.data).toBe('Data');
    })
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app= fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick(); //finish le traitement asynchrone
    expect(app.data).toBe('adel');
    
  }));

});
