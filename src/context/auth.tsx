import { createContext, useState, useContext, type Dispatch, type SetStateAction, type ReactNode } from "react";

interface AuthContextType {
    autenticado: boolean;
    setAutenticado: Dispatch<SetStateAction<boolean>>;
}

interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext<AuthContextType>(
    {
        autenticado: false,
        setAutenticado: () => {},
    }
);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [autenticado, setAutenticado] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ autenticado, setAutenticado }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };