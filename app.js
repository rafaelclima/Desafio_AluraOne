//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const listaDosAmigos = [];

const adicionarAmigo = () => {
  try {
    const addAmigo = document.getElementById('amigo').value;
    if (addAmigo === '') {
      alert('O campo não pode estar vazio!');
    } else {
      listaDosAmigos.push(addAmigo);
      const listaAtualizada = document.getElementById('listaAmigos');
      listaAtualizada.innerHTML += `<li class="amigo-da-lista">${addAmigo}</li>`;
      console.log(listaDosAmigos);
      document.getElementById('amigo').value = '';
    }
  } catch (error) {
    console.error(error.message);
  }
};

const sortearAmigo = () => {
  try {
    if (listaDosAmigos.length < 2) {
      alert('É necessário ter pelo menos 2 amigos na lista para sortear!');
    } else {
      const indiceAleatorio = Math.floor(Math.random() * listaDosAmigos.length);
      const amigoSorteado = listaDosAmigos[indiceAleatorio];
      document.getElementById('resultado').textContent = amigoSorteado;
    }
  } catch (error) {
    console.error(error.message);
  }
};
