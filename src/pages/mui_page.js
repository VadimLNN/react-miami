import ButtonUsage from "../components/mui_components/ButtonUsage";
import OutlinedBasic from "../components/mui_components/OutlinedBasic";

const MuiPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Components</h2>
                <ul className="projects">
                    <div>{ButtonUsage("HELLO")}</div>
                    <div>{OutlinedBasic()}</div>
                </ul>
            </div>
        </main>
    );
};

export default MuiPage;
