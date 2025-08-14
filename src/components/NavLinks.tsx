interface NavLinksProps {
    links: string[];
}

function NavLinks({ links } : NavLinksProps) {
    return (
        <>
        <div className="logoDiv">
            <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="navLinks">
            {links.map((link, index) => (
                <li key={index}>
                    <a>{link}</a>
                </li>
            ))}
        </ul>
        </>
    );
}

export default NavLinks;
