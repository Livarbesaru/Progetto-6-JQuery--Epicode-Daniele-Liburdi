const mieImg = ["img\/arrabbiato.png", "img\/bello.png", "img\/piangere.png", "img\/ridere.png", "img\/amare.png", "img\/amare1.png", "img\/spavento.png", "img\/shock.png", "img\/arrabbiato.png", "img\/bello.png","img\/piangere.png", "img\/ridere.png", "img\/amare.png", "img\/amare1.png", "img\/spavento.png", "img\/shock.png"];
var valoreid=[]
var arrayFine=[]
// creo una variabile che mi contiene le immagini cliccate

var click=0

// array di controllo per le immagini due alal volta
var arrayControllo=[]

$(document).ready(function(){
// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.
// creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

    function mischia(a){
    var Lunghezza =a.length;

   for(let i=Lunghezza;i >= 0;i--){
        var NumeroCaso = Math.floor(Math.random()*i);
        var indice= a.splice(NumeroCaso[0],1);
        a.splice(NumeroCaso,0,indice[0]);
    }
}

$("div[class=box]").append(`<div class=scatola></div>`)

function start(){
    mischia(mieImg)
//misure scatola in cui ci sono i div ed allora volta ci sono le immagini
    $("div[class=scatola]").css({
        'display':'flex',
        'width':'640px',
        'flex-wrap':'wrap',
        'flex-direction':'row'
    })

    // così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.
    for(let i=0;i<mieImg.length;i++){
        $("div[class=scatola]").append(`<div id=${i}></div>`)
    }
    
    for(i=0;i<mieImg.length;i++){
        // creo una variabile "images" che contiene il selettore della classe "images". 
        // vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
        //images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");

       var images= $(`div[class=scatola] > div[id=${i}]`).append(`<img src=${mieImg[i]} class=\'images\'>`)
        $(`div[class=scatola] > div[id=${i}]`).css({
            'background':'rgba(0,218,219,1)',
            'margin':'5px',
            'border-radius':'30px'
        })
    }
//presentazione iniziale icone
    $("img").css({
        'opacity':'0'
    })
//presentazione icone sul click
    $("img").on("click",function(){

        $('nonClick').css({
            'opacity':1
        });

// creo la variabile principale "mostraImg"
        var mostraImg=$(this).css({
            'opacity':'0',
        })
//utilizzo mostraImg per darle una animazione di opacita'
        mostraImg.css({
            'transition-property':'opacity',
            'transition-duration':'0.3s',
            'opacity':1
        })
//creo una variabile divParent con selettore il parent dell'imaggine
        var divParent=$(this).parent()

//do' a divParent un animazione di rotazione
        divParent.css({
            'transform':'rotateY(0)'
        })

        divParent.css({
            'transition-property':'transform',
            'transition-duration':'0.3s',
            'transform':'rotateY(3.142rad)'
        })

        //aumento il conteggio ad ogni click
        click++
        $('span[id=clicks]').html(click)

        //prendo la directory delle immagini come valore
        var valore=$(this).attr('src')

        //aggiungo i valori delle immagini cliccate nell array di controllo
        arrayControllo.unshift(valore)


        var id=$(this).parent().attr('id')
        valoreid.unshift(id)

        if(valoreid.length>2){
            valoreid=[]
        }


        // ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.
        if(arrayControllo.length>2){
            $('img:not(.nonClick)').css({
                'opacity':0
                
            // se sono diverse nascondo le due immagini.
            })
            $('div').css({
                'transform':'rotateY(0)'
            })
            arrayControllo=[]
        }

        //le lascio visibili o do'un messaggio di errore
        else if(arrayControllo[0]===arrayControllo[1]){
            if(valoreid[0]==valoreid[1]){
                alert('l\'icona e\' gia\' stata flaggata')
                valoreid=[]

                $('img:not(.nonClick)').css({
                    'opacity':0
                })

                $('div').css({
                    'transform':'rotateY(0)'
                })
            }
//reset presentazione icone
            else if($(this).hasClass('nonClick')){
                alert('l\'icona e\' gia\' stata sbloccata')
                valoreid=[]

                $('img:not(.nonClick)').css({
                    'opacity':0
                })

                $('div').css({
                    'transform':'rotateY(0)'
                })
            }
//controllo finale tra array iniziale ed icone selezionate
            else{
            $(`img[src="${arrayControllo[0]}"]`).addClass('nonClick');

            arrayFine.push(arrayControllo[0],arrayControllo[1])

            valoreid=[]
            }

            // se sono uguali azzero la mia lista.
            arrayControllo=[]
        }
        console.log(arrayFine)
        console.log(mieImg)
        
        if(arrayFine.sort().join(',')=== mieImg.sort().join(',')){
            reset()
        }
    })
}
//riconcia
function reset(){

    $('body').append("<h1>Hai vinto</h1><button onClick=window.location.reload()>Ricomincia</button>")

}
start()
})


        // prendo a caso un elemento dalla mia lista.

  

    // creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.

                