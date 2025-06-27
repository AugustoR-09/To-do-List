function enviar_enter(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		add_task();
	}
}

function add_task() {
	const pai = document.getElementById('tasks_pai');
	const novadiv = document.createElement('div');
	const checker = document.createElement('input');
	const name_task = document.createElement('p');
	const input = document.getElementById('box_task');
	const botao_delete = document.createElement('p');

	if (input.value === '') {
		alert('Preencha o campo abaixo');
	} else {
		novadiv.classList.add('task_box');

		name_task.classList.add('incompleto');
		name_task.textContent = input.value;

		checker.setAttribute('type', 'checkbox');
		checker.classList.add('check');
		checker.addEventListener('click', function () {
			if (name_task.className === 'incompleto') {
				name_task.classList.remove('incompleto');
				name_task.classList.add('completo');
			} else {
				name_task.classList.remove('completo');
				name_task.classList.add('incompleto');
			}
		});

		botao_delete.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>';
		botao_delete.classList.add('botao-delete');
		botao_delete.addEventListener('click', function () {
			pai.removeChild(novadiv);
		});

		const div = document.createElement('div');
		const svg_div = document.createElement('div');

		div.appendChild(checker);
		div.appendChild(name_task);
		div.style.display = 'flex';
		div.style.alignItems = 'center';

		novadiv.appendChild(div);
		svg_div.appendChild(botao_delete);
		novadiv.appendChild(svg_div);
		pai.appendChild(novadiv);

		input.value = '';
	}
}
