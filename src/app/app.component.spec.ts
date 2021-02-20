import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('AppComponent', () => {
    it('should be 0 when negative', () => {
      let fixture = TestBed.createComponent(AppComponent);
      let app= fixture.debugElement.componentInstance;
      //const inst = new AppComponent();
      //const res = inst.compute(-1);
      const res = app.compute(-1);
      expect(res).toBe(0);

    })
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('getc');
  })




  

 });
