import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { WelcomePage } from './welcome';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../../providers/user/user';

describe('welcome page', ()=>{
  let de: DebugElement;
  let fixture: ComponentFixture<WelcomePage>;
  let comp: WelcomePage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePage],
      imports: [
        IonicModule.forRoot(WelcomePage)
      ],
      providers: [
        NavController,
        UserProvider
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  })

  it('should create component', ()=>{
    expect(comp).toBeDefined();
  })

  it('should have <h1>', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch('Welcome Admin');
  })

})
