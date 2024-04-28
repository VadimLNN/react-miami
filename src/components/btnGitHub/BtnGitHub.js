import gitHubIcon from "./../../img/icons/gitHub-black.svg";
import "./style.css";

const BtnGitHub = (props) => {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
        >
            <img src={gitHubIcon} alt="" />
            GitHub repo
        </a>
    );
};

export default BtnGitHub;
