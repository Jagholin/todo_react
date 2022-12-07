import "./header.css";

function Header(props) {
    return ( 
        <div className="header">
            <h1 className="text">Dear fellow colleagues, this is our To Do List</h1> 
            <a href="https://www.github.com/Jagholin" target="_blank">
                <button className="link">Pawel</button>
            </a>
            <a href="https://github.com/Nadia551" target="_blank">
                <button className="link">Nadia</button>
            </a>
            <a href="https://github.com/Kingarthur914" target="_blank">
                <button className="link">Artur</button>
            </a>
            <a href="https://github.com/marczewska" target="_blank">
                <button className="link">Ola</button>
            </a>
        </div> 
    );
}

export default Header;