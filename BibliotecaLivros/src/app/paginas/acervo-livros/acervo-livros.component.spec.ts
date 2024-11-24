import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcervoLivrosComponent } from './acervo-livros.component';

describe('AcervoLivrosComponent', () => {
  let component: AcervoLivrosComponent;
  let fixture: ComponentFixture<AcervoLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcervoLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcervoLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
