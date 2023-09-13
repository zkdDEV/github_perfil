import { useState, useEffect } from "react"

const Formulario = () =>
{
    // O useState cria um estado a determinado item
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)

    // Estado do nome
    const [nome, setNome] = useState('')
    const alteraNome = (evento) =>
    {
        setNome(evento.target.value)
    }
    
    /*
    O useEffect é utilizado quando algum componente/elemento
    do site é mexido | Caso não seja escolhido nenhum componente
    ele vai fazer tal ação em qualquer coisa que for mexida no site
    | OBS: No caso anterior citado, não existe o array
    */
    useEffect(() => {
        console.log('O campo de nome foi alterado!')
        // A lista de elementos fica dentro dos []
    }, [nome])

    /*
    Aqui criamos um useEffect que só vai fazer a ação quando a
    página é carregada e quando é desmontada
    */
    useEffect(() => {
        console.log('O Formulário iniciou')

        // Para adicionar um efeito quando for finalizado o 
        return () =>
        {
            console.log('O Formulário finalizou')
        }
        // O array deve estar vazio
    }, [])

    // Função que vai dizer se passou ou não
    const renderizaResultado = () =>
    {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3
        if(media >= 7)
        {
            // É possível utilizar o return do react como resposta
            return(
                <>
                <p>Olá {nome}, você foi Aprovado!🥳 </p>
                <span>Pontos totais: {soma}</span>
                </>
            )
        }
        else
        {
            return(
                <>
                <p>Olá {nome}, você foi Reprovado!😒</p>
                <span>Pontos totais: {soma}</span>
                </>
            )
        }
    }
    return(
        <form>
            {/* Renderizando Listas */}
            <ul>
                {/* os () rosas, servem para poder quebrar a linha */}
                {/* {[1,2,3,4,5].map(item => (
                    // A key serve para o react se direcionar com o virtualDOM
                    <li key={item}>{item}</li>
                ))} */}
            </ul>
            {/* o onChange vai capturar o valor inserido no input */}
            <input required type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input required type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input required type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input required type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}

        </form>
    )
}

export default Formulario