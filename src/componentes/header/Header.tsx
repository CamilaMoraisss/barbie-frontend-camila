import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link url="/" texto='Home'/>
                    </li>
                    <li>
                        <Link url="/noticias" texto='Notícia'/>
                    </li>
                    <li>
                        <Link url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <Link url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header