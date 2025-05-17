function Evento(){
    function meuEvento(){
        console.log("Fui ativado!");
    }
    return(
        <div>
            <p>Clique para disparar um envento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento;