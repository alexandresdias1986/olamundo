import styles from './menu.module.css';

export default function Menu () {
    return (
        <header>
            <nav classname ={styles.navegacao}>
            <a className={styles.link} href='/'>
                Inicio
                </a>
            <a className={styles.link} href='/Sobremin'>
                Sobremin
                </a>


            </nav>
        </header>
    )
}