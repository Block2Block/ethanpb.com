import {Sidebar} from "./Sidebar.tsx";
import profile from '../public/profile.png';
import scouts from '../src/assets/scouts.jpeg';
import hyperia from '../src/assets/hyperia.jpeg';
import aurora from '../src/assets/aurora.png';
import alfrey from '../src/assets/alfrey.png';
import {Timeline} from "./Timeline.tsx";

export default function App() {

    const getAge = () => {
        const birthDate = new Date('2001-04-25');
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const isBeforeBirthday =
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

        if (isBeforeBirthday) {
            age--;
        }
        return age;
    };

    return (
        <div>
            <Sidebar/>
            <main className="main-content">
                <section id="home" className="section-fh d-flex parallax"
                         style={{backgroundImage: 'url(\'' + profile + '\')'}}>
                    <div className={"m-auto text-center parallax-content"}>
                        <h1>Hi, I'm Ethan.</h1>
                        <p>I'm a Software Engineer currently working as a Backend Developer in Software Maintenance for
                            Airline/Airport IT.</p>
                    </div>
                </section>
                <section id="about" className="section text-center">
                    <h1>About</h1>
                    <div className={"d-flex flex-wrap"}>
                        <div className="m-auto card">
                            <h2>Bio</h2>
                            <h3>
                                🏳️‍🌈 | He/Him | {getAge()}<br/>
                                Birmingham, UK
                            </h3>
                            <p>
                                I work in London but am currently still based in Birmingham. I am working as a Software
                                Engineer, but have previous experience as a Shift Leader in retail, as well as a
                                customer assistant.
                                I have a Masters Degree of Engineering in Computer Science/Software Engineering from the
                                University of Birmingham, graduating in 2023.
                                <br/><br/>
                                I know many programming languages, including Java, C++, Python, TypeScript, PhP, SQL,
                                and a selection of others. I have used many frameworks with these languages,
                                particularly in Java and TypeScript. I have used the Spring Boot framework to develop a
                                backend REST API, and the React framework to develop a frontend web applications. I have
                                used different databases such as MySQL, MongoDB, Oracle and Redis.
                                <br/><br/>
                                I am also familiar with many tools used in industry, such as Cloud technologies like
                                Docker, Kubernetes and Helm, as well as CI/CD tools like Jenkins. I am also very
                                familiar with Git, using it to host many of my projects.
                            </p>
                        </div>
                        <div className="m-auto card">
                            <h2>Volunteering</h2>
                            <div className={"d-flex"}>
                                <img src={scouts} alt={"Scouts"} className={"m-auto rounded card-img"}/>
                                <p className={"m-auto card-text"}>
                                    I actively volunteer for the Scouts, and have been a member of the Scouts since I
                                    was 6. I went up through all of the sections, becoming a Young Leader when I was 15
                                    in the Cubs Section. When I turned 18, I transitioned to become an assistant Cub
                                    leader, and have since become the section Team Leader. I have completed all of my
                                    training, and earned my Wood Badges in 2024. I run planning meetings and run section
                                    nights for the Cubs, teaching them new skills and helping them meet new people from
                                    all walks of life. We do lots of badgework with a mix of games to keep things
                                    fun.
                                    <br/><br/>
                                    I also volunteer for a Scout campsite called Alfrey Activity Centre located in
                                    Coventry, UK. I am a service crew member, and recently took on the role as Systems
                                    Administrator. I revamped their website, and developed a in-house booking management
                                    solution to help manage their bookings. With this, I was able to allow them to track
                                    their booking trends, and provide groups with an easier, more efficient booking
                                    process.
                                </p>
                            </div>
                        </div>
                        <div className="m-auto card">
                            <h2>Hobbies</h2>
                            <div className={"d-flex"}>
                                <img src={hyperia} alt={"Hyperia"} className={"m-auto rounded card-img"}/>
                                <p className={"m-auto card-text"}>
                                    I love to play Video Games, particularly Minecraft. I love to play Mini-games, as
                                    well as get stuck into a Survival world. I was a Senior Moderator on the Mineplex
                                    network for over 5 years, from 2016-2021, on the Event Squad Team. We were
                                    responsible for creating and hosting engaging events for the community, and we also
                                    managed a team of Event Assistants who helped us host events.
                                    <br/><br/>
                                    I'm also a huge fan of board games and card games! I have a small collection of
                                    games that I love to play with friends. I love to play Monopoly and I also love
                                    playing UNO.
                                    <br/><br/>
                                    I'm also a huge fan of music, and you will catch my listening to music almost
                                    constantly. My preferred genre is Electronic, but I have been known to enjoy music
                                    from almost all genres. My Spotify Wrapped 2024 came in at a total of 91,945 minutes
                                    listened!
                                    <br/><br/>
                                    I am also an adrenaline-junkie, and love to go to theme parks and ride coasters! I
                                    have a Merlin Annual Pass, and love to take trips to Alton Towers and Thorpe Park.
                                    My favourite ride in the UK is Hyperia at Thorpe Park, but my favourite overall is
                                    Guardians of the Galaxy: Cosmic Rewind at Epcot in the US!
                                </p>
                            </div>
                        </div>
                        <div className="m-auto card">
                            <h2>Programming Languages/Databases</h2>
                            <p>
                                I know many different languages to a varying degree, however I have proficiency in Java
                                and TypeScript.
                                I have used many languages in personal projects across a selection of different use
                                cases. You can see a list of the
                                languages I am familiar with, along with my proficiency in each of them below:
                                <br/><br/>
                                <strong>Java:</strong> <i>Advanced</i><br/>
                                <strong>TypeScript:</strong> <i>Advanced</i><br/>
                                <strong>SQL:</strong> <i>Advanced</i><br/>
                                <strong>Python:</strong> <i>Advanced</i><br/>
                                <strong>C++:</strong> <i>Intermediate</i><br/>
                                <strong>PhP:</strong> <i>Intermediate</i><br/>
                                <strong>HTML/CSS:</strong> <i>Intermediate</i><br/>
                                <strong>Visual Basic:</strong> <i>Intermediate</i><br/>
                                <br/>
                                I am always developing my understanding of languages I already know, and I also love to
                                learn new ones! There are a selection of languages I wish to learn in the future, and
                                some of these include: C#, Kotlin, Rust, and others!
                                <br/><br/>
                                I am also familiar with a few database solutions, such as MongoDB, Oracle DB, MySQL,
                                SQLite, and Redis. I have used these extensively in projects, learning the query
                                language syntax and how to interface with each of them.
                            </p>
                        </div>
                        <div className="m-auto card">
                            <h2>Tools and Frameworks</h2>
                            <p>
                                I am familiar with a wide variety of frameworks and tools. I use many different
                                frameworks in
                                my personal projects, and use many tools to help host them. Here are a few examples of
                                the frameworks/APIs
                                I've used in the past:<br/><br/>
                                <strong>Spring Boot:</strong> <i>Advanced</i><br/>
                                <strong>React:</strong> <i>Advanced</i><br/>
                                <strong>Spigot API:</strong> <i>Advanced</i><br/>
                                <strong>Java Discord API:</strong> <i>Intermediate</i><br/>
                                <strong>Minecraft Protocol/NMS:</strong> <i>Intermediate</i><br/>
                                <strong>Java Cryptography:</strong> <i>Basic</i><br/>
                                <strong>Django:</strong> <i>Basic</i><br/><br/>
                                I've also used many tools for development, including source control with Git, project
                                management with Jira, and CI/CD with Jenkins. I have used the Jenkins pipeline
                                extensively, writing my own pipeline scripts in Groovy.
                                I use Git to manage my projects source code and Jira to manage bugs and
                                developments.
                                <br/><br/>
                                I am also familiar with cloud technologies such as Docker, Kubernetes and Helm. One of
                                my projects is hosted using these technologies to allow me to better control
                                deployments, and make it easier to manage dependencies and the environment in which its
                                hosted.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="education-work" className="section text-center">
                    <h1>Education and Work</h1>
                    <div className={"d-flex flex-wrap"}>
                        <div className={"m-auto card"}>
                            <h2>My Education</h2>
                            <Timeline events={[
                                {
                                    where: "Lyndon School",
                                    events: [{
                                            title: "GCSE",
                                            date: "2015-2017",
                                            description: <>
                                                Achieved 10 GCSE's Grade A*-C in:<br/>
                                                Maths (Higher), English, Physics, Biology, Chemistry, Computer Science, IT,
                                                Citizenship Studies, Drama
                                            </>
                                        }],
                                    icon: "fa-solid fa-school"
                                },
                                {
                                    where: "The Sixth Form College, Solihull",
                                    events: [
                                        {
                                            title: "A-Level",
                                            date: "2017-2019",
                                            description: <>
                                                Maths: A*<br/>
                                                Computer Science: A<br/>
                                                Drama & Theatre Studies: B<br/>
                                                EPQ: B
                                            </>,
                                        }
                                    ],
                                    icon: "fa-solid fa-school"
                                },
                                {
                                    where: "University of Birmingham",
                                    events: [
                                        {
                                            title: "MEng Computer Science/Software Engineering",
                                            date: "2019-2023",
                                            description: <>
                                                Earned 2:1<br/>
                                                Completed modules:<br/>
                                                Programming in Java, Data Structures & Algorithms, Mathematical Foundations of
                                                Computer Science, Logic & Computation, Artificial Intelligence, Team Project,
                                                Software Engineering and Professional Practice, Functional Programming, Systems
                                                Programming in C/C++, Security and Networks, Human-Computer Interaction,
                                                Intelligent Robotics, Advanced Networking, Mobile & Ubiquitous Computing,
                                                Teaching Computer Science in Schools.
                                            </>,
                                        }
                                    ],
                                    icon: "fa-solid fa-graduation-cap"
                                }
                            ]}/>
                        </div>

                        <div className={"m-auto card"}>
                            <h2>Work History</h2>
                            <Timeline events={[
                                {
                                    where: "Birmingham City Football Club / Stechford Social Working Mens Club",
                                    events: [
                                        {
                                            title: "Bartender",
                                            date: "Sep 2019 - Apr 2020",
                                            description: <>
                                            </>,
                                        }
                                    ],
                                    icon: "fa-solid fa-beer-mug-empty"
                                },
                                {
                                    where: "Tesco PLC",
                                    events: [
                                        {
                                            title: "Customer Assistant",
                                            date: "Mar 2020 - Aug 2022",
                                            description: <>
                                                I started with Tesco as a Customer Assistant working on the Price
                                                Integrity/Stock Control team and was moved to the Fruit & Veg team shortly after
                                                due to an open vacancy.

                                                Over the time I worked at the store, I was trained in every department in-store,
                                                and worked several shifts in all departments.

                                                I learned about the legal responsibility that retailers have to keep customers
                                                and colleagues safe.
                                            </>,
                                        },
                                        {
                                            title: "Shift Leader",
                                            date: "Aug 2022 - Aug 2023",
                                            description: <>
                                                After working on Produce for 2 years, I applied and was accepted for a position
                                                as a part-time Shift Leader, focusing on our Produce and Fresh teams.
                                            </>
                                        }
                                    ],
                                    icon: "fa-solid fa-apple-whole"
                                },
                                {
                                    where: "Amadeus IT Services Ltd",
                                    events: [
                                        {
                                            title: "Graduate Software Engineer",
                                            date: "Sep 2023 - Apr 2025",
                                            description: <>
                                                After graduation, I worked as a Backend C++ Developer in Software Maintenance.
                                                My role was to primarily investigate and resolve bugs in the backend systems.
                                                I also worked on some pro-active maintenance objectives with the aim of
                                                preventing incoming incident records or improving investigation techniques.
                                                Other parts of my role included performing weekly tasks and also some work on
                                                internal tooling.
                                            </>,
                                        } ,
                                        {
                                            title: "Software Development Engineer I",
                                            date: "Apr 2025 - Present",
                                            description: <>
                                                I passed my Grad Scheme in April 2025, and was promoted to Software Engineer I.
                                                Continuing as a Backend C++ Developer, I mostly work on fixing bugs and investigating
                                                issues. I also take on some pro-active maintenance in the form of improvements to
                                                the system, preventing issues before they arise. I take a more active role in
                                                improvements to internal tooling, working with Angular to provide web interfaces
                                                that interact with our databases.
                                            </>
                                        }
                                    ],
                                    icon: "fa-solid fa-terminal"
                                }
                            ]}/>
                        </div>
                    </div>
                </section>
                <section id="projects" className="section text-center">
                    <h1>Projects</h1>
                    <div className={"d-flex flex-wrap"}>
                        <div className="m-auto card">
                            <h2>AuroraMC</h2>
                            <div className={"d-flex"}>
                                <img src={aurora} alt={"AuroraMC"} className={"m-auto"} style={{width: "100px"}}/>
                            </div>
                            <div className={"d-flex"}>
                                <p className={"m-auto card-text"}>
                                    AuroraMC was a passion project spanning over 5 years. It was a multi-server Minecraft
                                    mini-game network, with the aim of creating a fun and engaging gameplay experience.
                                    <br/><br/>
                                    I lead all technical sides of the network, including infrastructure, database management,
                                    plugin development and server administration. I also worked on the design and
                                    development of the games, including the gameplay mechanics, technical design
                                    and game implementation itself.
                                    <br/><br/>
                                    We implemented a fully-functional network with automatic deployments, a game engine,
                                    a custom command engine, database management systems and much more. We utilised many
                                    technologies and software to achieve this, including MySQL, Redis, Jenkins, GitHub,
                                    Maven, Java, PhP, JavaScript, and many more.
                                    <br/><br/>
                                    All of the plugins built off of the Spigot API, with some heavy modifications to the
                                    default behavior to customise everything to be how we wanted it to be. We also made
                                    some minor modifications to the Minecraft protocol to allow us to implement our own
                                    disguise and vanish system. The source code was over 100,000 lines of code, and
                                    consisted of 8 Minecraft plugins, 2 standalone Java applications, and 3 PhP/JavaScript
                                    web applications.
                                    <br/><br/>
                                    The source code for this project is still private, but the GitHub Organisation is
                                    still public to view.
                                    <br/><br/>
                                    <a href={"https://github.com/AuroraMC"}>
                                        <i className={"fa-brands fa-github"}/>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="m-auto card">
                            <h2>Alfrey Booking Management System</h2>
                            <div className={"d-flex"}>
                                <img src={alfrey} alt={"Alfrey Activity Centre"} className={"m-auto rounded card-img project-img"}/>
                                <p className={"m-auto card-text"}>
                                    When I took on the role of Systems Administrator for the Alfrey Activity Centre,
                                    I was tasked with overhauling their digital presence. I created a brand new website
                                    and a booking management system to allow them to manage their bookings.
                                    <br/><br/>
                                    The booking system and website is built with a Java Spring Boot backend and a TypeScript
                                    React frontend. All of these services are hosted in Docker containers on a Kubernetes
                                    cluster, and all traffic is served through a NGINX Ingress Controller, which manages
                                    routing between our test and production environments.
                                    <br/><br/>
                                    This project was a great learning experience for me, as I had never worked with
                                    any of these technologies before. I knew Java and some very basic Spring Boot concepts,
                                    but had not gone in-depth with the framework, and had certainly not used any cloud
                                    technologies up until this project.
                                    <br/><br/>
                                    Our updates are deployed to Helm using a Jenkins pipeline, where we have a job that will
                                    build the Docker image and upload it to a private Docker repository, and another jobs which
                                    will upgrade the version used in the Helm chart on the servet it's hosted on.
                                    <br/><br/>
                                    As this is an active project, the source code is private. If you wish to learn more, don't hesitate
                                    to reach out.
                                    <br/><br/>
                                    <a href={"https://github.com/AAC-Broadwater"}>
                                        <i className={"fa-brands fa-github"}/>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="m-auto card">
                            <h2>HubParkour</h2>
                            <p>
                                HubParkour is a free, open-source Minecraft Spigot plugin for use in Hub servers. It is
                                designed to be lightweight, easy to use and completely configurable. The project started
                                in 2017, but has received bugfix and feature updates over time.<br/><br/>
                                The plugin is built on the Spigot API, and has its own developer API so developers can
                                extend the capabilities of the plugin. The API is hosted in a Sonatype Nexus repository,
                                and can be used as a dependency in both Maven and Gradle.<br/><br/>
                                I actively offer support for the plugin via Discord, getting feedback from the community
                                and some of the suggestions have even made their way into the plugin! As an open-source
                                project, it's also open to contributions in the form of Pull Requests! We've had a few
                                contributions from community members in the past!<br/><br/>
                                The source code, Maven repository, support Discord, SpigotMC page, and JavaDocs can be found here:
                                <br/><br/>
                                <a href={"https://github.com/Block2Block/HubParkour"}>
                                    <i className={"fa-brands fa-github"}/>
                                </a>
                                <a href={"https://nexus.block2block.me/#browse/browse:HubParkour"}>
                                    <i className={"fa-solid fa-link"}/>
                                </a>
                                <a href={"https://discord.gg/PVdDNWs"}>
                                    <i className={"fa-brands fa-discord"}/>
                                </a>
                                <a href={"https://www.spigotmc.org/resources/hubparkour.47713/"}>
                                    <i className={"fa-solid fa-link"}/>
                                </a>
                                <a href={"https://hubparkour.block2block.me/"}>
                                    <i className={"fa-brands fa-java"}/>
                                </a>
                            </p>
                        </div>
                        <div className="m-auto card">
                            <h2>Misc other projects</h2>
                            <p>
                                I have done a variety of other projects throughout University and
                                in my spare time. Most of these projects are hosted publicly on my
                                GitHub profile.<br/><br/>
                                I have projects such as more Spigot plugins, some web development for
                                personal use, and other projects that I used as a learning experience.
                                <br/><br/>
                                You can view all of these projects on my GitHub:
                                <br/><br/>
                                <a href={"https://github.com/Block2Block"}>
                                    <i className={"fa-brands fa-github"}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
