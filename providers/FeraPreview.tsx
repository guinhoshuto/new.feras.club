import { createContext, useState, useContext } from 'react'

export const FeraPreviewContext = createContext({});

export const FeraPreviewProvider = ( props :any ) => {
    const [fera, setFera] = useState([]);

    <FeraPreviewContext.Provider value={{fera, setFera}}>
        { props.children}
    </FeraPreviewContext.Provider>   
}

export const useFera = () => useContext(FeraPreviewContext)