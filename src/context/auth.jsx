import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [autenticado, setAutenticado] = useState(false);

    return (
        <AuthContext.Provider value={{ autenticado, setAutenticado }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };