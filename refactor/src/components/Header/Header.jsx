const logo = require('components/Header/logo.svg');

function Header() {
    return(
        <div id="header" className="header">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Header;
