import React, { useContext } from "react";

import UserContext from "./UserContext";

import "./Home.css"

/**Renders homepage
 * Props, State: none
 * Context: Consumes user context
 * Routes -> Home
 * Location: /
 */
function Home() {
    const user = useContext(UserContext);
    return (
        <div className="Home">
            {user
                ? <h1>Welcome {user.firstName}!!!!!</h1>
                : <div>
                    <h1>Jobly</h1>
                    <p>Jobs jobs jobs, come get your jobs~</p>
                </div>
            }
        </div>
    );
}

export default Home;