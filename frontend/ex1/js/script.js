let cpf = document.getElementById('cpfPaci');

cpf.addEventListener('keyup',()=>validarCampo(cpf,11));

function validarCampo(input,i){
    if(isNaN(input.value)){
        input.value =  input.value.substring(0,( input.value.length - 1));
    }
    if(input.value.length>=i){
        input.value =  input.value.substring(0,i);
    }
}
