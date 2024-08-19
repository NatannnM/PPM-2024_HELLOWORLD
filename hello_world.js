function helloworld(){
    const input = document.querySelector('#name');
    const p = document.querySelector('#HelloWorldMessage');
    if(input.value){
        p.textContent = "Bem vindo a programação móvel " + input.value + "!";
    }else{
        p.textContent = '';
    }    
}