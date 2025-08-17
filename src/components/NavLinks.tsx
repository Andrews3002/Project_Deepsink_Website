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
        
<!-- import { useState } from "react";

interface NavLinksProps {
    links: string[];
    topics: string[];
}

const addNavLink = (topics: string[], link: string, index: number) => {
    if (link === "Research Topics") {
        return (
        <li className="dropdownMenu" key={index}>
            <div className="dropdownMenuDiv">
                <a href="#">{link}</a>
                <img src="/src/assets/WhiteDropdownArrow.svg" alt="Dropdown Arrow" className="dropdownArrow"/>
            </div>

            <div className="dropdownContainer">
                <ul className="dropdownLinks">
                    {topics.map((subLink, subIndex) => (
                        <li className="dropdownLink" key={subIndex}>
                            <a href="#">{subLink}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
        );
    } else {
        return (
        <li className="defaultLink" key={index}>
            <a href="#">{link}</a>
        </li>
        );
    }
};

function NavLinks({ links, topics }: NavLinksProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="logoDiv">
                <img src="/src/assets/Logo.svg" alt="Logo" className="logo" />
                <div className="logoTitleDiv">
                    <p className="logoText">Project</p>
                    <p className="logoText accentText">DeepSink</p>
                </div>
            </div>

            <ul className="navLinks">
                {links.map((link, index) => (
                    addNavLink(topics, link, index)
                ))}
            </ul>

            <div className="burgerMenuDiv" onClick={() => setOpen(!open)}>
                <div id="bar1" className={`burgerBar ${open ? "active" : ""}`}></div>
                <div id="bar2" className={`burgerBar ${open ? "active" : ""}`}></div>
                <div id="bar3" className={`burgerBar ${open ? "active" : ""}`}></div>
            </div>

            <ul className={`mobileNavLinks ${open ? "navActive" : ""}`}>
                {links.map((link, index) => (
                        link !== "Research Topics" ? (
                            <li className="mobileNavLink" key={index}>
                                <a href="#">{link}</a>
                            </li>
                        ): null
                    )
                )}

                {topics.map((subLink, subIndex) => (
                    <li className="mobileNavLink" key={subIndex}>
                        <a href="#">{subLink}</a>
                    </li>
                ))}
            </ul>
        </>
    ); -->
}

export default NavLinks;