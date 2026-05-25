// Lista de fazendas turísticas no Paraná
const fazendas = [
    {
        nome: "Fazenda Bela Vista",
        descricao: "Experiência de colheita de frutas e passeios a cavalo.",
        imagem: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=60"
    },
    {
        nome: "Sítio Verde",
        descricao: "Aprenda sobre produção orgânica e culinária rural.",
        imagem: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=500&auto=format&fit=crop&q=60"
    },
    {
        nome: "Fazenda do Lago",
        descricao: "Passeios de barco, pesca e contato com a natureza.",
        imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60"
    }
];

// Função para criar cards dinamicamente
const container = document.getElementById('cards-container');

fazendas.forEach(fazenda => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${fazenda.imagem}" alt="${fazenda.nome}">
        <h3>${fazenda.nome}</h3>
        <p>${fazenda.descricao}</p>
    `;
    container.appendChild(card);
});

// Formulário de contato
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    form.reset();
});
