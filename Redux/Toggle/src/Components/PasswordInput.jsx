import React from "react";
import useToggle from "../Hooks/useToggles";

function passwordInput() {
    const [showpassword, togglepassword] = useToggle(false);

    return (
        <div>
            <input
            type = {showpassword ? "text" : "password"}
            placeholder="Enter password" />

            <button onClick={togglepassword}>
                {showpassword ? "Hide" : "show"} password
            </button>
        </div>
    );
}


export default passwordInput;