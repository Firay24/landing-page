import React, { createContext, useContext, useState, useEffect } from 'react'

const ApiContext = createContext()

export const useApi = () => {
    return useContext(ApiContext)
}

export const ApiProvider = ({ children, initialApiData }) => {
    const [apiData, setApiData] = useState(initialApiData)

    return (
        <ApiContext.Provider value={apiData}>
            {children}
        </ApiContext.Provider>
    )
}