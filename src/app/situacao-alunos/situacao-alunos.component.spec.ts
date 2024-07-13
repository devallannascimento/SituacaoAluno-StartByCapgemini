import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoAlunosComponent } from './situacao-alunos.component';

describe('SituacaoAlunosComponent', () => {
  let component: SituacaoAlunosComponent;
  let fixture: ComponentFixture<SituacaoAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SituacaoAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacaoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
