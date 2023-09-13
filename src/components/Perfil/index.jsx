import styles from './Perfil.module.css'

const Perfil = (props) => {
    // Esse código poderia ser utilizado no local da Props(Propriedades)
    // const usuario = {
    //     nome: 'Matheus Reichemback Stang',
    //     avatar: 'https://github.com/zkdDev.png'
    // }
    return (
        <header className={styles.header}>
            {/*
            Em atributos de tags, devemos excluir as ""
            e colocar as {}
            */}
            <img className={styles.avatar} src={`https://github.com/${props.nome}.png`}/>
            <h1 className={styles.name}>{props.nome}</h1>
        </header>
    )
}

export default Perfil