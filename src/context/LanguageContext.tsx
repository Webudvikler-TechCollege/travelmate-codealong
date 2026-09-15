import { createContext, useContext, useState, type ReactNode } from "react"

// Beskriver sprog variabel og funktionen til at ændre det.
type LanguageContextValue = {
    language: string,
    setLanguage: (language: string) => void
}

// Opretter en fælles kontekst med standardværdier, hvis der ikke er en provider.
export const LanguageContext = createContext<LanguageContextValue>({
    language: "da",
    setLanguage: () => { }
})

// Deler sproget med de komponenter, der ligger inde i denne provider.
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Gemmer det valgte sprog. Dansk er valgt fra start.
    const [language, setLanguage] = useState("da")

    // Giver children adgang til sproget og funktionen setLanguage.
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Et hook, som gør det nemt at bruge sprogkonteksten i en komponent.
export const useLanguage = () => { 
    return useContext(LanguageContext) 
}
