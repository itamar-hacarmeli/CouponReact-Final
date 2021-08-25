import Button from "@material-ui/core/Button/Button";
import { useHistory } from "react-router-dom";
import "./Connect.css";

function Connect(): JSX.Element {
    const history = useHistory();

    function goToLogin(){
        history.push("/login");
    }

    return (
        <div className="Connect">
			<Button variant="outlined" color="primary" onClick={goToLogin}>התחבר</Button>

        </div>
    );
}

export default Connect;
