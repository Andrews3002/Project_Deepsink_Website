import { Link } from "react-router-dom";
interface NavLinksProps {
  links: { name: string; path: string }[];
}



function NavLinks({ links } : NavLinksProps) {
    return (
        <>
        <div className="logoDiv">
            <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="navLinks">
            {links.map((link, index) => (
                <li className="listItem" key={index}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))}
        </ul>
        </>
    );
}

export default NavLinks;