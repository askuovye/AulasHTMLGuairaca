document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#data-output");

    function getPersonagem() {
        fetch("https://rickandmortyapi.com/api/character/?page=19")
            .then(response => response.json())
            .then(data => {
                appendData(data.results);
            })
            .catch(error => {
                console.error("Erro ao buscar dados da API:", error);
            });
    }

    function appendData(personagens) {
        let output = "";
        personagens.forEach(personagem => {
            output += `
                <div class="character-card">
                    <img src="${personagem.image}" alt="${personagem.name}">
                    <div class="info">
                        <h2>${personagem.name}</h2>
                        <p>Status: ${personagem.status}</p>
                        <p>Espécie: ${personagem.species}${personagem.type ? ` - ${personagem.type}` : ""}</p>
                        <p>Origem: ${personagem.origin.name}</p>
                        <p>Localização Atual: ${personagem.location.name}</p>
                    </div>
                </div>
            `;
        });
        container.innerHTML = output;
    }

    getPersonagem();
});