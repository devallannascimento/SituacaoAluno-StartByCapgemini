import { Component } from '@angular/core';

interface Aluno {
  nome: string;
  nota1: number;
  nota2: number;
}

@Component({
  selector: 'app-situacao-alunos',
  templateUrl: './situacao-alunos.component.html',
  styleUrl: './situacao-alunos.component.css'
})
export class SituacaoAlunosComponent {

  novoAluno: Aluno = { nome: '', nota1: 0, nota2: 0 };
  alunos: Aluno[] = [];
  editando: boolean = false;
  alunoParaEditar: Aluno | null = null;

  adicionarAluno() {
    if (!this.novoAluno.nome) {
      alert("O campo nome deve ser preenchido")
      return;
    } if (this.novoAluno.nome.length < 4) {
      alert("O campo nome deve ter ao menos 4 caracteres.")
    } else {
      if (this.editando && this.alunoParaEditar) {
        this.alunoParaEditar.nome = this.novoAluno.nome;
        this.alunoParaEditar.nota1 = this.novoAluno.nota1;
        this.alunoParaEditar.nota2 = this.novoAluno.nota2;
        this.editando = false;
        this.alunoParaEditar = null;
      } else {
        this.alunos.push({ ...this.novoAluno });
      }
      this.novoAluno = { nome: '', nota1: 0, nota2: 0 };
    }
  }

  calcularMedia(aluno: Aluno): number {
    return (aluno.nota1 + aluno.nota2) / 2;
  }

  calcularCondicao(aluno: Aluno): string {
    return this.calcularMedia(aluno) >= 7 ? 'Aprovado' : 'Reprovado';
  }

  editarAluno(aluno: Aluno) {
    this.editando = true;
    this.alunoParaEditar = aluno;
    this.novoAluno = { ...aluno };
  }

  removerAluno(aluno: Aluno) {
    const index = this.alunos.indexOf(aluno);
    if (index > -1) {
      this.alunos.splice(index, 1);
    }
  }

}
