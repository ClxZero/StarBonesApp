import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsePage } from './response.page';

describe('ResponsePage', () => {
  let component: ResponsePage;
  let fixture: ComponentFixture<ResponsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
