var alunos = ["Pedro","Tiago","Joao"]
var notasA = [8.0,7.0,6.0]
var notasB = [7.0,5.7,6.3]

function media(nota1,nota2){

    var media = (nota1 + nota2) / 2;
    return media
}

function situacao(media){
    if(media>=7){
        return "Aprovado"
    }
    else if(media< 7 && media >= 7){
        return "Recuperação"
    }
    else{
        return "Reprovado"
    }
}

function mostrarResultados(){
    

    for(var index in alunos){
        var notaPri =notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri,notaSeg)
        var final = situacao(mediaAtual)

        console.log("O aluno",alunos[index],"teve a média de:",mediaAtual,". E sua situação final é:",final)
    }
}

mostrarResultados()