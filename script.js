function showImage(imagemId) {
    // Esconde todas as imagens
    var imagens = document.querySelectorAll('.image-container img');
    imagens.forEach(function(img) {
        img.classList.add('hidden');
    });

    // Exibe a imagem correspondente
    var imagem = document.getElementById(imagemId);
    if (imagem) {
        imagem.classList.remove('hidden');
    }
}
