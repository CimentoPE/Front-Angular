import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLivrosComponent } from './info-livros.component';

describe('InfoLivrosComponent', () => {
  let component: InfoLivrosComponent;
  let fixture: ComponentFixture<InfoLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
