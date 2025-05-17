import Item from "./Item";

function List(){

    const carros = [
        {id: 1, marca: "Ferrari"},
        {id: 2, marca: "Fiat"},
        {id: 3, marca: "Ford"},

    ]
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                {carros.map((carro) => (
                    <Item marca={carro.marca}/>
                ))}
            </ul>
        </>
    )
}

export default List;