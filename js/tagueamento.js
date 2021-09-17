// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// evento de clicar em "Entre em Contato" em index.html
$('#entre-em-contato').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'entre_em_contato', 'eventLabel': 'link_externo'});
});

// evento de clicar em "Download PDF" em index.html
$('#donwload-PDF').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'download_pdf', 'eventLabel': 'download_pdf'});
});

// evento de clicar no botão "Lorem" em analise.html
$('#image-lorem').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'analise', 'eventAction': 'ver_mais', 'eventLabel': 'Lorem'});
});

// evento de clicar no botão "Ipsum" em analise.html
$('#image-ipsum').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'analise', 'eventAction': 'ver_mais', 'eventLabel': 'Ipsum'});
});

// evento de clicar no botão "Dolor" em analise.html
$('#image-dolor').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'analise', 'eventAction': 'ver_mais', 'eventLabel': 'Dolor'});
});

// evento de preencher o campo "Nome" no formulário em sobre
$('#nome').on('change', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': 'nome', 'eventLabel': 'preencheu'});
});

// evento de preencher o campo "Nome" no formulário em sobre
$('#email').on('change', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': 'email', 'eventLabel': 'preencheu'});
});

// evento de preencher o campo "Nome" no formulário em sobre
$('#telefone').on('change', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': 'telefone', 'eventLabel': 'preencheu'});
});

// evento de clical no campo "Aceito" no formulário em sobre
$('#aceito').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': 'aceito', 'eventLabel': 'preencheu'});
});

// evento de formulário enviado em sobre
$('#enviar').on('click', function() {
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': 'enviado', 'eventLabel': 'enviado'});
});

