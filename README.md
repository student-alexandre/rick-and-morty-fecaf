# 🧪 Rick and Morty – Web App Interativo

Projeto desenvolvido para o portfólio da disciplina **Web Programming - Front End**, com o objetivo de consumir dados de uma API pública de desenhos e apresentar de forma visual e dinâmica uma experiência completa utilizando apenas **HTML, CSS e JavaScript**.

---

## 🎯 Objetivo

Consumir dados da API oficial do desenho **Rick and Morty** e exibir informações como episódios, personagens e localizações, utilizando **carregamento dinâmico via JavaScript** com `fetch()`. O projeto simula uma experiência completa com navegação entre abas, carregamento visual e cards interativos.

---

## 🌐 API utilizada

- [Rick and Morty API](https://rickandmortyapi.com/)

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com animações personalizadas)
- JavaScript (puro)
- Bootstrap 5
- Google Fonts (`Creepster`)

---

## 🗂️ Estrutura de Arquivos

```
projeto-rick-and-morty/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

---

## ⚙️ Funcionalidades

- Tela inicial com **animação de portal**
- Navegação entre abas:
  - Episódios (com personagem aleatório de destaque)
  - Personagens (com status e espécie)
  - Localizações (com tipo e dimensão)
- **Carregamento dinâmico** dos dados usando `fetch()`
- Criação de **cards automáticos** via JavaScript
- Estilização visual no tema da série com fonte personalizada e dark mode

---

## 🧪 Exemplo de Uso no Navegador

### 🔄 Página inicial:
- Mostra os episódios com o código (ex: S01E01), data de exibição e um personagem aleatório com imagem.

### 👥 Aba Personagens:
- Exibe cards com imagem, nome, status e espécie de cada personagem.

### 🌍 Aba Localizações:
- Exibe cards com nome, tipo e dimensão dos locais.

---

## 🧠 Aprendizados aplicados

- Uso da `Fetch API` com paginação
- Manipulação de elementos com `createElement`, `appendChild` e `innerHTML`
- Controle de navegação com `addEventListener`
- Otimização de carregamento com `if (!hasChildNodes())` para não duplicar cards

---

## 🎥 Requisitos atendidos para entrega

✅ Consumo de API pública  
✅ Criação dinâmica de cards  
✅ Código em HTML, CSS e JS puros  
✅ Nenhum conteúdo estático nos cards  
✅ Animação visual personalizada  
✅ Organização e navegação fluida  

---

## 👨‍💻 Autor

**Alexandre Oliveira**  
Projeto acadêmico apresentado na UniFECAF.
