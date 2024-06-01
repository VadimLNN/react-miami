import ButtonUsage from "../components/mui_components/ButtonUsage";
import OutlinedBasic from "../components/mui_components/OutlinedBasic";

const MuiPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Components</h2>
                <ul className="projects">
                    <div className="section">
                        <div className="container"> {ButtonUsage("HELLO")} </div>
                    </div>
                </ul>
                <ul className="projects">
                    <div className="section">
                        <div className="container"> {OutlinedBasic()} </div>
                    </div>
                </ul>
            </div>
        </main>
    );
};

export default MuiPage;
