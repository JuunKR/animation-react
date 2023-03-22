import { Link } from "react-router-dom";


function Home() {

    return (
        <div>
            <div>
                <Link to="/variants" >Variants</Link>
            </div>
            <div>
                <Link to="/gestures" >Gestures</Link>
            </div>
        </div>
    );
}

export default Home;
