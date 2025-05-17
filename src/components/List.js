import Item from "./Item";

function List(){

    const carros = [
        {marca: "Ferrari", ano_lancamento: 2019},
        {marca: "Fiat", ano_lancamento: 2018},
        {marca: "Ford", ano_lancamento: 2020},

    ]
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                {carros.map((carro) => (
                    <Item marca={carro.marca} ano_lancamento={carro.ano_lancamento}/>
                ))}
            </ul>
        </>
    )
}

export default List;