import Login from "./components/Login";
import AuthProvider from "./components/context/index";
import {AbilityContext} from "./ablity/AbilityProvider";
import {useEffect} from "react";
import {permissionItem, permissions} from "./ablity/permissions";

function App() {
    useEffect(() => {
        permissions.update(permissionItem("client"))
    }, []);

    return (
        <AbilityContext.Provider value={permissions}>
            <AuthProvider>
                <Login/>
            </AuthProvider>
        </AbilityContext.Provider>
    );
}

export default App;
