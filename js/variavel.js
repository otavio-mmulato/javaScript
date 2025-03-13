function exemploVar(){
    if(true){
        //Definir variáveis
        var x=10;
        let y=20;
        const z=30;
    }
    console.log(x); //acessível
    console.log(y); //Erro: y não está definido
    console.log(z); //Erro: z não está definido
    
}