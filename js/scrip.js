// Mostra uma mensagem de boas-vindas no console assim que o site é carregado
console.log("Bem-vindo ao Coffee Shop Tia Rosa! ☕");

// Exibe uma mensagem de alerta assim que a página é carregada
alert("Seja bem-vindo(a)! Aproveite nosso cardápio especial de cafés!");

// Função que será chamada quando o botão for clicado
function mostrarMensagem() {
  // Mostra uma mensagem personalizada em um alerta
  alert("Você clicou para saber mais sobre nossos cafés! 😍");
}

  <script>
    // Aplica rolagem suave manualmente
    document.querySelectorAll('a[href^="#"]').forEach(anchor = {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão de navegação

        // Seleciona o destino do link (a seção correspondente)
        const targetSection = document.querySelector(this.getAttribute('href'));

        // Rola suavemente até a seção
        targetSection.scrollIntoView({
          behavior: 'smooth', // Rolagem suave
          block: 'start' // Inicia a rolagem no topo da seção
        });
      })
    });
  </script>
