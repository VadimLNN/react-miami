import ButtonUsage from "../mui_components/ButtonUsage";
import OutlinedBasic from "../mui_components/OutlinedBasic";

const InputField = (text, handleInput, handleSubmit) => {
    return (
        <label>
            <div value={text} onChange={(element) => handleInput(element.target.value)}>
                {OutlinedBasic()}
            </div>

            <button style={{ margin: "5px", padding: "5px" }} onClick={handleSubmit}>
                {ButtonUsage("Add Todo")}
            </button>
        </label>
    );
};

export default InputField;
