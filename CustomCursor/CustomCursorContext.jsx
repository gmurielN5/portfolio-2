import { createContext, useState } from 'react';

export const CursorContext = createContext();
export const CursorContextProvider = ({ children }) => {
    const [cursor, setCursor] = useState({ scroll: false, link: false });
    const [isVisible, setIsVisible] = useState(false);

    return (
        <CursorContext.Provider value={{ cursor, setCursor, isVisible, setIsVisible }}>
            {children}
        </CursorContext.Provider>
    );
};
