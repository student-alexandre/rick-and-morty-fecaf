// Ttodos os episódios com personagem aleatório para pegar a imagem
async function carregarEpisodios() {
    const container = document.getElementById('episode-list');
    const loading = document.getElementById('loading');
    let url = 'https://rickandmortyapi.com/api/episode';

    try {
        while (url) {
            const res = await fetch(url);
            const data = await res.json();
            url = data.info.next;

            for (const episode of data.results) {
                const randPersonagemImg = Math.floor(Math.random() * episode.characters.length);
                const personagemURL = episode.characters[randPersonagemImg];

                const personagemResponse = await fetch(personagemURL);
                const personagem = await personagemResponse.json();

                const match = episode.episode.match(/S(\d+)E(\d+)/);
                const TempNum = match[1].padStart(2, '0');
                const epNum = match[2].padStart(2, '0');

                container.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card episode-card h-100">
                            <div class="position-relative">
                                <img src="${personagem.image}" class="card-img-top episode-img" alt="${personagem.name}">
                                <span class="position-absolute top-0 end-0 badge bg-success m-2">
                                    S${TempNum}E${epNum}
                                </span>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title mb-3">${episode.name}</h5>
                                <div class="card-text">
                                    <p class="mb-2">
                                        <small class="text-muted">Data de Exibição:</small><br>
                                        <span class="text-light">${episode.air_date}</span>
                                    </p>
                                    <p class="mb-0">
                                        <small class="text-muted">Personagem em Destaque:</small><br>
                                        <span class="text-light">${personagem.name}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
        loading.style.display = 'none';
    } catch (error) {
        loading.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Erro ao carregar os episódios. Por favor, tente novamente mais tarde.
            </div>
        `;
        console.error('Erro:', error);
    }
}

// personagens
async function carregarPersonagens() {
    const container = document.getElementById('character-list');
    let url = 'https://rickandmortyapi.com/api/character';

    try {
        while (url) {
            const res = await fetch(url);
            const data = await res.json();
            url = data.info.next;

            for (const char of data.results) {
                container.innerHTML += `
                    <div class="col-md-3">
                        <div class="card h-100 text-light bg-dark border-success">
                            <img src="${char.image}" class="card-img-top" alt="${char.name}">
                            <div class="card-body">
                                <h5 class="card-title">${char.name}</h5>
                                <p class="card-text">
                                    Espécie: ${char.species}<br>
                                    Status: ${char.status}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    } catch (error) {
        container.innerHTML = `<div class="alert alert-danger">Erro ao carregar personagens.</div>`;
    }
}

// localizacoes
async function carregarDadosLocalizacao() {
    const container = document.getElementById('localizacao-list');
    let url = 'https://rickandmortyapi.com/api/location';

    try {
        while (url) {
            const res = await fetch(url);
            const data = await res.json();
            url = data.info.next;

            for (const loc of data.results) {
                container.innerHTML += `
                    <div class="col-md-3">
                        <div class="card h-100 text-light bg-dark border-success">
                            <div class="card-body">
                                <h5 class="card-title">${loc.name}</h5>
                                <p class="card-text">
                                    <strong>Tipo:</strong> ${loc.type}<br>
                                    <strong>Dimensão:</strong> ${loc.dimension}
                                </p>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    } catch (error) {
        container.innerHTML = `<div class="alert alert-danger">Erro ao carregar localizações.</div>`;
    }
}


document.getElementById('link-episodios').addEventListener('click', () => {
    trocarAbaAtiva('link-episodios');
    document.getElementById('episode-list').parentElement.classList.remove('d-none');
    document.getElementById('personagem-container').classList.add('d-none');
    document.getElementById('localizacao-container').classList.add('d-none');
});

document.getElementById('link-personagens').addEventListener('click', () => {
    trocarAbaAtiva('link-personagens');
    document.getElementById('episode-list').parentElement.classList.add('d-none');
    document.getElementById('localizacao-container').classList.add('d-none');
    document.getElementById('personagem-container').classList.remove('d-none');
    if (!document.getElementById('character-list').hasChildNodes()) {
        carregarPersonagens();
    }
});

document.getElementById('link-localizacoes').addEventListener('click', () => {
    trocarAbaAtiva('link-localizacoes');
    document.getElementById('episode-list').parentElement.classList.add('d-none');
    document.getElementById('personagem-container').classList.add('d-none');
    document.getElementById('localizacao-container').classList.remove('d-none');
    if (!document.getElementById('localizacao-list').hasChildNodes()) {
        carregarDadosLocalizacao();
    }
});

function trocarAbaAtiva(idAtivo) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(idAtivo).classList.add('active');
}

// Portal e carregamento inicial
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');
    const portalBackground = document.querySelector('.portal-background');
    
    // Inicia a animação do portal
    setTimeout(() => {
        setTimeout(() => {
            portalBackground.style.display = 'none';
            mainContent.classList.remove('content-hidden');
            mainContent.classList.add('content-visible');
        
            carregarEpisodios();
        }, 3000); 
    }, 1000);
});