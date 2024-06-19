// Função para lidar com o login
async function handleLogin(event) {
  console.log("OI");
  // Previne o comportamento padrão do formulário
  event.preventDefault();

  // Coleta os dados do formulário
  var nome = document.getElementById('nome').value;
  var usuario = document.getElementById('usuario').value;

  // Carrega os dados do JSON
  let response = await fetch('/api/database');
  let data = await response.json();

  // Função para verificar as credenciais
  function verificarCredenciais(lista, nome, usuario) {
      return lista.find(item => item.nome === nome && item.usuario === usuario);
  }

  // Verifica se o usuário é um cliente ou um administrador
  let cliente = verificarCredenciais(data.cliente, nome, usuario);
  let admin = verificarCredenciais(data.admin, nome, usuario);

  if (cliente) {
      // Redireciona para a página do cliente
      window.location.href = 'cliente.html';
  } else if (admin) {
      // Redireciona para a página do administrador
      window.location.href = 'admin.html';
  } else {
      // Se não encontrar, exibe uma mensagem de erro
      alert('Nome ou usuário inválido');
  }
}

// Adiciona o manipulador de eventos ao formulário
document.getElementById('loginForm').addEventListener('submit', handleLogin);
