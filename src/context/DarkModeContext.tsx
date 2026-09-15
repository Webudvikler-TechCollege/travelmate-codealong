import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Beskriver sprog variabel og funktionen til at ændre det.
type DarkModeContextValue = {
    darkMode: boolean,
    toggleDarkMode: () => void,
    setDarkMode: (darkMode: boolean) => void
}

// Opretter en fælles kontekst med standardværdier, hvis der ikke er en provider.
export const DarkModeContext = createContext<DarkModeContextValue>({
    darkMode: false,
    toggleDarkMode: () => { },
    setDarkMode: () => { }
})

// Deler indstillingen med de komponenter, der ligger inde i denne provider.
export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    // Gemmer den valgte indstilling.
    const [darkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode)
    }, [darkMode])

    // Skifter mellem true og false
    const toggleDarkMode = () => {
        setDarkMode((current) => !current)
    }

    // Giver children adgang til sproget og funktionen setLanguage.
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

// Et hook, som gør det nemt at bruge sprogkonteksten i en komponent.
export const useDarkMode = () => {
    return useContext(DarkModeContext)
}
