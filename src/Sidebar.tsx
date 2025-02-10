import { useEffect, useState } from 'react';
import profile from '../public/profile.png';

interface Section {
    id: string;
    title: string;
}

// List your sections here, ensuring that the id matches the section element's id
const sections: Section[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Me' },
    { id: 'education-work', title: 'Education & Work' },
    { id: 'projects', title: 'Projects' },
    // add more sections as necessary
];

export const Sidebar = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(true);

    // Set up Intersection Observer to update activeSection based on section visibility
    useEffect(() => {
        const sectionElements = sections.map((sec) => document.getElementById(sec.id)).filter(Boolean) as HTMLElement[];

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3, // When 60% of a section is visible, mark it active
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionElements.forEach(el => observer.observe(el));

        // Clean up the observer on unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    const handleNavItemClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the sidebar on mobile after clicking an item
        setMobileSidebarOpen(false);
    };

    return (
        <nav className={`sidebar ${isMobileSidebarOpen ? 'open' : ''}`}>
            <div className={"d-flex"}>
                <div className="m-auto sidebar-logo">
                    <img src={profile} alt="logo" />
                </div>
            </div>
            <div className={"text-center"}>
                <h1 className={"fw-bolder"}>Ethan<br/>Paterson-Barker</h1>
                <p>
                    <a href={"https://twitter.com/EthanP_B"}><i className={"fa-brands fa-x-twitter"}></i></a>
                    <a href={"https://twitch.tv/Block2Block_"}><i className={"fa-brands fa-twitch"}></i></a>
                    <a href={"https://github.com/Block2Block"}><i className={"fa-brands fa-github"}></i></a>
                    <a href={"mailto:ethan@block2block.me"}><i className={"fa-solid fa-envelope"}></i></a>
                    <br/>
                    <a href={"https://www.reddit.com/user/Block2block"}><i className={"fa-brands fa-reddit"}></i></a>
                    <a href={"https://www.youtube.com/@Block2Block"}><i className={"fa-brands fa-youtube"}></i></a>
                    <a href={"https://steamcommunity.com/id/Block2Block"}><i className={"fa-brands fa-steam"}></i></a>
                    <a href={"https://www.linkedin.com/in/ethan-paterson-barker"}><i className={"fa-brands fa-linkedin"}></i></a>
                </p>
            </div>

            <ul>
                {sections.map((sec) => (
                    <li
                        key={sec.id}
                        className={activeSection === sec.id ? 'active' : ''}
                        onClick={() => handleNavItemClick(sec.id)}
                    >
                        {sec.title}
                    </li>
                ))}
            </ul>
            <button
                className="sidebar-toggle"
                onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
            >
                <i
                    className={
                        isMobileSidebarOpen
                            ? 'fa-solid fa-chevron-left'
                            : 'fa-solid fa-chevron-right'
                    }
                ></i>
            </button>
        </nav>


    );
};
