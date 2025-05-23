import { useState } from 'react';

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault(); // Previne o comportamento padrão do formulário
        console.log("Cadastrando usuário...");
        console.log(`Name setName ${name}`);
        console.log(`Password setPassword ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    // value={name}/> Deixar um valor padrão no input


    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
            
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;