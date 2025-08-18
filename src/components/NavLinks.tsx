import { useState } from "react";

interface NavLinksProps {
  links: { name: string; path: string }[];
  topics: { id: number; title: string; summary: string; imageUrl: string; detailLink: string; detail: string }[];
}

const addNavLink = (topics: { id: number; title: string; summary: string; imageUrl: string; detailLink: string; detail: string }[], link: { name: string; path: string }, index: number) => {
    if (link.name == "Research Topics") {
        return (
        <li className="dropdownMenu" key={index}>
            <div className="dropdownMenuDiv">
                <a href={"#"}>{link.name}</a>
                <img src="/src/assets/WhiteDropdownArrow.svg" alt="Dropdown Arrow" className="dropdownArrow"/>
            </div>

            <div className="dropdownContainer">
                <ul className="dropdownLinks">
                    {topics.map((topic, subIndex) => (
                        <li className="dropdownLink" key={subIndex}>
                            <a href={topic.detailLink}>{topic.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
        );
    } 
    else {
        return (
            <li className="defaultLink" key={index}>
                <a href={link.path}>{link.name}</a>
            </li>
        );
    }
};

function NavLinks({ links, topics }: NavLinksProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="logoDiv">
                <img src="/Logo.svg" alt="Logo" className="logo" />
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
                        link.name !== "Research Topics" ? (
                            <li className="mobileNavLink" key={index}>
                                <a href={link.path}>{link.name}</a>
                            </li>
                        ): null
                    )
                )}

                {topics.map((topic, subIndex) => (
                    <li className="mobileNavLink" key={subIndex}>
                        <a href="#">{topic.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NavLinks;