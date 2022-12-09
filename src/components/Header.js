import "./header.css";

function Header(props) {
    return ( 
        <div className="header">
            <h1 className="text">Fellow comrades, this is our To Do List</h1> 
            <a href="https://www.github.com/Jagholin" target="_blank" rel="noreferrer">
                <button className="link">Pawel</button>
            </a>
            <a href="https://github.com/Nadia551" target="_blank" rel="noreferrer">
                <button className="link">Nadia</button>
            </a>
            <a href="https://github.com/Kingarthur914" target="_blank" rel="noreferrer">
                <button className="link">Artur</button>
            </a>
            <a href="https://github.com/marczewska" target="_blank" rel="noreferrer">
                <button className="link">Ola</button>
            </a>
        </div> 
    );
}

export default Header;