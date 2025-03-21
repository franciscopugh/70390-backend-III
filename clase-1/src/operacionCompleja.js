process.on('message', (mensaje) => {
    let resultado  = 0

    console.log(mensaje);
    console.log("Proceso hijo:", process.pid);
    for(let i = 0; i < 5e9; i ++) {
        resultado += i
    }
    
    process.send(resultado)
}) 