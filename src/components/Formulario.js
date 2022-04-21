import {useState} from 'react'
import {toast} from 'react-toastify' 

export function Formulario(props){
    
    const[nome, setNome] = useState();
    const[endereco, setEndereco] = useState();
    const[cidade, setCidade] = useState();
    const[estado, setEstado] = useState();
    const[telefone, setTelefone] = useState();

    function nomeAlterar(e){
        setNome(e.target.value);
    }

    function enderecoAlterar(e){
        setEndereco(e.target.value);
    }

    function cidadeAlterar(e){
        setCidade(e.target.value);
    }
    
    function estadoAlterar(e){
        setEstado(e.target.value);
    }

    function telefoneAlterar(e){
        setTelefone(e.target.value);
    }

    function validar(e)
    {
        e.preventDefault();
        if(nome===undefined){
            toast.error("Erro. Nome não pode estar vazio.");
        }
        else if(endereco===undefined){
            toast.error("Erro. Endereço não pode estar vazio.");
        }
        else if(cidade===undefined){
            toast.error("Erro. Cidade não pode estar vazio");
        }else if(estado===undefined){
            toast.error("Erro. Estado não pode estar vazio");
        }else if(telefone===undefined){
            toast.error("Erro. Telefone não pode estar vazio");
        } 
        else{
            toast.success("Dados cadastrados")
            window.alert(`Nome: ${nome} \nEndereço: ${endereco} \nCidade: ${estado} \nEstado: ${cidade} \nTelefone: ${telefone}`)
        }
    }
    
    return(
        <div>
            <form onSubmit={validar}>
                <label htmlFor="nome">Nome:</label><p></p>
                <input type="text" id="nome" name="nome" onChange={nomeAlterar}></input><p></p>
                <label htmlFor="endereco">Endereço:</label><p></p>
                <input type="text" id="endereco" name="endereco" onChange={enderecoAlterar}></input><p></p>
                <label htmlFor="cidade">Cidade:</label><p></p>
                <input type="text" id="cidade" name="cidade" onChange={cidadeAlterar}></input><p></p>
                <label htmlFor="estado">Estado:</label><p></p>
                <input type="text" id="estado" name="estado" onChange={estadoAlterar}></input><p></p>
                <label htmlFor="telefone">Telefone:</label><p></p>
                <input type="text" id="telefone" name="telefone" onChange={telefoneAlterar}></input><p></p>
                
                <input type="submit" value="Submit"></input>
            </form> 
            <h6>
                <p><font color="red">***Após preencher o cadatro confirme suas informações.***</font></p>
            </h6>
        </div>
    );
};

