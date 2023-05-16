import React from 'react';
import { createContext } from 'react';
import PracticeUsefirebases from '../Utiles/PracticeUsefirebases';

export const AuthContextProviderForFirebase = createContext();
const AuthProivder = ({children}) => {
    const AllfirebaseElement = PracticeUsefirebases();
    return (
        <AuthContextProviderForFirebase.Provider value={AllfirebaseElement}>
            {children}
        </AuthContextProviderForFirebase.Provider>
    );
};

export default AuthProivder;