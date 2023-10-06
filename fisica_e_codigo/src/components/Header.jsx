import styles from './Header.module.css';

const headerStyle = {
    margin: '30px', // Defina a quantidade de espaçamento desejada aqui
  };

export function Header(){
    return(

    <header style={headerStyle}>
        <div className= {styles['header-container']}>
            <div className={styles.logo}>
                <div className={styles.circulo}>
                    <img src="\src\img\logo.png" alt="logo"/>
                </div>
            </div>
            <h1>Física & Código</h1>
            <nav className={styles['menu-container']}>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="Paginas.html">Páginas</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="sobre.html">Sobre</a></li>
            </ul>
        </nav>
        </div>
    </header>
    )
}