let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let nome = amigo.value.trim();

    if (nome == '') {
        alert('Digite um nome válido!');
        return;
    }

    if (amigos.includes(nome.toLowerCase())) {
        alert('Esse amigo já está na lista!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nome.toLowerCase()); // Salva tudo em minúsculo

    if (lista.textContent == '') {
        lista.textContent = nome;
    } else {
        lista.textContent += ', ' + nome;
    }

    amigo.value = '';
}


function sortear(){
    if( amigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i =0; i < amigos.length; i++) {
        
        if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';  
    }
}
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
    


