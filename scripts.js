var isHidden = true;

function toggleHide() {
    var content = document.querySelector('.content .hide');
    var showButton = document.querySelector('.content .show a');

    if (isHidden) {
        content.style.display = 'block';
        showButton.style.display = 'none';
        isHidden = false;
    } else {
        content.style.display = 'none';
        showButton.style.display = 'block';
        isHidden = true;
    }
}
var currentSection = 'contents'; //  mostra a seção contents

function toggleSection(sectionName) {
    var sections = ['contents', 'duvidas', 'topicos-enviado'];

    // Esconde todas as seções
    sections.forEach(function(section) {
        document.querySelector('.' + section).style.display = 'none';
    });

    // Mostra a seção desejada
    document.querySelector('.' + sectionName).style.display = 'flex';

    currentSection = sectionName; // Atualiza a seção atual
}

//  botões
document.getElementById('discussoes-btn').addEventListener('click', function() {
    if (currentSection !== 'duvidas') {
        toggleSection('duvidas');
    }
});

document.getElementById('duvidas-btn').addEventListener('click', function() {
    if (currentSection !== 'topicos-enviado') {
        toggleSection('topicos-enviado');
    }
});

document.getElementById('topicos-enviado-btn').addEventListener('click', function() {
    if (currentSection !== 'contents') {
        toggleSection('contents');
    }
});


