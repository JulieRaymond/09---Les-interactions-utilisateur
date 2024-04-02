import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateKittenComponent } from './app-create-kitten.component';

describe('AppCreateKittenComponent', () => {
  let component: AppCreateKittenComponent;
  let fixture: ComponentFixture<AppCreateKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCreateKittenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCreateKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
