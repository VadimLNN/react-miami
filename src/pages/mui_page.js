import ButtonUsage from "../components/mui_components/mui_button";

const MuiPage = () => {
    return (
        <main style={{ margin: "2erm", padding: "1erm" }}>
            <div>{ButtonUsage("HELLO")}</div>
            <div>{ButtonUsage("HELLO")}</div>
        </main>
    );
};

export default MuiPage;
