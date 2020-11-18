$('.owl-carousel').owlCarousel({
    loop:true, /* efeito de loop que pode ser finito */
    margin:10, /* opera a margem entre um filme e outro */
    nav:false, /* setas de direção para navegação */
    responsive:{ /* Responsividade é quando tudo se adapta ao tamanho da tela mesmo quando alterado */
        0:{
            items:1 /* significa que quando a tela tiver proximo a essas quantidade de pixel apareçam apenas 1 item na tela */
        },
        600:{ /* significa que quando a tela tiver proximo a essas quantidade de pixel apareçam apenas 3 itens na tela */
            items:3
        },
        1000:{ /* significa que quando a tela tiver proximo a essas quantidade de pixel apareçam apenas 5 itens na tela */
            items:5
        }
    }
})