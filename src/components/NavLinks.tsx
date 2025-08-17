interface NavLinksProps {
    links: string[];
    topics: string[];
}

const addNavLink = (topics: string[], link: string, index: number) => {
    if (link == 'Research Topics'){
        return (
            <li className="dropdownMenu" key={index}>
                <div className="dropdownMenuDiv">
                    <a href="#">{link}</a>
                    <img src="/src/assets/WhiteDropdownArrow.svg" alt="Dropdown Arrow" className="dropdownArrow" />
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
        )
    }
    else{
        return (
            <li className="defaultLink" key={index}>
                <a href="#">{link}</a>
            </li>
        )
    }
}

function NavLinks({ links, topics } : NavLinksProps) {
    return (
        <>
        <div className="logoDiv">
            <img src="/src/assets/Logo.svg" alt="Logo" className="logo" />
            <div className="logoTitleDiv">
                <p className="logoText" id="titleFirstWord">Project</p>
                <p className="logoText" id= "titleLastWord">DeepSink</p>
            </div>
        </div>
        <ul className="navLinks">
            {links.map((link, index) => (
                addNavLink(topics, link, index)
            ))}
        </ul>
        </>
    );
}

export default NavLinks;
