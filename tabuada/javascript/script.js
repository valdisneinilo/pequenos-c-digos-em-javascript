function gerar(){
    var n = document.getElementById('txtnum') 
    var marcador = document.getElementsByName('radmarc');
    var res = document.querySelector('#resultado')
    if(n.value.length == 0){
        alert('[ERRO!] Porfavor insira um número')
    }else{
        res.innerHTML = ''
        if (marcador[0].checked){
            for(var c = 1; c <= 10; c++){
                var item  = document.createElement('option')
                item.text =`${n.value} + ${c} = ${Number(n.value) + c}`
                item.value = `tab${c}` 
                res.appendChild(item)
            }
        }else if (marcador[1].checked){
            for (var c = 1; c <= 10; c++){
                var item  = document.createElement('option')
                item.text = `${n.value} - ${c} = ${Number(n.value) - c}`
                item.value = `tab${c}`
                res.appendChild(item)
            }
        }else if (marcador[2].checked){
            for(var c = 1; c <= 10; c++){
                var item  = document.createElement('option')
                item.text = `${n.value} x ${c} = ${Number(n.value) * c}` 
                item.value = `tab${c}`
                res.appendChild(item)
            }
        }else{
            for(var c = 1; c <= 10; c++){
                var item  = document.createElement('option')
                item.text = `${n.value} / ${c} = ${(Number(n.value) / c).toFixed(1)}`  
                item.value = `tab${c}`
                res.appendChild(item)
            }
        }

    }
    
    
}
