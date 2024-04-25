const Projects = () => {
    return (
        <main calssName="section">
            <div calssName="container">
                <h2 calssName="title-1">Projects</h2>
                <ul calssName="projects">
                    <li calssName="project">
                        <a href="./project-page.html">
                            <img
                                src="./img/projects/01.jpg"
                                alt="Project img"
                                calssName="project__img"
                            />
                            <h3 calssName="project__title">
                                Gaming streaming portal
                            </h3>
                        </a>
                    </li>
                    <li calssName="project">
                        <a href="./project-page.html">
                            <img
                                src="./img/projects/02.jpg"
                                alt="Project img"
                                calssName="project__img"
                            />
                            <h3 calssName="project__title">Video service</h3>
                        </a>
                    </li>
                    <li calssName="project">
                        <a href="./project-page.html">
                            <img
                                src="./img/projects/03.jpg"
                                alt="Project img"
                                calssName="project__img"
                            />
                            <h3 calssName="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li calssName="project">
                        <img
                            src="./img/projects/04.jpg"
                            alt="Project img"
                            calssName="project__img"
                        />
                        <h3 calssName="project__title">Dating app</h3>
                    </li>
                    <li calssName="project">
                        <img
                            src="./img/projects/05.jpg"
                            alt="Project img"
                            calssName="project__img"
                        />
                        <h3 calssName="project__title">Landing</h3>
                    </li>
                    <li calssName="project">
                        <img
                            src="./img/projects/06.jpg"
                            alt="Project img"
                            calssName="project__img"
                        />
                        <h3 calssName="project__title">Gaming community</h3>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Projects;
