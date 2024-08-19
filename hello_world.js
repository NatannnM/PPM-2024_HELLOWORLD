function helloworld(){
    const input = document.querySelector('#name');
    if(input.value){
        const p = document.querySelector('#HelloWorldMessage');
        p.textContent = "Bem vindo a programação móvel " + input.value + "!";
    }    
}