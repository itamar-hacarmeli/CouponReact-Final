import "./Layout.css";
import Header from "../Header/Header"
import {BrowserRouter} from "react-router-dom"
import Routing from "../Routing/Routing";
import NavRouting from "../../NavRouting/NavRouting";


function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <BrowserRouter>
			    <header>
                    <Header/>
                    <br/><br/><br/><br/><br/><br/>
                    <NavRouting/>
                </header>
                <main>
                <br/><br/>
                <Routing/>
                 </main>
                <footer>
                </footer>
            </BrowserRouter>    
        </div>
    );
}

export default Layout;
