import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugNFComponent } from './sug-nf.component';

describe('SugNFComponent', () => {
  let component: SugNFComponent;
  let fixture: ComponentFixture<SugNFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SugNFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugNFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
