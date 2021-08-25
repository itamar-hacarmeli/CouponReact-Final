import { Component } from "react";
import "./Logo.css";
import logoImage from "../../Assets/Color logo with background.png"

class Logo extends Component {

    public render(): JSX.Element {
        return (
            <div className="Logo">
				<img src={logoImage} alt="logo"/>
            </div>
        );
    }
}

export default Logo;
