import logo from '../logo.svg';

function Header(){
    return(
        <header className="header shadow p-3 mb-5 bg-body rounded">
            <div className="marca">
                <img src={logo} alt="logo" className="logo" />
                <h4>Nombre</h4>
            </div>
            
            <nav className="nav">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">Procesadores</button>
                    <button type="button" class="btn btn-outline-primary">Mothers</button>
                    <button type="button" class="btn btn-outline-primary">Placas</button>
                    <button type="button" class="btn btn-outline-primary">Gabinetes</button>
                </div>  
            </nav>
        </header>
    )
}

export default Header;
