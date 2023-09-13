// ############################-Importação de Componentes-############################
import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

// O App é um Componente
function App() {
  // Tudo que fica antes do return é o código JavaScript
  
  // ############################-Elementos JSX-############################
  // Variável
  const nome = 'Matheus'
  // Função
  function dizNome(nome)
  {
    return nome
  }
  // Objeto
  const pessoa = 
  {
    nome: 'Maria'
  }
  // Renderização Condicional
  let estaDeDia = true

  // ############################-Condicional com Componentes-############################
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false)

  const [nomeUsuario, setNomeUsuario] = useState('')

  // Dentro do Return, ficam os elementos HTML e JSX misturados
  return (
    // ############################-Elementos JSX-############################
    /*
      Para colocar 2 ou mais elementos/tags encostados no JSX, você deve
      deixar eles encapsulados em algum container ou em um fragmento,
      senão vai ser reconhecido como um erro de sintaxe
      | Containers seria uma tag de DIV, HEADER, MAIN e etc...
      | Fragmentos são tags vazias - <> Conteúdo </>
    */
    // Fragmento
    <>
      {/*
        Para renderizarmos o código Javascript no HTML, utilizamos as chaves,
        ficando da seguinte forma - {Conteúdo JavaScript} | OBS não precisa fazer
        concatenações
      */}
      {/* Variável */}
      {/* <h1>Teste 1 - {nome}</h1> */}
      {/* Função */}
      {/* <h2>Teste 2 - {dizNome(nome)} falou oi!</h2> */}
      {/* Objeto */}
      {/* <h3>Teste 3  - {pessoa.nome} respondeu dizendo olá!</h3> */}
      {/* Renderização condicional */}
      {/* <h4>{estaDeDia ? 'Bom dia' : 'Boa noite'}</h4> */}

      {/* ############################-Importação de Componentes-############################ */}
      {/* ############################-Condicional com Componentes-############################ */}
      {/* Criando condicional que vai exibir o componente fomulário */}
      {/* Botão para remover e adicionar o formulário */}
      {/* ############################-Renderizando Listas-############################ */}
      {/* {formularioEstaVisivel && (
        <Formulario />
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button>
      )} */}
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 &&
      (
        <div>
          <Perfil nome={nomeUsuario}/>
          <ReposList nome={nomeUsuario} />
        </div>
      )}
    </>
  )
}

export default App
