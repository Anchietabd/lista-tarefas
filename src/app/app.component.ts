import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefas = [];
  adicionarTarefa(tarefa: string) {
    if (tarefa !== '') {
      this.tarefas.push(tarefa);
    }
  }
  excluirTarefa(tarefa: string) {
    const i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }
}
