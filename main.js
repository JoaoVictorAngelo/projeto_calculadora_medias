const form = document.getElementById('form-atividade')
let linhas = ''

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />'
const atividades = []
const notas =[]
const spanAprovado = '<span class="aprovado">Aprovado</span>'
const spanAReprovado = '<span class="reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Qual é a nota minima?'))

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    const nomeAtividade = inputNomeAtividade.value.replace(/\s+/g, '').toLowerCase();

    if (atividades.includes(nomeAtividade)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi incluida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
    
        let linha = '<tr>'
        linha += `<td> ${inputNomeAtividade.value} </td>`
        linha += `<td> ${inputNotaAtividade.value} </td>`
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`
        linha += `</tr>`
    
        linhas += linha
    
    }
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanAReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}