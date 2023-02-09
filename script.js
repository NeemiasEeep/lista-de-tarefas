const inputTarefa = document.getElementById('input-tarefa');
const btnAdd = document.getElementById('btn-add');
const listaTarefas = document.getElementById('lista-tarefas');

btnAdd.addEventListener('click', function () {
  // Obtém o valor do input de tarefa
  const tarefa = inputTarefa.value;

  // Cria o HTML da nova tarefa
  const novaTarefa = `<li>${tarefa} <button class="btn-apagar left">Apagar</button>&nbsp;<button class="btn-feito left">Feito</button></li>`;

  //obtem o valor do clear
  const btnClear = document.getElementById('btn-clear');

  // Adiciona a nova tarefa na lista
  listaTarefas.insertAdjacentHTML('beforeend', novaTarefa);

  // Limpa o valor do input de tarefa
  inputTarefa.value = '';


  // Salva a lista de tarefas no local storage
  localStorage.setItem('listaTarefas', listaTarefas.innerHTML);
});

// Carrega a lista de tarefas do local storage
const tarefasSalvas = localStorage.getItem('listaTarefas');

if (tarefasSalvas) {
  listaTarefas.innerHTML = tarefasSalvas;
}

// Adiciona o evento de apagar tarefa
listaTarefas.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-apagar')) {
    event.target.parentElement.remove();

    // Atualiza o local storage com a nova lista
    localStorage.setItem('listaTarefas', listaTarefas.innerHTML);
  }
// conclui a tarefa
  listaTarefas.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-feito')) {
      event.target.parentElement.style.backgroundColor = "rgb(104, 188, 104)";
      event.target.parentElement.style.textDecoration = "line-through";
      event.target.parentElement.style.margin = '1em'

    }
  });
});
