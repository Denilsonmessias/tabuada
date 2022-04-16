function tabuada() {
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('sel')
    if (num.value.length == 0) {
        alert('ERRO! Preencha o campo vazio')
    } else {
        var n = Number(num.value)
       tab.innerHTML = '' //para limpar a caixa e adicionar outro resultado
       for (var c = 1; c <= 10; c++) {
        let item = document.createElement('option') //criando option do select de forma dinâmica
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab ${c}`
        tab.appendChild(item) // adicionando um elemento filho (item)
        }  
    }
   
   
}